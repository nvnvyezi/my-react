import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

import './Col.less'

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

interface IcolProps {
  span?: number | string;
  className?: string;
  style?: object;
  offset?: number | string;
  push?: number | string;
  pull?: number | string;
  order?: number;
}

class Col extends React.Component<IcolProps> {
  public static propTypes = {
    span: stringOrNumber,
    style: PropTypes.object,
    children: PropTypes.node,
    offset: stringOrNumber,
    push: stringOrNumber,
    pull: stringOrNumber,
    order: PropTypes.number,
  }

  public render() {
    const prefixCls = 'col';
    const { className, order, push, pull, span, style, offset, children, ...others} = this.props;
    const classes = classNames(className, prefixCls,{
      [`${prefixCls}-offset`]: offset && (offset as number) > 0,
      [`${prefixCls}-push`]: push && (push as number) > 0,
      [`${prefixCls}-pull`]: pull && (pull as number) > 0,
    })
    // 处理style
    const colStyle =  {
      width: span && `${span as number / 24 * 100}%`,
      paddingLeft: offset && `${offset as number / 24 * 100}%`,
      left: push && `${push as number / 24 * 100}%`,
      right: pull && `${pull as number / 24 * 100}%`,
      order: order && order as number,
      ...style,
    }
    return (
      <div { ...others } className={classes} style={colStyle}>
        { children }
      </div>
    );
  }
}

export default Col;
