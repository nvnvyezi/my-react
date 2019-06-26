import React, { useState, useEffect } from 'react'

import Radio from './radio'

import { IRadio } from './radio'

interface IOption {
  label?: string
  value?: string
  disabled?: boolean
}

interface IRadioGroup
  extends Pick<IRadio, 'onChange' | 'value' | 'className' | 'style'> {
  children: React.ReactChildren[] | React.ReactElement<any>[] | React.ReactNode
  /* 默认选中的值 */
  defaultValue: any
  /* 禁选所有子单选器 */
  disabled: boolean
  /* 配置形式设置子元素 */
  options: (IOption | string)[]
}

export default function RadioGroup(props: Partial<IRadioGroup>) {
  const prefixCls = 'nvnv-radio-group'
  const {
    children,
    className,
    defaultValue,
    disabled,
    style,
    onChange,
    options,
  } = props

  const value = defaultValue || props.value

  if (options && options.length > 0) {
    return (
      <div className={className} style={style}>
        {options.map((option: IOption | string) => {
          if (typeof option === 'string') {
            return (
              <Radio
                key={option}
                value={option}
                checked={value === option}
                disabled={disabled}
                onChange={onChange}
              >
                {option}
              </Radio>
            )
          } else {
            return (
              <Radio
                key={option.label}
                value={option.value}
                checked={value === option.value}
                disabled={option.disabled}
                onChange={onChange}
              >
                {option.label}
              </Radio>
            )
          }
        })}
      </div>
    )
  }

  return (
    <div className={`${prefixCls}`}>
      {React.Children.map(children, (radio: any) => {
        if (!radio) {
          return null
        }
        if (radio.type.name === 'Radio') {
          console.log(value === radio.props.value)
          return React.cloneElement(radio, {
            checked: value === Number(radio.props.value),
            onChange,
          })
        }
        return radio
      })}
    </div>
  )
}
