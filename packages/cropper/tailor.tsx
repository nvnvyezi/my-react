import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'

import ShowPhoto from './show'

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
  className?: string
  style?: React.CSSProperties
  onUpload: (e: any) => void
}

export default function Tailor(props: ITailor) {
  const {
    src,
    tailorHeight = 400,
    tailorWidth = 400,
    tailorClassName,
    className,
    style,
  } = props

  // 图片最后的详细信息
  const [imgInfo, setImgInfo] = useState({
    originalW: 0,
    originalH: 0,
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
      setImgInfo({
        height,
        top: tailorHeight / 2 - height / 2,
        originalH: img.height,
        originalW: img.width,
      })
    }
  }, [])

  // 取消裁剪框订阅事件
  function upCropper() {
    document.onmousemove = null
  }
  // 裁剪框初始位置
  function handleDown(
    fn: (e: MouseEvent) => void,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.stopPropagation()
    cropperRef.current = { startX: e.clientX, startY: e.clientY }
    document.onmousemove = fn
    document.onmouseup = upCropper
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

  // 右边/下边拉伸裁剪框越界判断
  function _beyondJudgement(num: number) {
    if (
      cropper.size + num + cropper.top > imgInfo.height - 2 &&
      cropper.size + num + cropper.left > tailorWidth - 2
    ) {
      return
    }
    if (cropper.size + num + cropper.top > imgInfo.height - 2) {
      return setCropper({
        ...cropper,
        size: imgInfo.height - cropper.top - 2,
      })
    }
    if (cropper.size + num + cropper.left > tailorWidth - 2) {
      return setCropper({
        ...cropper,
        size: tailorWidth - cropper.left - 2,
      })
    }
    return setCropper({
      ...cropper,
      size: cropper.size + num,
    })
  }

  //右下角拉伸
  function moveSE(e: MouseEvent) {
    const init = cropperRef.current
    const moveX = e.clientX - init.startX
    const moveY = e.clientY - init.startY
    const moveMax = moveX > moveY ? moveX : moveY
    _beyondJudgement(moveMax)
  }

  //向下拉伸
  function moveS(e: MouseEvent) {
    const init = cropperRef.current
    const moveY = e.clientY - init.startY
    _beyondJudgement(moveY)
  }

  // 左边拉伸裁剪框越界判断
  function _beyondJudgementL(num: number) {
    if (
      num > cropper.left &&
      num + cropper.top + cropper.size > imgInfo.height - 2
    ) {
      return
    }
    if (num > cropper.left) {
      return setCropper({
        ...cropper,
        size: cropper.size + cropper.left,
        left: 0,
      })
    }
    if (num + cropper.top + cropper.size > imgInfo.height - 2) {
      return setCropper({
        ...cropper,
        size: imgInfo.height - cropper.top - 2,
        left: cropper.left - (imgInfo.height - 2 - cropper.top - cropper.size),
      })
    }
    return setCropper({
      ...cropper,
      size: cropper.size + num,
      left: cropper.left - num,
    })
  }

  // 向左下拉伸
  function moveSW(e: MouseEvent) {
    const init = cropperRef.current
    const moveY = e.clientY - init.startY
    const moveX = init.startX - e.clientX
    const moveMax = moveX > moveY ? moveX : moveY
    _beyondJudgementL(moveMax)
  }

  // 向左拉伸
  function moveW(e: MouseEvent) {
    const init = cropperRef.current
    const moveX = init.startX - e.clientX
    _beyondJudgementL(moveX)
  }

  // 上边拉伸裁剪框越界判断
  function _beyondJudgementT(num: number) {
    if (num > cropper.left && num > cropper.top) {
      return
    }
    if (num > cropper.left) {
      return setCropper({
        size: cropper.size + cropper.left,
        top: cropper.top - cropper.left,
        left: 0,
      })
    }
    if (num > cropper.top) {
      return setCropper({
        size: cropper.top + cropper.size,
        top: 0,
        left: cropper.left - cropper.top,
      })
    }
    return setCropper({
      size: cropper.size + num,
      top: cropper.top - num,
      left: cropper.left - num,
    })
  }
  // 向左上拉伸
  function moveNW(e: MouseEvent) {
    const init = cropperRef.current
    const moveY = init.startY - e.clientY
    const moveX = init.startX - e.clientX
    const moveMax = moveX > moveY ? moveX : moveY
    _beyondJudgementT(moveMax)
  }

  //向上拉伸
  function moveN(e: MouseEvent) {
    const init = cropperRef.current
    const moveY = init.startY - e.clientY
    _beyondJudgementT(moveY)
  }

  // 上边拉伸裁剪框越界判断
  function _beyondJudgementR(num: number) {
    if (
      num > cropper.top &&
      cropper.size + num + cropper.left > tailorWidth - 2
    ) {
      return
    }
    if (cropper.size + num + cropper.left > tailorWidth - 2) {
      return setCropper({
        ...cropper,
        top: cropper.top - (tailorWidth - cropper.left - cropper.size),
        size: tailorWidth - cropper.left - 2,
      })
    }
    if (num > cropper.top) {
      return setCropper({
        ...cropper,
        size: cropper.top + cropper.size,
        top: 0,
      })
    }
    return setCropper({
      ...cropper,
      size: cropper.size + num,
      top: cropper.top - num,
    })
  }

  //右上拉伸
  function moveNE(e: MouseEvent) {
    const init = cropperRef.current
    const moveY = init.startY - e.clientY
    const moveX = e.clientX - init.startX
    const moveMax = moveX > moveY ? moveX : moveY
    _beyondJudgementR(moveMax)
  }

  // 向右拉扩大裁剪框
  function moveE(e: MouseEvent) {
    const init = cropperRef.current
    const moveX = e.clientX - init.startX
    _beyondJudgementR(moveX)
  }

  return (
    <section className={classnames('cropper-box', className)} style={style}>
      <div
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
            onMouseDown={e => handleDown(moveCropper, e)}
          >
            <div
              className="ord-hn resize-bar"
              onMouseDown={e => handleDown(moveN, e)}
            />
            <div
              className="ord-hs resize-bar"
              onMouseDown={e => handleDown(moveS, e)}
            />
            <div
              className="ord-hw resize-bar"
              style={{ height: `${cropper.size}px` }}
              onMouseDown={e => handleDown(moveW, e)}
            />
            <div
              className="ord-he resize-bar"
              style={{ height: `${cropper.size}px` }}
              onMouseDown={e => handleDown(moveE, e)}
            />
            <div
              className="ord-nw resize-handle"
              onMouseDown={e => handleDown(moveNW, e)}
            />
            <div
              className="ord-n resize-handle"
              onMouseDown={e => handleDown(moveN, e)}
            />
            <div
              className="ord-ne resize-handle"
              onMouseDown={e => handleDown(moveNE, e)}
            />
            <div
              className="ord-w resize-handle"
              onMouseDown={e => handleDown(moveW, e)}
            />
            <div
              className="ord-e resize-handle"
              onMouseDown={e => handleDown(moveE, e)}
            />
            <div
              className="ord-sw resize-handle"
              onMouseDown={e => handleDown(moveSW, e)}
            />
            <div
              className="ord-s resize-handle"
              onMouseDown={e => handleDown(moveS, e)}
            />
            <div
              className="ord-se resize-handle"
              onMouseDown={e => handleDown(moveSE, e)}
            />
          </div>
        </div>
      </div>
      {imgInfo.height ? (
        <ShowPhoto
          src={src}
          tailorWidth={tailorWidth}
          height={imgInfo.height}
          top={cropper.top}
          left={cropper.left}
          size={cropper.size}
          originalW={imgInfo.originalW}
          originalH={imgInfo.originalH}
        />
      ) : null}
    </section>
  )
}
