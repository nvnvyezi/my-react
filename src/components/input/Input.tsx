import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IinputProps, IinputState } from "./interfance";
import classNames from 'classnames';
import './style/Input.less'
import Search from './Search'
import TextArea from './TextArea'

class Input extends React.PureComponent<IinputProps> {
  static Search = Search;
  static TextArea = TextArea;
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
    classNameInput: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
  }
  private selectInput: any;

  render() {
    const { prefixCls, placeholder, addonBefore, addonAfter, className, style, onChange, classNameInput, ...others } = this.props;
    const classes = classNames(`${prefixCls}-group-wrapper`, className);
    const classesBefore = classNames(`${prefixCls}-group-addon`, {
      [`${prefixCls}-group-multiple`]: addonBefore && typeof addonBefore !== 'string',
    })
    const classesAfter = classNames(`${prefixCls}-group-addon`, {
      [`${prefixCls}-group-multiple`]: addonAfter && typeof addonAfter !== 'string',
    })
    if (addonBefore || addonAfter) {
      return (
        <span className={classes} style={style}>
          {
            addonBefore &&
            <span className={classesBefore}>
              {addonBefore}
            </span>
          }
          <BasicInput prefixCls={prefixCls} radiusLeft={!!addonBefore} radiusRight={!!addonAfter} placeholder={placeholder} onChange={onChange} classNameInput={classNameInput}  {...others}/>
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
        <BasicInput ref={node => this.selectInput = node} className={className} style={style} prefixCls={prefixCls} placeholder={placeholder} onChange={onChange} classNameInput={classNameInput} {...others} />
      );
    }
  }

  handleSearch = () => {
    return this.selectInput.handleSearch();
  }
}

class BasicInput extends React.PureComponent<IinputProps, IinputState> {

  public selectInput: any;
  constructor(props: IinputProps) {
    super(props);
    this.state = {
      value: this.props.defaultValue || '',
    }
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
    this.setState({
      value: e.target.value,
    })
    const { onChange } = this.props;
    if (onChange && typeof onChange === 'function') {
      onChange(e);
    }
  }
  handleSearch = () => {
    return this.selectInput;
  }

  render () {
    const { prefixCls, className, placeholder, style, radiusLeft, radiusRight, classNameInput, ...others } = this.props;
    const { value } = this.state;
    const classesInput = classNames(`${prefixCls}-input`, className, classNameInput, {
      [`${prefixCls}-radius-left`]: radiusLeft,
      [`${prefixCls}-radius-right`]: radiusRight,
    });
    return (
      <input ref={this.saveSelectInput} {...others} type="text" defaultValue={value} className={classesInput} style={style} onChange={this.handleChange} placeholder={placeholder}/>
    )
  }
}
export default Input;
