import * as React from 'react';
import { ShowLayout, Header, ShowUser, ShowCode, ShowContent, InfoCode } from "../common/index";
import { InputNumber, Button } from "../../components/nvnvyezi";
import './index.less';

interface Iprops {
  disabled?: boolean;
}
interface Istate {
  disabled?: boolean;
}

class index extends React.PureComponent<Iprops, Istate> {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
    }
  }

  render() {
    const prefixCls = 'show-inputnumber';
    const { disabled } = this.state;

    return (
      <ShowLayout prefixCls={prefixCls}>
        <Header prefixCls={prefixCls} title="InputNumber 数字输入框" text="通过鼠标或键盘，输入范围内的数值。" />
        <ShowUser prefixCls={prefixCls}>
          <p>当需要获取标准数值时。</p>
        </ShowUser>
        <ShowCode prefixCls={prefixCls}>
          <div className={`${prefixCls}-code-content`}>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <InputNumber min={1} max={10} defaultValue={3} onChange={this.onChange} />
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="基本" text="数字输入框。"/>
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <InputNumber min={1} max={10} defaultValue={3} disabled={disabled} />
                <div style={{ marginTop: 20 }}>
                  <Button onClick={this.toggle} type="primary">Toggle disabled</Button>
                </div>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="不可用" text="点击按钮切换可用状态。"/>
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={this.onChange} />
                <InputNumber min={1} max={100000} defaultValue={3} onChange={this.onChange} />
                <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={this.onChange} />
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="三种大小" text="三种大小的数字输入框，当 size 分别为 <code>large</code> 和 <code>small</code> 时，输入框高度为 <code>40px</code> 和 <code>24px</code> ，默认高度为 <code>32px</code>。"/>
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <InputNumber min={0} max={10} step={0.1} onChange={this.onChange} />
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="小数" text="和原生的数字输入框一样，value 的精度由 step 的小数位数决定。"/>
            </div>
          </div>
        </ShowCode>
        <footer className={`${prefixCls}-footer`}>
          <h2>API</h2>
          <table cellSpacing="0" className={`${prefixCls}-table`}>
            <thead className={`${prefixCls}-thead`}>
              <tr>
                <th>成员</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody className={`${prefixCls}-tbody`}>
              <tr>
                <td>autoFocus</td>
                <td>自动获取焦点</td>
                <td>boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>defaultValue</td>
                <td>初始值</td>
                <td>number</td>
                <td>-</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>禁用</td>
                <td>boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>formatter</td>
                <td>指定输入框展示值的格式</td>
                <td>function(value: number | string): string</td>
                <td>-</td>
              </tr>
              <tr>
                <td>max</td>
                <td>最大值</td>
                <td>number</td>
                <td>Infinity</td>
              </tr>
              <tr>
                <td>min</td>
                <td>最小值</td>
                <td>number</td>
                <td>-Infinity</td>
              </tr>
              <tr>
                <td>parser</td>
                <td>指定从 formatter 里转换回数字的方式，和 formatter 搭配使用</td>
                <td>function( string): number</td>
                <td>-</td>
              </tr>
              <tr>
                <td>precision</td>
                <td>数值精度</td>
                <td>number</td>
                <td>-</td>
              </tr>
              <tr>
                <td>size</td>
                <td>输入框大小</td>
                <td>string</td>
                <td>无</td>
              </tr>
              <tr>
                <td>step</td>
                <td>每次改变步数，可以为小数</td>
                <td>number|string</td>
                <td>1</td>
              </tr>
              <tr>
                <td>value</td>
                <td>当前值</td>
                <td>number</td>
                <td>-</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>变化回调</td>
                <td>Function(value: number | string)</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
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
      </ShowLayout>
    );
  }

  // 基本
  onChange(value) {
    console.log('changed', value);
  }
  // 不可用
  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
}

export default index;
