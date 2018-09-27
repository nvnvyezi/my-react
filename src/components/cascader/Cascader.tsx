import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IcascaderProps } from "./interfance";
const classNames = require('classnames');
import './Cascader.less'

class Cascader extends React.PureComponent<IcascaderProps> {
  static defaultProps = {
    prefixCls: 'nvnv-cascader',
    allowClear: false,
  }
  static propTypes = {
    prefixCls: PropTypes.string,
    allowClear: PropTypes.bool,
  }
  render() {
    const { prefixCls, allowClear } = this.props;
    const classes = classNames(prefixCls, {

    })
    const classesInput = classNames(`${prefixCls}-input`, {
    })
    const classesIcon = classNames(`${prefixCls}-icon`, {

    })
    return (
      <React.Fragment>
        <span className={classes}>
          <input type="text" className={classesInput} />
          {
            allowClear && <i className={classesIcon}/>
          }
        </span>
      </React.Fragment>
    );
  }
}

export default Cascader;
