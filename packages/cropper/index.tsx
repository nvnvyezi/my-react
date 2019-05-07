import React, { useEffect, useState } from 'react'
import get from 'lodash/get'
import { Omit } from 'lodash'

import Tailor, { ITailor } from './tailor'

interface IProps extends Omit<ITailor, 'src'> {
  // 本地选择的图片
  url?: string
  file?: FileList
}

export default function Cropper(props: IProps) {
  const { file, url: propSrc, ...otherProps } = props

  const [url, setSrc] = useState(propSrc)

  useEffect(() => {
    fileToUrl()
  })

  // 将file对象转换为url
  function fileToUrl() {
    const imgFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i
    if (url && typeof url === 'string') {
      setSrc(url)
    } else if (file && URL.createObjectURL && imgFilter.test(file[0].type)) {
      setSrc(URL.createObjectURL(file[0]))
    } else if (file && imgFilter.test(file[0].type)) {
      const reader = new FileReader()
      file && reader.readAsDataURL(file[0])
      reader.onload = function(e: ProgressEvent) {
        setSrc(get(e, 'target.result', ''))
      }
    }
  }

  if (url) {
    return <Tailor src={url} {...otherProps} />
  }
  return <div>请选择有效的图</div>
}
