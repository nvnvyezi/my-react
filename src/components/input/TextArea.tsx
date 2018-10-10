import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ItextAreaProps, ItextAreaState } from "./interfance";
import './style/TextArea.less'

class TextArea extends React.PureComponent<ItextAreaProps, ItextAreaState> {
  static defaultProps = {
    prefixCls: 'nvnv-input-textarea',
  }
  static propTypes = {
    prefixCls: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    autosize: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  }

  private selectTextArea: any;
  private nextFrameId: number;

  constructor(props: ItextAreaProps) {
    super(props);
    this.state = {
      value: this.props.defaultValue,
    }
  }

  // 触发enter事件
  componentDidMount = () => {
    const { onPressEnter, autosize } = this.props;
    document.onkeydown = (e: any) => {
      e = e || event;
      let currentKey = e.keyCode || e.which || e.charCode;
      if (currentKey === 13 && onPressEnter) {
        onPressEnter(this.selectTextArea);
      }
    }
    if (!!autosize) {
      if (typeof autosize === 'object') {
        const obj = JSON.parse(JSON.stringify(autosize));
        const { minRows, maxRows } = obj;
        this.selectTextArea.style.minHeight = `${minRows * 32}px`;
        this.selectTextArea.style.maxHeight = `${maxRows * 32}px`;
      }
    }
  }
  componentWillReceiveProps(nextProps: ItextAreaProps) {
    if (this.nextFrameId) {
      this._clearNextFrame(this.nextFrameId);
    }
    this.nextFrameId = this._nextFrame(this._resize);
  }

  render() {
    const { prefixCls, placeholder, onPressEnter, autosize, style, ...others } = this.props;
    const { value } = this.state;
    return (
      <textarea ref={node => this.selectTextArea = node} { ...others } className={prefixCls} placeholder={placeholder} value={value} onChange={this.handleChange} />
    );
  }

  // 高度变化时的动画
  _nextFrame = (cb: () => void) => {
    if (window.requestAnimationFrame) {
      return window.requestAnimationFrame(cb);
    } else {
      return window.setTimeout(cb, 1)
    }
  }
  // 清除动画
  _clearNextFrame = (nextFrameId: number) => {
    if (window.cancelAnimationFrame) {
      window.cancelAnimationFrame(nextFrameId);
    } else {
      window.clearTimeout(nextFrameId);
    }
  }

  // onchange事件
  handleChange = (e: any) => {
    const { onChange, autosize } = this.props;
    this.setState({
      value: e.target.value,
    })
    if (onChange) {
      onChange(e);
    }
    if (!!autosize) {
      this._resize();
    }
  }
  // auto自动调整
  _resize = () => {
    if (this.selectTextArea) {
      this.selectTextArea.style.height = 'auto';
      this.selectTextArea.style.height = this.selectTextArea.scrollHeight + 'px';
    }
  }

  // focus， blur
  focus = () => {
    this.selectTextArea.focus();
  }
  blur = () => {
    this.selectTextArea.blur();
  }
}
export default TextArea;
