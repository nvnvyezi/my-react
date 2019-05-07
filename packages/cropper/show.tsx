import React, { useEffect, useState } from 'react'

import './styles/show.css'

interface IProps {
  top: number
  left: number
  size: number
  originalW: number
  originalH: number
  height: number
  src: string
  tailorWidth: number
}

export default function ShowPhoto(props: IProps) {
  const {
    src,
    originalH,
    originalW,
    tailorWidth,
    height,
    left,
    top,
    size,
  } = props
  const [imgUrl, setImgUrl] = useState()
  useEffect(() => {
    handleData()
  }, [props])

  function handleData() {
    const image = new Image()
    image.setAttribute('crossorigin', 'anonymous')
    image.src = src
    image.onload = function() {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = 122
      canvas.height = 122
      ctx &&
        ctx.drawImage(
          image,
          (left * originalW) / tailorWidth,
          (top * originalH) / height,
          (size * originalW) / tailorWidth,
          (size * originalH) / height,
          0,
          0,
          122,
          122
        )
      setImgUrl(canvas.toDataURL('image/jpeg', 0.92))
    }
  }

  return (
    <div className="cropper-photo">
      <img src={imgUrl} alt="" crossOrigin="anonymous" />
    </div>
  )
}
