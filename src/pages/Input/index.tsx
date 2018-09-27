import * as React from 'react';
import './index.less'
import { Input } from "../../components/nvnvyezi";
import { InfoCode } from "../common/InfoCode/index";

interface IinputProps {
  prefixCls: string;
  code: string;
}
interface IinputState {
  flag: boolean;
}

class index extends React.PureComponent<IinputProps, IinputState> {
  static defaultProps = {
    prefixCls: 'show-input',
    code: '<Input placeholder="Basic usage" />',
  }
  constructor(props: IinputProps) {
    super(props);
    this.state = {
      flag: false,
    }
  }

  handleFlag = () => {
    this.setState({
      flag: !this.state.flag,
    })
  }
  handleChange = (e: any) => {
    console.log(e.target.value);
  }
  render() {
    const { prefixCls, code } = this.props;
    const { flag } = this.state;
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
                <InfoCode prefixCls={prefixCls} text="基本使用。" title="基本使用" code={code} flag={flag} onFlag={this.handleFlag} />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <header className={`${prefixCls}-box-header`}>
                  <div className={`${prefixCls}-box-aide`}>
                    <Input placeholder="mysite" addonBefore="Http://"/>
                  </div>
                </header>
                <InfoCode prefixCls={prefixCls} text="基本使用。" title="基本使用" code={code} flag={flag} onFlag={this.handleFlag} />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default index;
