import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IcheckboxProps } from "./interfance";
import classNames from 'classnames';
import './style/checkbox.less'
import Group from './Group'

class Checkbox extends React.PureComponent<IcheckboxProps> {
  static Group: typeof Group;

  static defaultProps = {
    prefixCls: 'nvnv-checkbox',
  }
  static propTypes = {
    autoFocus: PropTypes.bool,
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    prefixCls: PropTypes.string,
  }
  private selectInput: any;

  componentDidMount() {
    const { autoFocus } = this.props;
    autoFocus && this.focus();
  }

  render() {
    const { prefixCls, className, children, disabled, indeterminate, value, onChange, ...otherProps } = this.props;

    const classes = classNames(prefixCls, className,  {
      [`${prefixCls}-disabled`]: disabled,
    })
    const classesChildren = classNames(`${prefixCls}-children`, {
      [`${prefixCls}-children-disabled`]: disabled,
    })
    const classesChecked = classNames(`${prefixCls}-checked`, {
      [`${prefixCls}-checked-disabled`]: disabled,
      [`${prefixCls}-checked-indeterminate`]: indeterminate === true,
    })
    return (
      <label className={classes} >
        <span className={classesChecked}>
          <input ref={node => this.selectInput = node} className={`${prefixCls}-input`} disabled={disabled} type="checkbox" {...otherProps} onChange={this.handleChange} data-value={value || children}/>
        </span>
        <span className={classesChildren}>{children}</span>
      </label>
    );
  }

  // input change
  handleChange = (e) => {
    const {onChange} = this.props;
    onChange && onChange(e);
  }
  // focus blur
  focus = () => {
    this.selectInput.focus();
  }
  blur = () => {
    this.selectInput.blur();
  }
}

export default Checkbox;
