import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IbuttonProps } from "./interfance";
import Radio from './Radio';
import './style/Button.less';
import classNames from 'classnames';

class Button extends React.PureComponent<IbuttonProps> {
  static defaultProps = {
    prefixCls: 'nvnv-radio-button',
  }
  static propTypes = {
    prefixCls: PropTypes.string,
  }
  render() {
    const { buttonStyle, prefixCls, ...others } = this.props;
    const radioProps = {...others, prefixCls: 'nvnv-radio', isButton: buttonStyle};
    const classes = classNames({
      [`${prefixCls}-label-button`]: buttonStyle,
    })
    return (
      <Radio classNameLabel={classes} {...radioProps} />
    );
  }
}

export default Button;
