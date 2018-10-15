import * as React from 'react';
import './index.less'
import { Header as ShowHeader, ShowLayout, ShowUser, ShowCode, ShowContent, InfoCode } from "../common/index";
import { Slider, Switch } from "../../components/nvnvyezi";
import { FaSmile, FaFrown } from "react-icons/fa";

interface Istate {
  disabled: boolean;
}
interface Iprops {
  disabled: boolean;
}

class index extends React.PureComponent<Iprops, Istate> {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    }
  }

  render() {
    const prefixCls = 'show-slider';
    const { disabled } = this.state;
    return (
      <ShowLayout prefixCls={prefixCls}>
        <ShowHeader prefixCls={prefixCls} title="Slider滑动输入条" text="滑动型输入器，展示当前值和可选范围。"/>
        <ShowUser prefixCls={prefixCls}>
          <p>当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。</p>
        </ShowUser>
        <ShowCode prefixCls={prefixCls}>
          <div className={`${prefixCls}-code-content`}>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <Slider defaultValue={30} disabled={disabled} />
                <br/>
                <Slider range defaultValue={[20, 30]} disabled={disabled} />
                <br/>
                Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="基本" text="基本滑动条。当 <code>range</code> 为 <code>true</code> 时，渲染为双滑块。当 <code>disabled</code> 为 <code>true</code> 时，滑块处于不可用状态。" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <div className={`${prefixCls}-code-assist-icon`}>
                  <FaFrown style={{color: 'gray'}} />
                  <Slider defaultValue={30} disabled={disabled} />
                  <FaSmile style={{color: 'gray'}} />
                </div>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="带 icon 的滑块" text="滑块左右可以设置图标来表达业务含义。" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <Slider defaultValue={30} onChange={this.onChange} onAfterChange={this.onAfterChange} />
                <br/>
                <Slider range defaultValue={[20, 50]} onChange={this.onChange} onAfterChange={this.onAfterChange} />
                <br/>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="事件" text="当 Slider 的值发生改变时，会触发 <code>onChange</code> 事件，并把改变后的值作为参数传入。在 <code>onmouseup</code> 时，会触发 <code>onAfterChange</code> 事件，并把当前值作为参数传入。" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <Slider defaultValue={30} onChange={this.onChange} onAfterChange={this.onAfterChange} />
                <br/>
                <Slider range defaultValue={[20, 50]} onChange={this.onChange} onAfterChange={this.onAfterChange} />
                <br/>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="带输入框的滑块" text="和 数字输入框 组件保持同步。" />
            </div>
          </div>
        </ShowCode>
      </ShowLayout>
    );
  }

  // 基本
  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  }
  // 事件
  onChange = (value) => {
    console.log('onChange: ', value);
  }

  onAfterChange = (value) => {
    console.log('onAfterChange: ', value);
  }
}

export default index;
