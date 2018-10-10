import * as React from 'react';
import { Children, cloneElement } from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

import './Row.less'

export type Align = 'top' | 'middle' | 'bottom';
export type Justify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';
export type Type = 'flex';
const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

interface IrowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number | string;
  styl?: string;
  align?: Align;
  justify?: Justify;
  type?: Type;
  style?: object;
}

class Row extends React.Component<IrowProps> {
  public static defaultProps = {
    gutter: 0,
  }
  public static propTypes = {
    gutter: stringOrNumber,
    align: PropTypes.string,
    justify: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
  }

  public render() {
    const prefixCls = 'row';
    const { type, justify, align, gutter, className, style, children, ...others } = this.props;
    const classes = classNames(className, {
      [`${prefixCls}`]: !type,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${justify}`]: type && justify,
      [`${prefixCls}-${align}`]: type && align,
    })
    // const rowStyle = (gutter as number) > 0 ? {
    //   marginLeft: (gutter as number) / -2,
    //   marginRight: (gutter as number) / -2,
    //   ...style
    // } : style;
    const cols = Children.map(children, (col: React.ReactElement<HTMLDivElement>) => {
      if (!col) {
        return null;
      }
      if (col.props && (gutter as number) > 0) {
        return cloneElement(col, {
          style: {
            paddingLeft: (gutter as number) / 2,
            paddingRight: (gutter as number) / 2,
            ...col.props.style,
          },
        });
      }
      return col;
    })
    const otherProps = {...others};
    return (
      <div {...otherProps} className={classes} style={style}>
        { cols }
      </div>
    );
  }
}

export default Row;
