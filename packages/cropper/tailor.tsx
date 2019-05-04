import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'

import { fromEvent } from 'rxjs'
import { useEventCallback, useObservable } from 'rxjs-hooks'
import {
  map,
  withLatestFrom,
  switchMap,
  takeUntil,
  delay,
} from 'rxjs/operators'

import './styles/tailor.css'

export interface ITailor {
  // 图片链接
  src: string
  // 裁剪框展示宽度
  tailorWidth?: number
  // 裁剪框展示高度
  tailorHeight?: number
  // 自定义裁剪框class
  tailorClassName?: string
}

export default function Tailor(props: ITailor) {
  const { src, tailorHeight = 400, tailorWidth = 400, tailorClassName } = props

  const [imgInfo, setImgInfo] = useState({
    height: 0,
    top: 0,
  })
  const [cropperBox, setCropperBox] = useState({
    width: 50,
    height: 50,
  })

  const [onMouseDown, [x, y]] = useEventCallback(
    (event$: any, state$) =>
      event$.pipe(
        withLatestFrom(state$),
        map(([event, prev]: [MouseEvent, number[]]) => [
          event.clientX,
          event.clientY,
          prev,
        ]),
        switchMap(([startX, startY, prev]) => {
          return fromEvent(window, 'mousemove').pipe(
            map((event: any) => [
              event.clientX - startX + prev[0],
              event.clientY - startY + prev[1],
            ]),
            takeUntil(fromEvent(window, 'mouseup'))
          )
        })
      ),
    [0, 0]
  )
  function useStyle(x: number, y: number) {
    const [left, top] = useObservable(
      inputs$ => inputs$.pipe(delay(0)),
      [0, 0],
      [x, y]
    )
    return { left, top }
  }

  const cropperStyle = useStyle(x, y)

  const imgRef = useRef(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = function() {
      const height = (img.height * tailorWidth) / img.width
      setImgInfo({ height, top: tailorHeight / 2 - height / 2 })
    }
  }, [])

  return (
    <section
      className={classnames('tailor', tailorClassName)}
      style={{ width: `${tailorWidth}px`, height: `${tailorHeight}px` }}
    >
      <img
        ref={imgRef}
        height={imgInfo.height}
        src={src}
        style={{ top: `${imgInfo.top}px` }}
        alt=""
      />
      <div
        className="cropper"
        style={{ top: `${imgInfo.top}px`, height: `${imgInfo.height}px` }}
      >
        <div
          className="resizer"
          style={{
            width: `${cropperBox.width}px`,
            height: `${cropperBox.height}px`,
            ...cropperStyle,
          }}
          onMouseDown={onMouseDown}
        >
          <div className="ord-n resize-bar" />
          <div className="ord-s resize-bar" style={{ bottom: 0, left: 0 }} />
          <div
            className="ord-w resize-bar"
            style={{ left: 0, top: 0, height: `${cropperBox.height}px` }}
          />
          <div
            className="ord-e resize-bar"
            style={{ right: 0, top: 0, height: `${cropperBox.height}px` }}
          />
        </div>
      </div>
    </section>
  )
}
