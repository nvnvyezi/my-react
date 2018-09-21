import * as  React from 'react';
const classNames = require('classnames');

import './Layout.less'

export type Type = 'row' | 'column';

interface IlayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  basicClass?: string;
  className?: string;
  type?: Type;
}

class BasicLayout extends React.Component<IlayoutProps> {
  render() {
    const prefixCls = 'nvnv-layout';
    const { className, type, children, ...others} = this.props;
    const classes = classNames(className, prefixCls, {
      [`${prefixCls}-${type}`]: type,
    })
    return (
      <div {...others} className={classes}>{children}</div>
    );
  }
}

function generator (props: IlayoutProps) {
  return ((BaicComponent: React.ComponentClass<IlayoutProps>): any => {
    return class Adapter extends React.Component<IlayoutProps, any> {
      static Header: any;
      render() {
        const { basicClass } = props;
        const { className, ...others} = this.props;
        const classes = classNames(basicClass, className);
        return <BaicComponent {...others} className={classes} />;
      }
    }
  })
}

class Basic extends React.Component<IlayoutProps> {
  render () {
    const { className, children, ...others } = this.props;
    const classes = classNames('layout-basic', className, {})
    return (
      <div { ...others } className={classes} >{children}</div>
    )
  }
}

const Layout = BasicLayout;

const Header = generator({
  basicClass: 'nvnv-layout-header',
})(Basic)
const Content = generator({
  basicClass: 'nvnv-layout-content',
})(Basic)
const Footer = generator({
  basicClass: 'nvnv-layout-footer',
})(Basic)
const Sider = generator({
  basicClass: 'nvnv-layout-sider',
})(Basic)

export {
  Layout,
  Header,
  Content,
  Footer,
  Sider,
}
