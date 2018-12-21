import * as React from 'react';
const icon = require('./image/154537758416813.png');

import './index.less'
interface IheaderProps {
  prefixCls: string,
  list: Array<string>,
}

class Header extends React.PureComponent<IheaderProps> {
  static defaultProps = {
    list: ['指南', '组件', '教程', '社区', '生态'],
    prefixCls: 'nvnv-header',
  }
  constructor (props: IheaderProps) {
    super(props);

  }

  render () {
    const { prefixCls, list } = this.props;
    return (
      <header className={prefixCls}>
        <div className={`${prefixCls}-left`}>
          <img src={icon} alt=""/>
        </div>
        <ul className={`${prefixCls}-right`}>
          <li className={`${prefixCls}-right-li`}>
            <input type="text" className={`${prefixCls}-input`} placeholder="搜索组件..." />
          </li>
          {
            list.map((item, index) => {
              return <li className={`${prefixCls}-right-li`} key={index}>{ item }</li>
            })
          }
        </ul>
      </header>
    )
  }
}

export default Header;
