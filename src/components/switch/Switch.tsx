import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IswitchProps, IswitchState } from "./interface";
import classNames from 'classnames';
import './style/switch.less'

class Switch extends React.PureComponent<IswitchProps, IswitchState> {
  static defaultProps = {
    prefixCls: 'nvnv-switch',
    pictureSuffix: ['bmp','jpg','png','tif','gif','pcx','tga','exif','fpx','svg','psd','cdr','pcd','dxf','ufo','eps','ai','raw','WMF','webp'],
    size: 'default',
  }
  static propTypes = {
    autoFocus: PropTypes.bool,
    checked: PropTypes.bool,
    checkedChildren: PropTypes.string,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    onChange: PropTypes.func,
    pictureSuffix: PropTypes.array,
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    unCheckedChildren: PropTypes.string,
  }
  private selectButton: any;

  constructor (props: IswitchProps) {
    super(props);
    this.state = {
      checked: props.checked || props.defaultChecked || false,
    }
  }

  componentDidMount () {
    const { autoFocus } = this.props;
    autoFocus && this.focus();
  }

  render() {
    const { className, defaultChecked, prefixCls, onChange, checkedChildren, unCheckedChildren, pictureSuffix, autoFocus, loading, disabled, size, ...otherProps } = this.props;
    const { checked } = this.state;

    const classes = classNames(className, prefixCls, {
      [`${prefixCls}-place-normal`]: !checked,
      [`${prefixCls}-place`]: checked,
      [`${prefixCls}-total-loading`]: loading || disabled,
      [`${prefixCls}-total-size`]: size === 'small',
    });

    const classesChecked = classNames({
      [`${prefixCls}-checked-normal`]: !checked,
      [`${prefixCls}-checked`]: checked,
    })

    const classesIcon = classNames(`${prefixCls}-loading`, {
      [`${prefixCls}-checked-icon-normal`]: !checked,
      [`${prefixCls}-checked-icon`]: checked,
    })

    // 判断文本是否是icon
    const isPrefixIcon = this._isIcon(checkedChildren);
    const isSuffixIcon = this._isIcon(unCheckedChildren);

    return (
      <button ref={node => this.selectButton = node} className={classes} {...otherProps} disabled={disabled || loading} onClick={this.handleChange} >
        <span className={`${prefixCls}-text`}>
          {
            checked
            ?
              isPrefixIcon
              ?
                <img className={`${prefixCls}-icon`} src={checkedChildren} alt=""/>
              :
              checkedChildren
            :
              isSuffixIcon
              ?
                <img className={`${prefixCls}-icon`} src={unCheckedChildren} alt=""/>
              :
                unCheckedChildren
          }
        </span>
        {
          loading
          ?
            <i className={classesIcon}>
              <svg viewBox="0 0 1024 1024" className={`${prefixCls}-loading-spin`} data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
              </svg>
            </i>
          :
            <div className={classesChecked} />
        }
      </button>
    );
  }

  // 触发onchange
  handleChange = () => {
    const { onChange } = this.props;
    this.setState({checked: !this.state.checked}, () => onChange && onChange(this.state.checked));
  }
  // 判断传进来的是否是图片
  _isIcon = (str: string = '') => {
    const { pictureSuffix } = this.props;
    const arr = str && str.split('.');
    const suffix = arr[arr.length - 1];
    return str && pictureSuffix && pictureSuffix.indexOf(suffix) !== -1;
  }

  // focus blur
  focus = () => {
    this.selectButton.focus();
  }
  blur = () => {
    this.selectButton.blur();
  }
}

export default Switch;
