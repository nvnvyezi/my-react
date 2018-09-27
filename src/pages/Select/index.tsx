import * as React from 'react';
import './index.less'
import { Select } from "../../components/nvnvyezi";
import { InfoCode } from "../common/InfoCode/index";

const Option = Select.Option;

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

const children: any = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
class index extends React.PureComponent<IinputProps, IinputState> {
  static defaultProps = {
    prefixCls: 'show-select',
    code: `
<Select defaultValue="lucy" style={{width: '120px'}}>
  <Option value="jack">Jack</Option>
  <Option value="lucy">Lucy</Option>
  <Option value="disabled" disabled>Disabled</Option>
  <Option value="yiminghe">Yiminghe</Option>
</Select>`,
  code1: `
<Select defaultValue="lucy" style={{width: '120px'}} disabled>
  <Option value="lucy">Lucy</Option>
</Select>`,
code2: `
const children: any = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

<Select defaultValue="lucy" multiple style={{width: '100%'}} placeholder="multiple" onChange={this.handleChange}>
{children}
</Select>`,
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
        break;
      case 2:
        this.setState({
          flag2: !this.state.flag2,
        })
        break;
      default:
        break;
    }
  }
  handleChange = (e: any) => {
    console.log(e.target.innerText);
  }
  render() {
    const { prefixCls, code, code1, code2 } = this.props;
    const { flag, flag1, flag2 } = this.state;
    return (
      <div className={prefixCls}>
        <div className={`${prefixCls}-aide`}>
          <header className={`${prefixCls}-header`}>
            <h1>Select 选择器</h1>
            <p>下拉选择器。</p>
          </header>
          <section className={`${prefixCls}-user`}>
            <h2>何时使用</h2>
            <ul className={`${prefixCls}-ul`}>
              <li className={`${prefixCls}-li`}>弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。</li>
              <li className={`${prefixCls}-li`}>当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。</li>
            </ul>
          </section>
          <section className={`${prefixCls}-code`}>
            <h2>代码演示</h2>
            <div className={`${prefixCls}-code-content`}>
              <div className={`${prefixCls}-code-content-box`}>
                <header className={`${prefixCls}-box-header`}>
                  <div className={`${prefixCls}-box-aide`}>
                    <Select defaultValue="lucy" style={{width: '120px'}} className={`${prefixCls}-select`} onChange={this.handleChange}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>Disabled</Option>
                      <Option value="yiminghe">Yiminghesdsdsd</Option>
                    </Select>
                  </div>
                </header>
                <InfoCode prefixCls={prefixCls} text="基本使用。" title="基本使用" code={code} flag={flag} onFlag={this.handleFlag.bind(this, 0)} />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <header className={`${prefixCls}-box-header`}>
                  <div className={`${prefixCls}-box-aide`}>
                    <Select defaultValue="lucy" style={{width: '120px'}} className={`${prefixCls}-select`} disabled>
                      <Option value="lucy">Lucy</Option>
                    </Select>
                  </div>
                </header>
                <InfoCode prefixCls={prefixCls} title="禁用状态" text="选择器不可用状态。" code={code1} flag={flag1} onFlag={this.handleFlag.bind(this, 1)} />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <header className={`${prefixCls}-box-header`}>
                  <div className={`${prefixCls}-box-aide`}>
                    <Select defaultValue="lucy" multiple style={{width: '100%'}} placeholder="multiple" onChange={this.handleChange}>
                      {children}
                    </Select>
                  </div>
                </header>
                <InfoCode prefixCls={prefixCls} text="多选，从已有条目中选择。" title="多选" code={code2} flag={flag2} onFlag={this.handleFlag.bind(this, 2)} />
              </div>
            </div>
          </section>
          <footer className={`${prefixCls}-footer`}>
            <h2>Select</h2>
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
                  <td>autoFocus</td>
                  <td>默认获取焦点</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>defaultValue</td>
                  <td>指定默认选中的条目</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>是否禁用</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>mode</td>
                  <td>设置 Select 的模式为多选或标签</td>
                  <td>boolean</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>placeholder</td>
                  <td>选择框默认文字</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>指定当前选中的条目</td>
                  <td>string|string[]|number|number[]</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>onBlur</td>
                  <td>失去焦点的时回调</td>
                  <td>function</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数</td>
                  <td>function(value, option:Option/Array&lt;Option&gt;)</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>onFocus</td>
                  <td>获得焦点时回调</td>
                  <td>function</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
            <br/>
            <br/>
            <h2>Select Methods</h2>
            <table cellSpacing="0" className={`${prefixCls}-table`}>
              <thead className={`${prefixCls}-thead`}>
                <tr>
                  <th>名称</th>
                  <th>说明</th>
                </tr>
              </thead>
              <tbody className={`${prefixCls}-tbody`}>
                <tr>
                  <td>blur()</td>
                  <td>取消焦点</td>
                  </tr>
                <tr>
                  <td>focus()</td>
                  <td>获取焦点</td>
                </tr>
              </tbody>
            </table>
            <br/><br/>
            <h2>Option</h2>
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
                  <td>disabled</td>
                  <td>是否禁用</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>默认根据此属性值进行筛选</td>
                  <td>string|number</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </footer>
        </div>
      </div>
    );
  }
}

export default index;
