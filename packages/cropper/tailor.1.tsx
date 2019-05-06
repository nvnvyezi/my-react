import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'

import { fromEvent } from 'rxjs'
import { useEventCallback, useObservable } from 'rxjs-hooks'
import { map, withLatestFrom, switchMap, takeUntil } from 'rxjs/operators'

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
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = function() {
      const height = (img.height * tailorWidth) / img.width
      setImgInfo({ height, top: tailorHeight / 2 - height / 2 })
    }
  }, [])

  // 拉伸s位置
  const [onMouseDownS, sH] = useEventCallback(
    (event$: any, state$) =>
      event$.pipe(
        withLatestFrom(state$),
        map(([event, prev]: any) => {
          return [event.clientY, prev]
        }),
        switchMap(([startY, prev]) => {
          return fromEvent(window, 'mousemove').pipe(
            map((event: any) => {
              return event.clientY - startY + prev
            }),
            takeUntil(fromEvent(window, 'mouseup'))
          )
        })
      ),
    0
  )
  // 裁剪框的位置
  const [onMouseDown, [resizeX, resizeY]] = useEventCallback(
    (event$: any, state$) =>
      event$.pipe(
        withLatestFrom(state$),
        map(([event, prev]: any) => {
          return [event.clientX, event.clientY, prev]
        }),
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
  function useSStyle(
    sH: number,
    imgHeight: number,
    resizeY: number,
    resizeX: number
  ) {
    const height = useObservable(
      (inputs$: any, state$) =>
        inputs$.pipe(
          withLatestFrom(state$),
          map(([[current, height, resizeY], prev]: any) => {
            console.log(current + 100 + resizeY, height, current, resizeY, prev)
            if (prev - 100 === current && current + 100 + resizeY > height) {
              return height - resizeY
            }
            return 100 + current
          })
        ),
      100,
      [sH, imgHeight, resizeY, resizeX]
    )
    return { width: height, height }
  }
  const cropperSize = useSStyle(sH, imgInfo.height, resizeY, resizeX)

  // 裁剪框的位置
  function usePositionStyle(
    resizeX: number,
    resizeY: number,
    imgHeight: number,
    cropperWidth: number
  ) {
    const [left, top] = useObservable(
      (inputs$: any) =>
        inputs$.pipe(
          map(([left, top, height, width]: any) => {
            const leftDistance = tailorWidth - width
            const topDistance = height - width

            if (top < 0) {
              if (left < 0) {
                return [0, 0]
              }
              if (left > leftDistance) {
                return [leftDistance - 2, 0]
              }
              return [left, 0]
            }
            if (top > topDistance) {
              if (left < 0) {
                return [0, topDistance - 2]
              }
              if (left > leftDistance) {
                return [leftDistance - 2, topDistance - 2]
              }
              return [left, topDistance - 2]
            }
            if (left < 0) {
              return [0, top]
            }
            if (left > leftDistance) {
              return [leftDistance - 2, top]
            }
            return [left, top]
          })
        ),
      [0, 0],
      [resizeX, resizeY, imgHeight, cropperWidth]
    )
    return { left, top }
  }
  const cropperPosition = usePositionStyle(
    resizeX,
    resizeY,
    imgInfo.height,
    cropperSize.width
  )

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
            ...cropperSize,
            ...cropperPosition,
          }}
          onMouseDown={onMouseDown}
        >
          <div className="ord-n resize-bar" />
          <div className="ord-s resize-bar" style={{ bottom: 0, left: 0 }} />
          <div
            className="ord-w resize-bar"
            style={{ left: 0, top: 0, height: `${sH}px` }}
          />
          <div
            className="ord-e resize-bar"
            style={{ right: 0, top: 0, height: `${sH}px` }}
          />
          <div className="ord-nw resize-handle" />
          <div className="ord-n resize-handle" />
          <div className="ord-ne resize-handle" />
          <div className="ord-w resize-handle" />
          <div className="ord-e resize-handle" />
          <div className="ord-sw resize-handle" />
          <div
            className="ord-s resize-handle"
            onMouseDown={e => {
              e.stopPropagation()
              onMouseDownS(e)
            }}
          />
          <div className="ord-se resize-handle" />
        </div>
      </div>
    </section>
  )
}
