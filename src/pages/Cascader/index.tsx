import * as React from 'react';
import * as PropTypes from 'prop-types';
import './index.less'
import { Cascader } from "../../components/nvnvyezi";

interface IcascaderProps {
  prefixCls: string;
}

class index extends React.PureComponent<IcascaderProps> {
  static defaultProps = {
    prefixCls: 'show-cascader',
  }
  static propTypes = {
    prefixCls: PropTypes.string,
  }
  render() {
    const { prefixCls } = this.props;
    return (
      <div className={prefixCls}>
        <div className={`${prefixCls}-aide`}>
          <header className={`${prefixCls}-header`}>
            <h1>Cascader 级联选择</h1>
            <p>级联选择框。</p>
          </header>
          <section className={`${prefixCls}-user`}>
            <h2>何时使用</h2>
            <ul className={`${prefixCls}-ul`}>
              <li className={`${prefixCls}-li`}>需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。</li>
              <li className={`${prefixCls}-li`}>从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。</li>
              <li className={`${prefixCls}-li`}>比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。</li>
            </ul>
          </section>
          <section className={`${prefixCls}-code`}>
            <h2>代码演示</h2>
            <div className={`${prefixCls}-code-content`}>
              <div className={`${prefixCls}-code-content-box`}>
                <header className={`${prefixCls}-box-header`}>
                  <div className={`${prefixCls}-aide`}>
                    <Cascader allowClear />
                  </div>
                </header>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default index;
