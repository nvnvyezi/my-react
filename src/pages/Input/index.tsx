import * as React from 'react';
import './index.less'
import { Input, Select } from "../../components/nvnvyezi";
import { Header, ShowLayout, ShowUser, ShowCode, ShowContent, InfoCode } from "../common/index";

const iconUser = require('./image/user.svg');

interface IinputProps {
  prefixCls: string;
}

const selectBefore = (
  <Select defaultValue="Http://" style={{ width: 100}} classNameSelect="show-input-before">
    <Select.Option value="Http://">Http://</Select.Option>
    <Select.Option value="Https://">Https://</Select.Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" style={{ width: 80 }} classNameSelect="show-input-after">
    <Select.Option value=".com">.com</Select.Option>
    <Select.Option value=".jp">.jp</Select.Option>
    <Select.Option value=".cn">.cn</Select.Option>
    <Select.Option value=".org">.org</Select.Option>
  </Select>
);
class index extends React.PureComponent<IinputProps> {
  static defaultProps = {
    prefixCls: 'show-input',
  }

  render() {
    const { prefixCls } = this.props;
    return (
      <ShowLayout prefixCls={prefixCls}>
        <Header prefixCls={prefixCls} title="Input 输入框" text="通过鼠标或键盘输入内容，是最基础的表单域的包装。" />
        <ShowUser prefixCls={prefixCls}>
          <ul className={`${prefixCls}-ul`}>
            <li className={`${prefixCls}-li`}>需要用户输入表单域内容时。</li>
            <li className={`${prefixCls}-li`}>提供组合型输入框，带搜索的输入框，还可以进行大小选择。</li>
          </ul>
        </ShowUser>
        <ShowCode prefixCls={prefixCls}>
          <div className={`${prefixCls}-code-content`}>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <Input placeholder="Basic usage" onChange={this.handleChange}/>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} text="基本使用。" title="基本使用" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <Input placeholder="mysite" addonBefore="Http://" addonAfter=".com" defaultValue="nvnvyezi"/>
                <Input className={`${prefixCls}-input`} placeholder="mysite" addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="nvnvyezi"/>
                <Input className={`${prefixCls}-input`} placeholder="mysite" addonAfter={selectAfter} defaultValue="nvnvyezi"/>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} text="用于配置一些固定组合。" title="前置/后置标签" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <Input.Search className={`${prefixCls}-input-search`} placeholder="input search text" onChange={this.handleChange} onSearch={this.handleSearch} />
                  <br/><br/>
                  <Input.Search enterButton placeholder="input search text" onChange={this.handleChange} onSearch={this.handleSearch} />
                  <br/><br/>
                  <Input.Search enterButton="Search" placeholder="input search text" onChange={this.handleChange} onSearch={this.handleSearch} />
                </ShowContent>
              <InfoCode prefixCls={prefixCls} text="带有搜索按钮的输入框。" title="搜索框" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <Input.TextArea className={`${prefixCls}-input-search`} placeholder="Autosize height based on content lines" autosize onChange={this.handleChange} onPressEnter={this.handlePressEnter} />
                  <br /> <br />
                  <Input.TextArea className={`${prefixCls}-input-search`} placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
                </ShowContent>
              <InfoCode prefixCls={prefixCls} text="<code>autosize</code> 属性适用于 <code>textarea</code> 节点，并且只有高度会自动变化。另外 <code>autosize</code> 可以设定为一个对象，指定最小行数和最大行数。" title="适应文本高度的文本域" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <Input
                  placeholder="Enter your Name"
                  onChange={this.handleChange}
                  prefix={iconUser}
                />
                  <br /> <br />
                  <Input placeholder="Enter you password" suffix={iconUser}/>
                </ShowContent>
              <InfoCode prefixCls={prefixCls} text="在输入框上添加前缀或后缀图标。" title="前缀和后缀" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <Input.TextArea rows={4} />
              </ShowContent>
              <InfoCode prefixCls={prefixCls} text="用于多行输入。" title="文本域" />
            </div>
          </div>
        </ShowCode>
        <footer className={`${prefixCls}-footer`}>
          <hgroup>
            <h2>API</h2>
            <h3>Input</h3>
          </hgroup>
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
                <td>classNameInput</td>
                <td>设置input样式</td>
                <td>string</td>
                <td>-</td>
              </tr>
              <tr>
                <td>addonAfter</td>
                <td>带标签的 input，设置后置标签</td>
                <td>string|ReactNode</td>
                <td>-</td>
              </tr>
              <tr>
                <td>addonBefore</td>
                <td>带标签的 input，设置前置标签</td>
                <td>string|ReactNode</td>
                <td>-</td>
              </tr>
              <tr>
                <td>defaultValue</td>
                <td>输入框默认内容</td>
                <td>string</td>
                <td>-</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用状态，默认为 false</td>
                <td>boolean</td>
                <td>false</td>
                </tr>
              <tr>
                <td>id</td>
                <td>输入框的 id</td>
                <td>string</td>
                <td>-</td>
              </tr>
              <tr>
                <td>value</td>
                <td>输入框内容</td>
                <td>string</td>
                <td>-</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>输入框内容变化时的回调</td>
                <td>function(e)</td>
                <td>-</td>
              </tr>
              <tr>
                <td>onPressEnter</td>
                <td>按下回车的回调</td>
                <td>function(e)</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          <br/><br/>
          <h3>TextArea</h3>
          <br/>
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
                <td>autosize</td>
                <td>自适应内容高度，可设置为 <code>true|false</code> 或对象：<code>{' minRows: 2, maxRows: 6 '}</code></td>
                <td>boolean|object</td>
                <td>false</td>
              </tr>
              <tr>
                <td>defaultValue</td>
                <td>输入框默认内容</td>
                <td>string</td>
                <td>-</td>
              </tr>
              <tr>
                <td>value</td>
                <td>输入框内容</td>
                <td>string</td>
                <td>-</td>
              </tr>
              <tr>
                <td>onPressEnter</td>
                <td>按下回车的回调</td>
                <td>function(e)</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          <br/><br/>
          <h3>Search</h3>
          <br/>
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
                <td>enterButton</td>
                <td>是否有确认按钮，可设为按钮文字</td>
                <td>boolean|ReactNode</td>
                <td>false</td>
              </tr>
              <tr>
                <td>onSearch</td>
                <td>点击搜索或按下回车键时的回调</td>
                <td>function(value, event)</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </footer>
      </ShowLayout>
    );
  }

  handleChange = (e: any) => {
    console.log(e.target.value);
  }
  handleSearch = (value: any, e: any) => {
    console.log(value, e);
  }
  handlePressEnter = (e: any) => {
    console.log(e, 'enter');
  }
}

export default index;
