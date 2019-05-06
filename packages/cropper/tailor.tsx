import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'

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

  // 图片最后的详细信息
  const [imgInfo, setImgInfo] = useState({
    height: 0,
    top: 0,
  })
  // 裁剪框信息
  const [cropper, setCropper] = useState({
    size: 100,
    top: 0,
    left: 0,
  })
  const imgRef = useRef<HTMLImageElement>(null)
  const cropperRef = useRef({ startX: 0, startY: 0 })

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = function() {
      const height = (img.height * tailorWidth) / img.width
      setImgInfo({ height, top: tailorHeight / 2 - height / 2 })
    }
  }, [])

  // 取消裁剪框订阅事件
  function upCropper() {
    document.onmousemove = null
  }
  // 裁剪框移动
  function moveCropper(e: MouseEvent) {
    const init = cropperRef.current
    const moveX = e.clientX - init.startX + cropper.left
    const moveY = e.clientY - init.startY + cropper.top
    const leftDistance = tailorWidth - cropper.size
    const topDistance = imgInfo.height - cropper.size

    if (moveY < 0) {
      if (moveX < 0) {
        return setCropper({
          ...cropper,
          top: 0,
          left: 0,
        })
      }
      if (moveX > leftDistance) {
        return setCropper({
          ...cropper,
          top: 0,
          left: leftDistance - 2,
        })
      }
      return setCropper({
        ...cropper,
        top: 0,
        left: moveX,
      })
    }
    if (moveY > topDistance) {
      if (moveX < 0) {
        return setCropper({
          ...cropper,
          top: topDistance - 2,
          left: 0,
        })
      }
      if (moveX > leftDistance) {
        return setCropper({
          ...cropper,
          top: topDistance - 2,
          left: leftDistance - 2,
        })
      }
      return setCropper({
        ...cropper,
        top: topDistance - 2,
        left: moveX,
      })
    }
    if (moveX < 0) {
      return setCropper({
        ...cropper,
        top: moveY,
        left: 0,
      })
    }
    if (moveX > leftDistance) {
      return setCropper({
        ...cropper,
        top: moveY,
        left: leftDistance - 2,
      })
    }
    return setCropper({
      ...cropper,
      top: moveY,
      left: moveX,
    })
  }
  // 裁剪框初始位置
  function startCropper(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const startX = e.clientX
    const startY = e.clientY
    cropperRef.current = { startX, startY }
    document.onmousemove = moveCropper
    document.onmouseup = upCropper
  }

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
            width: `${cropper.size}px`,
            height: `${cropper.size}px`,
            top: `${cropper.top}px`,
            left: `${cropper.left}px`,
          }}
          onMouseDown={startCropper}
        >
          <div className="ord-n resize-bar" />
          <div className="ord-s resize-bar" />
          <div
            className="ord-w resize-bar"
            style={{ height: `${cropper.size}px` }}
          />
          <div
            className="ord-e resize-bar"
            style={{ height: `${cropper.size}px` }}
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
            }}
          />
          <div className="ord-se resize-handle" />
        </div>
      </div>
    </section>
  )
}
