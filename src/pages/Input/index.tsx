import * as React from 'react';
import './index.less'
import { Input, Select } from "../../components/nvnvyezi";
import { InfoCode } from "../common/InfoCode/index";

interface IinputProps {
  prefixCls: string;
  code: string;
  code1: string;
  code2: string;
  code3: string;
  code4: string;
}
interface IinputState {
  flag: boolean;
  flag1: boolean;
  flag2: boolean;
  flag3: boolean;
  flag4: boolean;
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
class index extends React.PureComponent<IinputProps, IinputState> {
  static defaultProps = {
    prefixCls: 'show-input',
    code: '<Input placeholder="Basic usage" />',
    code1: `
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

<Input placeholder="mysite" addonBefore="Http://" addonAfter=".com" defaultValue="nvnvyezi"/>

<Input className={} placeholder="mysite" addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="nvnvyezi"/>

<Input className={} placeholder="mysite" addonAfter={selectAfter} defaultValue="nvnvyezi"/>
    `,
    code2: `
<Input.Search className={} placeholder="input search text" onChange={this.handleChange} onSearch={this.handleSearch} />

<br/><br/>

<Input.Search enterButton placeholder="input search text" onChange={this.handleChange} onSearch={this.handleSearch} />

<br/><br/>

<Input.Search enterButton="Search" placeholder="input search text" onChange={this.handleChange} onSearch={this.handleSearch} />`,
    code3: `
<Input.TextArea className={} placeholder="Autosize height based on content lines" autosize onChange={this.handleChange} onPressEnter={this.handlePressEnter} />
<br /> <br />
<Input.TextArea className={} placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />`,
    code4: `
<Input.TextArea rows={4} />`,
  }
  constructor(props: IinputProps) {
    super(props);
    this.state = {
      flag: false,
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,
    }
  }

  render() {
    const { prefixCls, code, code1, code2, code3, code4 } = this.props;
    const { flag, flag1, flag2, flag3, flag4 } = this.state;
    return (
      <div className={prefixCls}>
        <div className={`${prefixCls}-aide`}>
          <header className={`${prefixCls}-header`}>
            <h1>Input 输入框</h1>
            <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
          </header>
          <section className={`${prefixCls}-user`}>
            <h2>何时使用</h2>
            <ul className={`${prefixCls}-ul`}>
              <li className={`${prefixCls}-li`}>需要用户输入表单域内容时。</li>
              <li className={`${prefixCls}-li`}>提供组合型输入框，带搜索的输入框，还可以进行大小选择。</li>
            </ul>
          </section>
          <section className={`${prefixCls}-code`}>
            <h2>代码演示</h2>
            <div className={`${prefixCls}-code-content`}>
              <div className={`${prefixCls}-code-content-box`}>
                <header className={`${prefixCls}-box-header`}>
                  <div className={`${prefixCls}-box-aide`}>
                    <Input placeholder="Basic usage" onChange={this.handleChange}/>
                  </div>
                </header>
                <InfoCode prefixCls={prefixCls} text="基本使用。" title="基本使用" code={code} flag={flag} onFlag={this.handleFlag.bind(this, 0)} />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <header className={`${prefixCls}-box-header`}>
                  <div className={`${prefixCls}-box-aide`}>
                    <Input placeholder="mysite" addonBefore="Http://" addonAfter=".com" defaultValue="nvnvyezi"/>
                    <Input className={`${prefixCls}-input`} placeholder="mysite" addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="nvnvyezi"/>
                    <Input className={`${prefixCls}-input`} placeholder="mysite" addonAfter={selectAfter} defaultValue="nvnvyezi"/>
                  </div>
                </header>
                <InfoCode prefixCls={prefixCls} text="用于配置一些固定组合。" title="前置/后置标签" code={code1} flag={flag1} onFlag={this.handleFlag.bind(this, 1)} />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <header className={`${prefixCls}-box-header`}>
                  <div className={`${prefixCls}-box-aide`}>
                    <Input.Search className={`${prefixCls}-input-search`} placeholder="input search text" onChange={this.handleChange} onSearch={this.handleSearch} />
                    <br/><br/>
                    <Input.Search enterButton placeholder="input search text" onChange={this.handleChange} onSearch={this.handleSearch} />
                    <br/><br/>
                    <Input.Search enterButton="Search" placeholder="input search text" onChange={this.handleChange} onSearch={this.handleSearch} />
                  </div>
                </header>
                <InfoCode prefixCls={prefixCls} text="带有搜索按钮的输入框。" title="搜索框" code={code2} flag={flag2} onFlag={this.handleFlag.bind(this, 2)} />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <header className={`${prefixCls}-box-header`}>
                  <div className={`${prefixCls}-box-aide`}>
                    <Input.TextArea className={`${prefixCls}-input-search`} placeholder="Autosize height based on content lines" autosize onChange={this.handleChange} onPressEnter={this.handlePressEnter} />
                    <br /> <br />
                    <Input.TextArea className={`${prefixCls}-input-search`} placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
                 </div>
                </header>
                <InfoCode prefixCls={prefixCls} text="<code>autosize</code> 属性适用于 <code>textarea</code> 节点，并且只有高度会自动变化。另外 <code>autosize</code> 可以设定为一个对象，指定最小行数和最大行数。" title="适应文本高度的文本域" code={code3} flag={flag3} onFlag={this.handleFlag.bind(this, 3)} />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <header className={`${prefixCls}-box-header`}>
                  <div className={`${prefixCls}-box-aide`}>
                    <Input.TextArea rows={4} />
                 </div>
                </header>
                <InfoCode prefixCls={prefixCls} text="用于多行输入。" title="文本域" code={code4} flag={flag4} onFlag={this.handleFlag.bind(this, 4)} />
              </div>
            </div>
          </section>
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
        </div>
      </div>
    );
  }

  handleFlag = (num: number) => {
    switch (num) {
      case 0:
      this.setState({
        flag: !this.state.flag,
      })
        break;
      case 1:
      this.setState({
        flag1: !this.state.flag1,
      })
      case 2:
      this.setState({
        flag2: !this.state.flag2,
      })
      case 3:
      this.setState({
        flag3: !this.state.flag3,
      })
      case 4:
      this.setState({
        flag4: !this.state.flag4,
      })
      default:
        break;
    }
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
