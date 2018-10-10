import * as React from 'react';
import * as PropTypes from 'prop-types';
import './style/Radio.less'
import { IradioProps } from "./interfance";
import RadioGroup from "./Group";
import RadioButton from './Button';
import classNames from 'classnames';

class Radio extends React.Component<IradioProps> {
  static Group: typeof RadioGroup;
  static Button: typeof RadioButton;
  static defaultProps = {
    prefixCls: 'nvnv-radio',
  }
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    classNameLabel: PropTypes.string,
    isButton: PropTypes.string,
  }

  handleChange = (e: any) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e);
    }
  }

  render() {
    const { prefixCls, className, isChecked, defaultChecked, outDisabled, disabled, name, id, children, value, style, classNameLabel, isButton } = this.props;
    const isDisabled = disabled || outDisabled;

    const classes = classNames(`${prefixCls}-radio`, className);
    const classLabel = classNames(prefixCls, classNameLabel, {
      [`${prefixCls}-disabled-button`]: isDisabled && isButton,
      [`${prefixCls}-disabled`]: isDisabled && !isButton,
    })
    const classesContent = classNames({
      [`${prefixCls}-content-normal`]: !isButton,
      [`${prefixCls}-content-button-solid`]: isButton === 'solid',
      [`${prefixCls}-content-button-outline`]: isButton === 'outline',
    })
    return (
      <label className={classLabel} style={style}>
        <input className={classes} type="radio" name={name} id={id} disabled={isDisabled} onChange={this.handleChange} value={value} checked={isChecked} defaultChecked={defaultChecked}/>
        {
          !isButton && <span className={`${prefixCls}-circle`} />
        }
        <div className={classesContent}>{children}</div>
      </label>
    );
  }
}

export default Radio;
