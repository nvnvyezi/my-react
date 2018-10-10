import * as React from 'react';
import * as PropTypes from 'prop-types';
import './index.less'
import { AutoComplete } from "../../components/nvnvyezi";
import { InfoCode, ShowContent } from '../common/index'

interface IautoProps {
  prefixCls: string;
}
interface IautoState {
  dataSource: any;
}

class index extends React.PureComponent<IautoProps, IautoState> {
  static defaultProps = {
    prefixCls: 'show-autocomplete',
  }
  static propTypes = {
    prefixCls: PropTypes.string,
  }

  constructor(props: IautoProps) {
    super(props);
    this.state = {
      dataSource: [],
    }
  }

  render() {
    const { prefixCls } = this.props;
    const { dataSource } = this.state;
    return (
      <div className={prefixCls}>
        <div className={`${prefixCls}-aide`}>
          <header className={`${prefixCls}-header`}>
            <h1>AutoComplete 自动完成</h1>
            <p>输入框自动完成功能</p>
          </header>
          <section className={`${prefixCls}-user`}>
            <h2>何时使用</h2>
            <p>需要自动完成时。</p>
          </section>
          <section className={`${prefixCls}-code`}>
            <h2>代码演示</h2>
            <div className={`${prefixCls}-code-content`}>
              <div className={`${prefixCls}-code-content-box`}>
                <ShowContent prefixCls={prefixCls}>
                  <AutoComplete dataSource={dataSource} onSearch={this.handleSearch} allowClear onSelect={this.handleSelect} style={{ width: '300px' }}/>
                </ShowContent>
                <InfoCode prefixCls={prefixCls} text="基本使用。通过 dataSource 设置自动完成的数据源。" title="基本使用" />
              </div>
            </div>
          </section>
          <footer className={`${prefixCls}-footer`}>
            <h2>API</h2>
            <table cellSpacing="0" className={`${prefixCls}-table`}>
              <thead className={`${prefixCls}-thead`}>
                <tr>
                  <th>参数</th>
                  <th>说明</th>
                  <th>类型</th>
                  <th>默认值</th>
                </tr>
              </thead>
              <tbody className={`${prefixCls}-tbody`}>
                <tr>
                  <td>allowClear</td>
                  <td>支持清除, 单选模式有效</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>autoFocus</td>
                  <td>自动获取焦点</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>dataSource</td>
                  <td>自动完成的数据源</td>
                  <td>[]</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>是否禁用</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>placeholder</td>
                  <td>输入框提示</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>onBlur</td>
                  <td>失去焦点时的回调</td>
                  <td>function()</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>选中 option，或 input 的 value 变化时，调用此函数</td>
                  <td>function(value)</td>
                  <td>无</td>
                </tr>
                <tr>
                  <td>onFocus</td>
                  <td>获得焦点时的回调</td>
                  <td>function()</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>onSearch</td>
                  <td>搜索补全项的时候调用</td>
                  <td>function(value)</td>
                  <td>无</td>
                </tr>
                <tr>
                  <td>onSelect</td>
                  <td>被选中时调用，参数为选中项的 value 值</td>
                  <td>function(value, option)</td>
                  <td>无</td>
                </tr>
              </tbody>
            </table>
            <br/><br/>
            <h2>方法</h2>
            <table cellSpacing="0" className={`${prefixCls}-table`}>
              <thead className={`${prefixCls}-thead`}>
                <tr>
                  <th>名称</th>
                  <th>描述</th>
                </tr>
              </thead>
              <tbody className={`${prefixCls}-tbody`}>
                <tr>
                  <td>blur()</td>
                  <td>移除焦点</td>
                </tr>
                <tr>
                  <td>focus()</td>
                  <td>获取焦点</td>
                </tr>
              </tbody>
            </table>
          </footer>
        </div>
      </div>
    );
  }

  // 基本使用的search
  handleSearch = (value: any) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  handleSelect = (value: any) => {
    console.log('onselect: ', value);
  }
  handleFocus = () => {
    console.log('focus');
  }
  handleBlur = () => {
    console.log('blur');
  }
  handleChange = () => {
    console.log('change');
  }
}

export default index;
