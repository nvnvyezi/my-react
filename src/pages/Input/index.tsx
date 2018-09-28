import * as React from 'react';
import './index.less'
import { Input, Select } from "../../components/nvnvyezi";
import { InfoCode } from "../common/InfoCode/index";

interface IinputProps {
  prefixCls: string;
  code: string;
  code1: string;
  code2: string;
}
interface IinputState {
  flag: boolean;
  flag1: boolean;
  flag2: boolean;
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
  }
  constructor(props: IinputProps) {
    super(props);
    this.state = {
      flag: false,
      flag1: false,
      flag2: false,
    }
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
  render() {
    const { prefixCls, code, code1, code2 } = this.props;
    const { flag, flag1, flag2 } = this.state;
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
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default index;
