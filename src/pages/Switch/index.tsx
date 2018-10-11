import * as React from 'react';
import './index.less'
import { Header as ShowHeader, ShowLayout, ShowUser, ShowCode, ShowContent, InfoCode } from "../common/index";
import { Switch, Button } from "../../components/nvnvyezi";
const successIcon = require('./image/success.svg');
const wrongIcon = require('./image/wrong.svg');

interface Istate {
  disabled: boolean;
}
interface Tprops {
  // disabled: boolean;
}

class index extends React.PureComponent<Tprops, Istate> {

  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    }
  }
  render() {
    const prefixCls = 'show-switch';
    const { disabled } = this.state;
    return (
      <ShowLayout prefixCls={prefixCls}>
        <ShowHeader prefixCls={prefixCls} title="Switch 开关" text="开关选择器。"/>
        <ShowUser prefixCls={prefixCls}>
          <ul>
            <li>需要表示开关状态/两种状态之间的切换时；</li>
            <li>和 checkbox的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。</li>
          </ul>
        </ShowUser>
        <ShowCode prefixCls={prefixCls}>
          <div className={`${prefixCls}-code-content-box`}>
            <ShowContent prefixCls={prefixCls}>
              <Switch style={{marginRight: '20px'}} onChange={this.onChange} />
              <Switch defaultChecked onChange={this.onChange} />
            </ShowContent>
            <InfoCode prefixCls={prefixCls} title="基本" text="最简单的用法。"/>
          </div>
          <div className={`${prefixCls}-code-content-box`}>
            <ShowContent prefixCls={prefixCls}>
              <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked/>
              <br/><br/>
              <Switch checkedChildren="1" unCheckedChildren="0" />
              <br/><br/>
              <Switch checkedChildren={successIcon} unCheckedChildren={wrongIcon} />
            </ShowContent>
            <InfoCode prefixCls={prefixCls} title="文字和图标" text="带有文字和图标。"/>
          </div>
          <div className={`${prefixCls}-code-content-box`}>
            <ShowContent prefixCls={prefixCls}>
              <Switch loading defaultChecked/>
              <br/><br/>
              <Switch loading size="small" />
              <br/><br/>
            </ShowContent>
            <InfoCode prefixCls={prefixCls} title="加载中" text="标识开关操作仍在执行中。"/>
          </div>
          <div className={`${prefixCls}-code-content-box`}>
            <ShowContent prefixCls={prefixCls}>
              <Switch disabled={disabled} defaultChecked/>
              <br/><br/>
              <Button type="primary" onClick={this.toggle}>Toggle disabled</Button>
            </ShowContent>
            <InfoCode prefixCls={prefixCls} title="不可用" text="Switch 失效状态。"/>
          </div>
          <div className={`${prefixCls}-code-content-box`}>
            <ShowContent prefixCls={prefixCls}>
              <Switch autoFocus defaultChecked/>
              <br/><br/>
              <Switch size="small" checked/>
            </ShowContent>
            <InfoCode prefixCls={prefixCls} title="两种大小" text="size=＇small＇ 表示小号开关。"/>
          </div>
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
                  <td>autoFocus</td>
                  <td>组件自动获取焦点</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>checked</td>
                  <td>指定当前是否选中</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>checkedChildren</td>
                  <td>选中时的内容</td>
                  <td>string|icon 路径</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>defaultChecked</td>
                  <td>初始是否选中</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>是否禁用</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>loading</td>
                  <td>加载中的开关</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>开关大小，可选值：<code>default</code> <code>small</code></td>
                  <td>string</td>
                  <td>default</td>
                </tr>
                <tr>
                  <td>unCheckedChildren</td>
                  <td>非选中时的内容</td>
                  <td>string|icon 路径</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>变化时回调函数</td>
                  <td>Function(checked:Boolean)</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>Switch 器类名</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
            <h2>方法</h2>
            <table　cellSpacing="0" className={`${prefixCls}-table`}>
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
        </ShowCode>
      </ShowLayout>
    );
  }

  // 基本
  onChange = (checked: any) => {
    console.log(`switch to ${checked}`);
  }
  // 不可用
  toggle = () => {
    console.log(2)
    this.setState({
      disabled: !this.state.disabled,
    });
  }
}

export default index;
