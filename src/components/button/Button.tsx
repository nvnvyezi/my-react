import * as React from 'react';
import * as PropTypes from 'prop-types';
const classNames = require('classnames');

import './Button.less'

interface IProps {
  type?: string;
  className?: string;
  size?: string;
  loading?: boolean | { delay?: number };
  disabled?: any;
  htmlType?: string;
  children?: React.ReactNode;
  shape?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  block?: boolean;
  ghost?: boolean;
}
const prefixCls = 'button';
export default class Button extends React.Component<IProps>{
  public static defaultProps = {
    loading: false,
  }

  public static propTypes = {
    calssName: PropTypes.string,
    type: PropTypes.oneOf(['default','primary', 'dashed', 'danger']),
    size: PropTypes.oneOf(['small', 'default', 'large']),
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: PropTypes.func,
    shape: PropTypes.oneOf(['circle']),
    block: PropTypes.bool,
    ghost: PropTypes.bool,
  }

  public handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
    const { onClick } =  this.props;
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  }

  public render () {
    const {type, className, size, loading, shape, ghost, block, ...rest} = this.props;
    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-ement`]: !shape,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-background-ghost`]: ghost,
    })
    const {htmlType, ...otherProps} = rest;
    return (
      <button {...otherProps} type={htmlType || 'button'} className={classes}  onClick={this.handleClick}>
        {
          loading
          &&
          <i className={`${prefixCls}-loading`}>
            <svg viewBox="0 0 1024 1024" className={`${prefixCls}-anticon-spin`} data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" /></svg>
          </i>
        }
        {
          this.props.children
        }
      </button>
    )
  }
}
