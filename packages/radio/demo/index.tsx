import React, { useState } from 'react'

import Radio, { RadioGroup } from '../index'

export default function DadioDemo() {
  const [val1, setVal1] = useState('Apple')
  const [val2, setVal2] = useState('Apple')
  const [val3, setVal3] = useState('Apple')
  const [val4, setVal4] = useState(1)
  /**
   * 最基本的用法
   */
  function renderBaseRadio() {
    return (
      <span>
        <Radio>BaseRadio</Radio>
        <Radio checked={true}>BaseRadio</Radio>
        <Radio autoFocus={true}>BaseRadio</Radio>
        <Radio disabled={true}>BaseRadio</Radio>
      </span>
    )
  }

  /**
   * radio group options
   */
  function renderRadioGroup() {
    const plainOptions = ['Apple', 'Pear', 'Orange']
    const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ]
    const optionsWithDisabled = [
      { label: 'Apple', value: 'Apple', disabled: true },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: true },
    ]

    function onChange1(e: any) {
      console.log('radio1 checked', e.target.value)
      setVal1(e.target.value)
    }

    function onChange2(e: any) {
      console.log('radio2 checked', e.target.value)
      setVal2(e.target.value)
    }

    function onChange3(e: any) {
      console.log('radio3 checked', e.target.value)
      setVal3(e.target.value)
    }
    return (
      <div>
        <RadioGroup options={plainOptions} onChange={onChange1} value={val1} />
        <RadioGroup options={options} onChange={onChange2} value={val2} />
        <RadioGroup
          options={optionsWithDisabled}
          onChange={onChange3}
          value={val3}
        />
      </div>
    )
  }

  /**
   * radio group Radio
   */
  function renderRadioGroup2() {
    function onChange(e: any) {
      console.log('radio checked', e.target.value)
      setVal4(e.target.value)
    }
    return (
      <RadioGroup onChange={onChange} value={val4}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
    )
  }

  return (
    <div>
      {/* {renderBaseRadio()} */}
      {renderRadioGroup2()}
      {renderRadioGroup()}
    </div>
  )
}
