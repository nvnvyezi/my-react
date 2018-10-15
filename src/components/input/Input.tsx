import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IinputProps, IinputState } from "./interfance";
import classNames from 'classnames';
import './style/input.less'
import Search from './Search'
import TextArea from './TextArea'

class Input extends React.PureComponent<IinputProps> {
  static Search: typeof Search;
  static TextArea: typeof TextArea;
  static defaultProps = {
    prefixCls: 'nvnv-input',
    type: 'text',
  }
  static propTypes = {
    addonAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    addonBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    autoFocus: PropTypes.bool,
    classNameInput: PropTypes.string,
    defaultValue: PropTypes.any,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    prefix: PropTypes.string,
    prefixCls: PropTypes.string,
    suffix: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any,
  }
  private selectInput: any;

  render() {
    const { prefixCls, placeholder, addonBefore, addonAfter, className, style, onChange, ...others } = this.props;
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
          <BasicInput prefixCls={prefixCls} radiusLeft={!!addonBefore} radiusRight={!!addonAfter} placeholder={placeholder} onChange={onChange}  {...others}/>
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
        <BasicInput ref={node => this.selectInput = node} className={className} style={style} prefixCls={prefixCls} placeholder={placeholder} onChange={onChange} {...others} />
      );
    }
  }

  // 点击搜索返回input
  handleSearch = () => {
    return this.selectInput.handleSearch();
  }
}

class BasicInput extends React.PureComponent<IinputProps, IinputState> {
  private selectInput: any;
  constructor(props: IinputProps) {
    super(props);
    this.state = {
      currentValue: props.value || props.defaultValue || '',
    }
  }

  render () {
    const { prefixCls, className, placeholder, style, radiusLeft, radiusRight, classNameInput, prefix, suffix, type, onChange, value, defaultValue,  ...others } = this.props;
    const { currentValue } = this.state;
    const classes = classNames(`${prefixCls}-input`, classNameInput, {
      [`${prefixCls}-radius-left`]: radiusLeft,
      [`${prefixCls}-radius-right`]: radiusRight,
      [`${prefixCls}-icon-prefix`]: prefix,
      [`${prefixCls}-icon-suffix`]: suffix,
    });

    const classess = classNames(`${prefixCls}-input-assist`, className);

    return (
      <span className={classess}>
        {
          prefix && <span className={`${prefixCls}-prefix`}><img className={`${prefixCls}-icon-box`} src={prefix} /></span>
        }
        <input ref={this.saveSelectInput} {...others} type={type} value={currentValue} className={classes} style={style} onChange={this.handleChange} placeholder={placeholder}/>
        {
          suffix && <span className={`${prefixCls}-suffix`}><img className={`${prefixCls}-icon-box`} src={suffix} /></span>
        }
      </span>
    )
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

  // change
  handleChange = (e: any) => {
    this.setState({
      currentValue: e.target.value,
    })
    const { onChange } = this.props;
    if (onChange && typeof onChange === 'function') {
      onChange(e);
    }
  }

  // 点击搜索返回input
  handleSearch = () => {
    return this.selectInput;
  }
}
export default Input;
