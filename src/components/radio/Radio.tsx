import * as React from 'react';
import * as PropTypes from 'prop-types';
import './Radio.less'
const classNames = require('classnames');
import RadioGroup from "./Group";

interface IradioProps {
  name?: string;
  id?: string;
  prefixCls: string;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: any;
  value?: any;
  checked?: boolean;
}

class Radio extends React.Component<IradioProps> {
  static Group: typeof RadioGroup;
  static defaultProps = {
    prefixCls: 'nvnv-radio',
  }
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
  }

  handleChange = (e: any) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e);
    }
  }

  render() {
    const { prefixCls, className, defaultChecked, checked, disabled, name, id, onChange, children, value, ...others} = this.props;
    const classes = classNames(`${prefixCls}-radio`, className, {
    })
    const classLabel = classNames(prefixCls, {
      [`${prefixCls}-disabled`]: disabled,
    })
    return (
      <label className={classLabel}>
        <input { ...others } className={classes} type="radio" name={name} id={id} defaultChecked={defaultChecked} disabled={disabled} onChange={this.handleChange} value={value} checked={checked}/>
        <span className={`${prefixCls}-circle`} />
        <div className={`${prefixCls}-others`}>{children}</div>
      </label>
    );
  }
}

export default Radio;
