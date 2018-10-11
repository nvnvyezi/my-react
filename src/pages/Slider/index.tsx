import * as React from 'react';
import './index.less'
import { Header as ShowHeader, ShowLayout, ShowUser, ShowCode, ShowContent, InfoCode } from "../common/index";
import { Slider } from "../../components/nvnvyezi";

class index extends React.PureComponent {
  render() {
    const prefixCls = 'show-datapicker';
    return (
      <ShowLayout prefixCls={prefixCls}>
        <ShowHeader prefixCls={prefixCls} title="Slider滑动输入条" text="滑动型输入器，展示当前值和可选范围。"/>
        <ShowUser prefixCls={prefixCls}>
          <p>当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。</p>
        </ShowUser>
        <ShowCode prefixCls={prefixCls}>
          <div className={`${prefixCls}-code-content-box`}>
            <ShowContent prefixCls={prefixCls}>
              <Slider />
            </ShowContent>
            <InfoCode prefixCls={prefixCls} title="基本" text="基本滑动条。当 <code>range</code> 为 <code>true</code> 时，渲染为双滑块。当 <code>disabled</code> 为 <code>true</code> 时，滑块处于不可用状态。" />
          </div>
        </ShowCode>
      </ShowLayout>
    );
  }
}

export default index;
