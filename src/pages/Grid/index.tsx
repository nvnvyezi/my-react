import * as React from 'react';
import { Row, Col } from "../../components/nvnvyezi";
import { ShowLayout, Header, ShowUser, ShowCode, ShowContent, InfoCode } from "../common/index";
import './index.less'

class index extends React.Component {
  render() {
    const prefixCls = 'show-grid';
    return (
      <ShowLayout prefixCls={prefixCls}>
        <Header prefixCls={prefixCls} title="Grid栅格" text="24栅格系统" />
        <section className={`${prefixCls}-idea`}>
          <h2>设计理念</h2>
          <div>
            <div className={`${prefixCls}-idea-line1`}>100%</div>
            <div className={`${prefixCls}-idea-line2`}>
              {
                new Array(4).fill('25%').map((item, key) => (
                  <div key={key}>{item}</div>
                ))
              }
            </div>
            <div className={`${prefixCls}-idea-line3`}>
              {
                new Array(3).fill('33.33%').map((item, key) => (
                  <div key={key}>{item}</div>
                ))
              }
            </div>
            <div className={`${prefixCls}-idea-line4`}>
              {
                new Array(2).fill('50%').map((item, key) => (
                  <div key={key}>{item}</div>
                ))
              }
            </div>
            <div className={`${prefixCls}-idea-line5`}>
              {
                ['66.66%', '33.33%'].map((item, key) => (
                  <div key={key}>{item}</div>
                ))
              }
            </div>
          </div>
          <p>在多数业务情况下，Ant Design需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。</p>
          <p>划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。</p>
        </section>
        <ShowUser prefixCls={prefixCls} title="概述">
          <p>布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：</p>
          <ul>
            <li>通过row在水平方向建立一组column（简写col）</li>
            <li>你的内容应当放置于col内，并且，只有col可以作为row的直接元素</li>
            <li>栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽的列可以使用.col-8来创建</li>
            <li>如果一个row中的col总和超过 24，那么多余的col会作为一个整体另起一行排列</li>
          </ul>
        </ShowUser>
        <ShowUser prefixCls={prefixCls} title="Flex 布局">
          <p>我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。</p>
          <p>Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。</p>
        </ShowUser>
        <ShowCode prefixCls={prefixCls}>
          <div className={`${prefixCls}-code-content-box`}>
            <ShowContent prefixCls={prefixCls}>
              <Row className={`${prefixCls}-row`}>
                  <Col className={`${prefixCls}-col`} span={12}><div className={`${prefixCls}-coli`}>col-12</div></Col>
                  <Col className={`${prefixCls}-col`} span={12}><div className={`${prefixCls}-coli`}>col-12</div></Col>
              </Row>
              <Row className={`${prefixCls}-row`}>
                  <Col className={`${prefixCls}-col`} span={8}><div className={`${prefixCls}-coli`}>col-8</div></Col>
                  <Col className={`${prefixCls}-col`} span={8}><div className={`${prefixCls}-coli`}>col-8</div></Col>
                  <Col className={`${prefixCls}-col`} span={8}><div className={`${prefixCls}-coli`}>col-8</div></Col>
              </Row>
              <Row className={`${prefixCls}-row`}>
                  <Col className={`${prefixCls}-col`} span={6}><div className={`${prefixCls}-coli`}>col-6</div></Col>
                  <Col className={`${prefixCls}-col`} span={6}><div className={`${prefixCls}-coli`}>col-6</div></Col>
                  <Col className={`${prefixCls}-col`} span={6}><div className={`${prefixCls}-coli`}>col-6</div></Col>
                  <Col className={`${prefixCls}-col`} span={6}><div className={`${prefixCls}-coli`}>col-6</div></Col>
              </Row>
            </ShowContent>
            <InfoCode prefixCls={prefixCls} title="基础栅格" text="从堆叠到水平排列。<br />使用单一的一组 <code>Row</code> 和 <code>Col</code> 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 <code>Row</code> 内。" />
          </div>
          <div className={`${prefixCls}-code-content-box`}>
            <ShowContent prefixCls={prefixCls}>
              <Row className={`${prefixCls}-row`} gutter={16}>
                  <Col className={`${prefixCls}-col`} span={6}><div className={`${prefixCls}-coli`}>col-6</div></Col>
                  <Col className={`${prefixCls}-col`} span={6}><div className={`${prefixCls}-coli`}>col-6</div></Col>
                  <Col className={`${prefixCls}-col`} span={6}><div className={`${prefixCls}-coli`}>col-6</div></Col>
                  <Col className={`${prefixCls}-col`} span={6}><div className={`${prefixCls}-coli`}>col-6</div></Col>
              </Row>
            </ShowContent>
            <InfoCode prefixCls={prefixCls} title="区块间隔" text="栅格常常需要和间隔进行配合，你可以使用 <code>Row</code> 的 <code>gutter</code> 属性，我们推荐使用 <code>(16+8n)px</code> 作为栅格间隔。(n 是自然数)。" />
          </div>
          <div className={`${prefixCls}-code-content-box`}>
            <ShowContent prefixCls={prefixCls}>
              <Row className={`${prefixCls}-row`}>
                  <Col className={`${prefixCls}-col`} span={8}><div className={`${prefixCls}-coli`}>col-8</div></Col>
                  <Col className={`${prefixCls}-col`} span={8} offset={8}><div className={`${prefixCls}-coli`}>col-8</div></Col>
              </Row>
              <Row className={`${prefixCls}-row`}>
                  <Col className={`${prefixCls}-col`} span={6} offset={6}><div className={`${prefixCls}-coli`}>col-6 col-offset-6</div></Col>
                  <Col className={`${prefixCls}-col`} span={6} offset={6}><div className={`${prefixCls}-coli`}>col-6 col-offset-6</div></Col>
              </Row>
              <Row className={`${prefixCls}-row`}>
                  <Col className={`${prefixCls}-col`} span={12} offset={6}><div className={`${prefixCls}-coli`}>col-12 col-offset-6</div></Col>
              </Row>
            </ShowContent>
            <InfoCode prefixCls={prefixCls} title="左右偏移" text="列偏移。<br/>
                使用 <code>offset</code> 可以将列向右侧偏。例如，<code>offset={4}</code> 将元素向右侧偏移了 4 个列（column）的宽度。" />
          </div>
          <div className={`${prefixCls}-code-content-box`}>
            <ShowContent prefixCls={prefixCls}>
              <Row className={`${prefixCls}-row`}>
                  <Col className={`${prefixCls}-col`} span={18} push={6}><div className={`${prefixCls}-coli`}>col-18 col-push-6</div></Col>
                  <Col className={`${prefixCls}-col`} span={6} pull={18}><div className={`${prefixCls}-coli`}>col-6 col-pull-18</div></Col>
              </Row>
            </ShowContent>
            <InfoCode prefixCls={prefixCls} title="栅格排序" text=">列排序。<br/>
                通过使用 <code>push</code> <code>pull</code> 类就可以很容易的改变列（column）的顺序。" />
          </div>
          <div className={`${prefixCls}-code-content-box`}>
            <ShowContent prefixCls={prefixCls}>
              <p>sub-element align left</p>
              <Row className={`${prefixCls}-row`} type="flex" justify="start">
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
              </Row>
              <p>sub-element align center</p>
              <Row className={`${prefixCls}-row`} type="flex" justify="center">
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
              </Row>
              <p>sub-element align right</p>
              <Row className={`${prefixCls}-row`} type="flex" justify="end">
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
              </Row>
              <p>sub-element monospaced arrangement</p>
              <Row className={`${prefixCls}-row`} type="flex" justify="space-between">
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
              </Row>
              <p>sub-element align full</p>
              <Row className={`${prefixCls}-row`} type="flex" justify="space-around">
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
              </Row>
            </ShowContent>
            <InfoCode prefixCls={prefixCls} title="Flex 布局" text=">Flex 布局基础。<br/>
              使用 <code>row-flex</code> 定义 <code>flex</code> 布局，其子元素根据不同的值 。<br/>
              <code>start</code>, <code>center</code>, <code>end</code>, <code>space-between</code>, <code>space-around</code> ，分别定义其在父节点里面的排版方式。" />
          </div>
          <div className={`${prefixCls}-code-content-box`}>
            <ShowContent prefixCls={prefixCls}>
              <p>Align Top</p>
              <Row className={`${prefixCls}-row`} type="flex" justify="center" align="top">
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`} style={{height: '100px'}}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4d</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`} style={{height: '100px'}}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
              </Row>
              <p>Align Center</p>
              <Row className={`${prefixCls}-row`} type="flex" justify="space-around" align="middle">
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`} style={{height: '100px'}}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`} style={{height: '100px'}}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
              </Row>
              <p>Align Bottom</p>
              <Row className={`${prefixCls}-row`} type="flex" justify="space-between" align="bottom">
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`} style={{height: '100px'}}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`} style={{height: '100px'}}>col-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={4}><div className={`${prefixCls}-coli`}>col-4</div></Col>
              </Row>
            </ShowContent>
            <InfoCode prefixCls={prefixCls} title="Flex 对齐" text=">Flex子元素垂直对齐。" />
          </div>
          <div className={`${prefixCls}-code-content-box`}>
            <ShowContent prefixCls={prefixCls}>
              <Row className={`${prefixCls}-row`} type="flex">
                  <Col className={`${prefixCls}-col`} span={6} order={4}><div className={`${prefixCls}-coli`}>1 col-order-4</div></Col>
                  <Col className={`${prefixCls}-col`} span={6} order={3}><div className={`${prefixCls}-coli`}>2 col-order-3</div></Col>
                  <Col className={`${prefixCls}-col`} span={6} order={2}><div className={`${prefixCls}-coli`}>3 col-order-2</div></Col>
                  <Col className={`${prefixCls}-col`} span={6} order={1}><div className={`${prefixCls}-coli`}>4 col-order-1</div></Col>
              </Row>
            </ShowContent>
            <InfoCode prefixCls={prefixCls} title="Flex 排序" text=">通过 Flex 布局的 Order 来改变元素的排序。" />
          </div>
        </ShowCode>
        <footer className={`${prefixCls}-footer`}>
          <hgroup>
            <h2>API</h2>
            <h3>Row</h3>
          </hgroup>
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
                <td>align</td>
                <td>flex布局下的垂直对齐方式：<code>top</code> <code>middle</code> <code>bottom</code></td>
                <td>string</td>
                <td><code>top</code></td>
              </tr>
              <tr>
                <td>gutter</td>
                <td>栅格间隔，可以写成像素值</td>
                <td>number | string</td>
                <td>0</td>
              </tr>
              <tr>
                <td>justify</td>
                <td>flex 布局下的水平排列方式：<code>start</code> <code>end</code> <code>center</code> <code>space-around</code> <code>space-between</code></td>
                <td>string</td>
                <td><code>start</code></td>
              </tr>
              <tr>
                <td>type</td>
                <td>布局模式，可选 <code>flex</code> <a href="http://caniuse.com/#search=flex">现代浏览器</a>下有效</td>
                <td>string</td>
                <td />
              </tr>
            </tbody>
          </table>
          <h3 style={{marginTop: '40px', marginBottom: '40px'}}>Col</h3>
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
                <td>offset</td>
                <td>栅格左侧的间隔格数，间隔内不可以有栅格</td>
                <td>number</td>
                <td>0</td>
              </tr>
              <tr>
                <td>order</td>
                <td>栅格顺序，<code>flex</code> 布局模式下有效</td>
                <td>number</td>
                <td>0</td>
              </tr>
              <tr>
                <td>pull</td>
                <td>栅格向左移动格数</td>
                <td>number</td>
                <td>0</td>
              </tr>
              <tr>
                <td>push</td>
                <td>栅格向右移动格数</td>
                <td>number</td>
                <td>0</td>
              </tr>
              <tr>
                <td>span</td>
                <td>栅格占位格数，为 0 时相当于 <code>display: none</code></td>
                <td>number</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </footer>
      </ShowLayout>
    )
  }
}

export default index;
