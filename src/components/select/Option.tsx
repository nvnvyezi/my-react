import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IoptionProps, IoptionState } from "./interfance";
import './Option.less'
const classNames = require('classnames');

class Option extends React.PureComponent<IoptionProps, IoptionState> {
  static defaultProps = {
    prefixCls: 'nvnv-option',
  }
  static propTypes = {
    prefixCls: PropTypes.string,
  }
  static getDerivedStateFromProps (nextProps: any, prevState: any) {
    let arr = nextProps.multipleArr;
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === nextProps.children) {
        return {flag: true, select: true}
      }
    }
    return {
      flag: false,
      select: false,
    };
  }

  constructor(props: IoptionProps) {
    super(props);
    this.state = {
      flag: false,
      select: this.props.select,
    }
  }

  render() {
    const { prefixCls, children, value, onSelect, disabled } = this.props;
    const { select } = this.state;
    const { flag } = this.state;
    const classes = classNames(prefixCls, {
      [`${prefixCls}-select`]: select,
      [`${prefixCls}-disabled`]: disabled,
    })
    return (
      <React.Fragment>
      {
        disabled
        ?
        <div className={classes} data-value={value}>
          {children}
        </div>
        :
        <div className={classes} data-value={value} onClick={onSelect}>
          {children}
          {
            flag &&
            <i className={`${prefixCls}-option-icon`} />
          }
        </div>
      }
      </React.Fragment>
    );
  }
}

export default Option;
