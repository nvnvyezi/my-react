import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IinputProps } from "./interfance";
const classNames = require('classnames');
import './Input.less'

class Input extends React.PureComponent<IinputProps> {
  static defaultProps = {
    prefixCls: 'nvnv-input',
  }
  static propTypes = {
    prefixCls: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    addonBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    addonAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    defaultValue: PropTypes.string,
  }

  render() {
    const { prefixCls, placeholder, addonBefore, addonAfter, defaultValue, className, onChange } = this.props;
    const classes = classNames(`${prefixCls}-group-wrapper`, className);
    const classesBefore = classNames(`${prefixCls}-group-addon`, {
      [`${prefixCls}-group-multiple`]: addonBefore && typeof addonBefore !== 'string',
    })
    const classesAfter = classNames(`${prefixCls}-group-addon`, {
      [`${prefixCls}-group-multiple`]: addonAfter && typeof addonAfter !== 'string',
    })
    if (addonBefore || addonAfter) {
      return (
        <span className={classes}>
          {
            addonBefore &&
            <span className={classesBefore}>
              {addonBefore}
            </span>
          }
          <BasicInput prefixCls={prefixCls} radiusLeft={!!addonBefore} radiusRight={!!addonAfter} placeholder={placeholder} defaultValue={defaultValue} onChange={onChange}/>
          {
            addonAfter &&
            <span className={classesAfter}>
              {addonAfter}
            </span>
          }
        </span>
      )
    } else {
      return (
        <BasicInput prefixCls={prefixCls} placeholder={placeholder} defaultValue={defaultValue} onChange={onChange}/>
      );
    }
  }
}

class BasicInput extends React.PureComponent<IinputProps> {

  public selectInput: any;
  constructor(props: IinputProps) {
    super(props);
  }

  // ref input
  saveSelectInput = (node: any) => {
    this.selectInput = node;
  }
  // focus blur
  focus = () => {
    this.selectInput.focus();
  }
  blur = () => {
    this.selectInput.blur();
  }
  handleChange = (e: any) => {
    const { onChange } = this.props;
    if (onChange && typeof onChange === 'function') {
      onChange(e);
    }
  }
  render () {
    const { prefixCls, placeholder, radiusLeft, radiusRight, defaultValue } = this.props;
    const classesInput = classNames(`${prefixCls}-input`, {
      [`${prefixCls}-radius-left`]: radiusLeft,
      [`${prefixCls}-radius-right`]: radiusRight,
    });
    return (
      <input ref={this.saveSelectInput} type="text" value={defaultValue} className={classesInput} onChange={this.handleChange} placeholder={placeholder}/>
    )
  }
}
export default Input;
