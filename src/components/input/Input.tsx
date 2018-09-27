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
  }

  render() {
    const { prefixCls, placeholder, addonBefore, addonAfter, onChange } = this.props;
    if (addonBefore || addonAfter) {
      if (typeof addonBefore === 'string') {
        return (
          <span>sd</span>
        )
      } else {
        return (
          <span>ssd</span>
        )
      }
    } else {
      return (
        <BasicInput prefixCls={prefixCls} placeholder={placeholder} onChange={onChange}/>
      );
    }
  }
}

class BasicInput extends React.PureComponent<IinputProps> {

  public selectInput: any;
  constructor(props: IinputProps) {
    super(props);
  }

  saveSelectInput = (node: any) => {
    this.selectInput = node;
  }
  handleChange = (e: any) => {
    const { onChange } = this.props;
    if (onChange && typeof onChange === 'function') {
      onChange(e);
    }
  }
  render () {
    const { prefixCls, placeholder } = this.props;
    const classesInput = classNames(`${prefixCls}-input`);
    return (
      <input ref={this.saveSelectInput} type="text" className={classesInput} onChange={this.handleChange} placeholder={placeholder}/>
    )
  }
}
export default Input;
