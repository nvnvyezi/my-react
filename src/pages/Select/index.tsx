import * as React from 'react';
import './index.less'
import { Select } from "../../components/nvnvyezi";
import { ShowLayout, Header, ShowUser, ShowCode, InfoCode, ShowContent } from "../common/index";

const Option = Select.Option;

interface IinputProps {
  prefixCls: string;
}
const children: any = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
class index extends React.PureComponent<IinputProps> {
  static defaultProps = {
    prefixCls: 'show-select',
  }

  render() {
    const { prefixCls } = this.props;
    return (
      <ShowLayout prefixCls={prefixCls}>
        <Header prefixCls={prefixCls} title="Select 选择器" text="下拉选择器。" />
        <ShowUser prefixCls={prefixCls}>
          <ul className={`${prefixCls}-ul`}>
            <li className={`${prefixCls}-li`}>弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。</li>
            <li className={`${prefixCls}-li`}>当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。</li>
          </ul>
        </ShowUser>
        <ShowCode prefixCls={prefixCls}>
          <div className={`${prefixCls}-code-content`}>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <Select defaultValue="lucy" style={{width: '120px'}} className={`${prefixCls}-select`} onChange={this.handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>Disabled</Option>
                  <Option value="yiminghe">Yiminghe</Option>
                </Select>
                <Select defaultValue="lucy" style={{width: '120px'}} className={`${prefixCls}-select`} disabled>
                  <Option value="jack">Jack</Option>
                </Select>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} text="基本使用。" title="基本使用" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <Select defaultValue="lucy" showSearch style={{width: '200px'}}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="yiminghe">Yiminghe</Option>
                </Select>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="带搜索框" text="展开后可对各项进行搜索" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <Select defaultValue="lucy" multiple style={{width: '100%'}} placeholder="multiple" onChange={this.handleChange}>
                  {children}
                </Select>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} text="多选，从已有条目中选择。" title="多选" />
            </div>
          </div>
        </ShowCode>
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
                <td>classNameSelect</td>
                <td>设置select样式</td>
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
      </ShowLayout>
    );
  }

  handleChange = (e: any) => {
    console.log(e.target.innerText);
  }
}

export default index;
