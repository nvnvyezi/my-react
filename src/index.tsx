import React from 'react'
import ReactDom from 'react-dom'

import { Radio } from '../packages/demo-index'

function App() {
  return (
    <div>
      <Radio />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('app'))
