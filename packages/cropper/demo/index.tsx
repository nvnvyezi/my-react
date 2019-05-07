import React, { useState } from 'react'

import Cropper from '../index'

interface IState {
  file: FileList | null
}

export default function CropperDemo() {
  const [file, setFile] = useState<IState['file']>(null)
  return (
    <div>
      <input
        type="file"
        name=""
        id=""
        onChange={e => {
          console.log(e.target.files)
          setFile(e.target.files)
        }}
      />
      {file ? <Cropper file={file} onUpload={() => {}} /> : null}
      <Cropper
        url="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0F/00/ChMkJlwuAEuIMbmBAAMSpPUXEUkAAuKRAMRt0IAAxK8664.jpg"
        onUpload={() => {}}
      />
    </div>
  )
}
