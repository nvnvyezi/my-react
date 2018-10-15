import * as React from 'react';
import './index.less';
import { ShowLayout, Header, ShowUser, ShowCode, ShowContent, InfoCode } from "../common/index";
import { Tooltip, Button } from "../../components/nvnvyezi";

interface Iprops {
  buttonWidth: number;
  prefixCls: string;
  text: string | React.ReactNode;
}

class index extends React.PureComponent<Iprops> {
  static defaultProps = {
    buttonWidth: 70,
    prefixCls: 'show-tooltip',
    text: <span>prompt text</span>,
  }
  render() {
    const { buttonWidth, prefixCls, text } = this.props;
    return (
      <ShowLayout prefixCls={prefixCls}>
        <Header prefixCls={prefixCls} title="Tooltip 文字提示" text="简单的文字提示气泡框。" />
        <ShowUser prefixCls={prefixCls}>
          <p>鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。</p>
          <p>可用来代替系统默认的 <code>title</code> 提示，提供一个<code>按钮/文字/操作</code>的文案解释。</p>
        </ShowUser>
        <ShowCode prefixCls={prefixCls}>
          <div className={`${prefixCls}-code-content`}>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <Tooltip title="prompt text">
                  <span>Tooltip will show when mouse enter.</span>
                </Tooltip>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="基本" text="基本的用法。" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <div>
                  <div style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                    <Tooltip placement="topLeft" title={text}>
                      <Button>TL</Button>
                    </Tooltip>
                    <Tooltip placement="top" title={text}>
                      <Button>Top</Button>
                    </Tooltip>
                    <Tooltip placement="topRight" title={text}>
                      <Button>TR</Button>
                    </Tooltip>
                  </div>
                  <div style={{ width: buttonWidth, float: 'left' }}>
                    <Tooltip placement="leftTop" title={text}>
                      <Button>LT</Button>
                    </Tooltip>
                    <Tooltip placement="left" title={text}>
                      <Button>Left</Button>
                    </Tooltip>
                    <Tooltip placement="leftBottom" title={text}>
                      <Button>LB</Button>
                    </Tooltip>
                  </div>
                  <div style={{ width: buttonWidth, float: 'right' }}>
                    <Tooltip placement="rightTop" title={text}>
                      <Button>RT</Button>
                    </Tooltip>
                    <Tooltip placement="right" title={text}>
                      <Button>Right</Button>
                    </Tooltip>
                    <Tooltip placement="rightBottom" title={text}>
                      <Button>RB</Button>
                    </Tooltip>
                  </div>
                  <div style={{ textAlign: 'center', clear: 'both', whiteSpace: 'nowrap' }}>
                    <Tooltip placement="bottomLeft" title={text}>
                      <Button>BL</Button>
                    </Tooltip>
                    <Tooltip placement="bottom" title={text}>
                      <Button>Bottom</Button>
                    </Tooltip>
                    <Tooltip placement="bottomRight" title={text}>
                      <Button>BR</Button>
                    </Tooltip>
                  </div>
                </div>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="位置" text="位置有 12 个方向。" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <Tooltip mouseEnterDelay={1} title="prompt text">
                  <Button>移入延迟显示</Button>
                </Tooltip>
                <Tooltip mouseLeaveDelay={1} title="prompt text">
                  <Button>移除延迟隐藏</Button>
                </Tooltip>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="延迟" text="控制何时显示和隐藏。" />
            </div>
          </div>
        </ShowCode>
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
                <td>title</td>
                <td>提示文字</td>
                <td>string|ReactNode|() => ReactNode</td>
                <td>-</td>
              </tr>
              <tr>
                <td>defaultVisible</td>
                <td>默认是否显隐</td>
                <td>boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>mouseEnterDelay</td>
                <td>鼠标移入后延时多少才显示 Tooltip，单位：秒</td>
                <td>number</td>
                <td>0</td>
              </tr>
              <tr>
                <td>mouseLeaveDelay</td>
                <td>鼠标移出后延时多少才隐藏 Tooltip，单位：秒</td>
                <td>number</td>
                <td>0.1</td>
              </tr>
              <tr>
                <td>overlayClassName</td>
                <td>卡片类名</td>
                <td>string</td>
                <td>无</td>
              </tr>
              <tr
              ><td>overlayStyle</td>
              <td>卡片样式</td>
              <td>object</td>
              <td>无</td>
            </tr>
            <tr>
              <td>placement</td>
              <td>气泡框位置，可选 <code>top</code> <code>left</code> <code>right</code> <code>bottom</code> <code>topLeft</code> <code>topRight</code> <code>bottomLeft</code> <code>bottomRight</code> <code>leftTop</code> <code>leftBottom</code> <code>rightTop</code> <code>rightBottom</code></td>
              <td>string</td>
              <td>top</td>
            </tr>
            <tr>
              <td>visible</td>
              <td>用于手动控制浮层显隐</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onVisibleChange</td>
              <td>显示隐藏的回调</td>
              <td>(visible) =&gt; void</td>
              <td>无</td>
            </tr>
          </tbody>
        </table>
        </footer>
      </ShowLayout>
    );
  }
}

export default index;
