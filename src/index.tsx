import React from 'react'
import ReactDom from 'react-dom'

import { Cropper } from '../packages/demo-index'

function App() {
  return (
    <div>
      <Cropper />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('app'))
