import React, { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'

import './styles/radio.less'

export interface IRadio {
  autoFocus: boolean
  defaultChecked: boolean
  disabled: boolean
  checked: boolean
  children: React.ReactChildren | React.ReactChild
  className: string
  name: string
  onChange: (e: React.ChangeEvent) => void
  style: React.CSSProperties
  /* 当前选中的值 */
  value: any
}

export default function Radio(props: Partial<IRadio>) {
  const {
    autoFocus = false,
    defaultChecked = false,
    disabled = false,
    className,
    children,
    checked = false,
    onChange,
    style,
    value,
    ...restProps
  } = props
  const prefixCls = 'nvnv-radio-'

  const [check, setChecked] = useState(() => defaultChecked || checked)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    autoFocus && focus()
  }, [])
  useEffect(() => {}, [checked])

  function focus() {
    inputRef.current && inputRef.current.focus()
  }

  function blur() {
    inputRef.current && inputRef.current.blur()
  }

  return (
    <label
      className={classnames(`${prefixCls}label`, className, {
        'nvnv-radio-disabled': disabled,
      })}
      style={style}
      role="radio"
      aria-checked={check}
    >
      <span className={`${prefixCls}radio`}>
        <input
          ref={inputRef}
          type="radio"
          disabled={disabled}
          value={value}
          checked={defaultChecked || check}
          onChange={e => {
            if (onChange && typeof onChange === 'function') {
              onChange(e)
            }
            setChecked(true)
          }}
          {...restProps}
        />
        <span
          className={classnames(`${prefixCls}input`, {
            'nvnv-radio-checked': check,
          })}
        />
      </span>
      <span className={`${prefixCls}content`}>{children}</span>
    </label>
  )
}
