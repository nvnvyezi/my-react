import * as React from 'react';
import './index.less'

import { button } from "./info";
import { Button } from "../../components/nvnvyezi";
import { ShowLayout, ShowCode, ShowUser, Header, ShowContent, InfoCode } from "../common/index";

class index extends React.PureComponent {
  render() {
    const prefixCls = 'show-button';
    return (
      <ShowLayout prefixCls={prefixCls}>
        <Header prefixCls={prefixCls} title="Button 按钮" text="按钮用于开始一个即时操作" />
        <ShowUser prefixCls={prefixCls}>
          <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
        </ShowUser>
        <ShowCode prefixCls={prefixCls}>
          <section className={`${prefixCls}-code-content`}>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <ul>
                  {
                    button.map((item, key) => (
                      <li key={key}>
                        <Button type={item.toLocaleLowerCase()}>{item}</Button>
                      </li>
                    ))
                  }
                </ul>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="按钮类型" text="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <ul>
                  <li><Button type="default" size="small">Small</Button></li>
                  <li><Button type="default" size="default">Default</Button></li>
                  <li><Button type="default" size="large">Large</Button></li>
                  <li><Button>默认</Button></li>
                </ul>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="按钮尺寸" text="按钮有大、中、小三种尺寸。<br />通过设置 <code>size</code> 为 <code>large</code> <code>small</code> 分别把按钮设为大、小尺寸。若不设置 <code>size</code>，则尺寸为中。" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <ul>
                  <li><Button type="default" size="small" disabled>Disabled</Button></li>
                  <li><Button type="primary" disabled>Disabled Primary</Button></li>
                  <li><Button type="dashed" disabled>Disabled dashed</Button></li>
                </ul>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="不可用状态" text="添加 <code>disabled</code> 属性即可让按钮处于不可用状态，同时按钮样式也会改变。" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <ul>
                  <li><Button size="small" shape="circle">C</Button></li>
                  <li><Button type="primary" size="default" shape="circle">C</Button></li>
                  <li><Button type="dashed" size="large" shape="circle">C</Button></li>
                  <li><Button type="danger" shape="circle">圆</Button></li>
                </ul>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="按钮形状" text="添加 <code>shape</code> 属性即可让按钮处于规定状态。" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <ul>
                  <li><Button type="primary" size="small" loading>Click me</Button></li>
                  <li><Button type="primary" size="default" loading>Click me</Button></li>
                  <li><Button type="danger" size="large" loading>Click me</Button></li>
                  <li><Button loading>默认</Button></li>
                  <br />
                  <li><Button shape="circle" loading /></li>
                  <li><Button shape="circle" type="primary" loading /></li>
                </ul>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="加载中状态" text="添加 <code>loading</code> 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <ul>
                  <li className='ww'><Button block type="dashed">Dashed</Button></li>
                  <li className='ww'><Button block type="primary">Primary</Button></li>
                  <li className='ww'><Button block type="danger">Danger</Button></li>
                  <li className='ww'><Button block>默认</Button></li>
                </ul>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="block 按钮" text="<code>block</code> 属性将使按钮适合其父宽度。" />
            </div>
            <div className={`${prefixCls}-code-content-box`}>
              <ShowContent prefixCls={prefixCls}>
                <ul className="backbutton">
                  <li><Button ghost type="dashed">Click me</Button></li>
                  <li><Button ghost type="primary">Click me</Button></li>
                  <li><Button ghost type="danger">Click me</Button></li>
                  <li><Button ghost>默认</Button></li>
                </ul>
              </ShowContent>
              <InfoCode prefixCls={prefixCls} title="幽灵按钮" text="<code>ghost</code> 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。" />
            </div>
          </section>
        </ShowCode>
        <footer className={`${prefixCls}-footer`}>
            <h2>API</h2>
            <p>
              通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：<code>type</code> -> <code>shape</code> -> <code>size</code> -> <code>loading</code> -> <code>disabled</code>
            </p>
            <p>按钮的属性说明如下：</p>
            <table cellSpacing="0" className={`${prefixCls}-table`}>
              <thead className={`${prefixCls}-thead`}>
                <tr>
                  <th>属性</th>
                  <th>说明</th>
                  <th>类型</th>
                  <th>默认值</th>
                </tr>
              </thead>
              <tbody className={`${prefixCls}-tbody`}>
                <tr>
                  <td>disabled</td>
                  <td>按钮失效状态</td>
                  <td>boolean</td>
                  <td><code>false</code></td>
                </tr>
                <tr>
                  <td>ghost</td>
                  <td>幽灵属性，使按钮背景透明，版本 2.7 中增加</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>href</td>
                  <td>点击跳转的地址，指定此属性 button 的行为和 a 链接一致</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>htmlType</td>
                  <td>设置 <code>button</code> 原生的 <code>type</code> 值，可选值请参考 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type">HTML 标准</a></td>
                  <td>string</td>
                  <td><code>button</code></td>
                </tr>
                <tr>
                  <td>icon</td>
                  <td>设置按钮的图标类型</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>loading</td>
                  <td>设置按钮载入状态</td>
                  <td>boolean | delay: number </td>
                  <td><code>false</code></td>
                </tr>
                <tr>
                  <td>shape</td>
                  <td>设置按钮形状，可选值为 <code>circle</code> 或者不设</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>设置按钮大小，可选值为 <code>small</code> <code>large</code> 或者不设</td>
                  <td>string</td>
                  <td><code>default</code></td>
                </tr>
                <tr>
                  <td>target</td>
                  <td>相当于 a 链接的 target 属性，href 存在时生效</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>type</td>
                  <td>设置按钮类型，可选值为 <code>primary</code> <code>dashed</code> <code>danger</code>(版本 2.7 中增加) 或者不设</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>onClick</td>
                  <td><code>click</code> 事件的 handler</td>
                  <td>function</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>block</td>
                  <td>将按钮宽度调整为其父宽度的选项</td>
                  <td>boolean</td>
                  <td><code>false</code></td>
                </tr>
              </tbody>
            </table>
            <p><code>&lt;Button&gt;Hello world!&lt;/Button&gt;</code> 最终会被渲染为 <code>&lt;button&gt;&lt;span&gt;Hello world!&lt;/span&gt;&lt;/button&gt;</code>，并且除了上表中的属性，其它属性都会直接传到 <code>&lt;button&gt;&lt;/button&gt;</code>。</p>
            <p><code>&lt;Button href="http://example.com"&gt;Hello world!&lt;/Button&gt;</code> 则会渲染为 <code>&lt;a href="http://example.com"&gt;&lt;span&gt;Hello world!&lt;/span&gt;&lt;/a&gt;</code>。</p>
          </footer>
      </ShowLayout>
    )
  }
}

export default index;
