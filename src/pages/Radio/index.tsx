import * as React from 'react';

import './index.less'
import { ShowContent, InfoCode } from "../common/index";
import { Radio, Input } from "../../components/nvnvyezi";

interface IradioProps {
  prefixCls: string;
  options: Array<any>;
  radioStyle: object;
}
interface IradioState {
  value: number;
  value1: number;
}

class index extends React.PureComponent<IradioProps, IradioState> {
  static defaultProps = {
    prefixCls: 'show-radio',
    options: ['A', 'B', 'C', 'D'],
    radioStyle: {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    },
  }
  constructor(props: IradioProps) {
    super(props);
    this.state = {
      value: 1,
      value1: 2,
    }
  }

  render() {
    const { prefixCls, options, radioStyle } = this.props;
    const { value, value1 } = this.state;
    return (
      <div className={prefixCls}>
        <div className={`${prefixCls}-aide`}>
          <header className={`${prefixCls}-header`}>
            <h1>Radio 单选框</h1>
            <p>单选框</p>
          </header>
          <section className={`${prefixCls}-use`}>
            <h2>何时使用</h2>
            <ul>
              <li>用于在多个备选项中选中单个状态。</li>
              <li>和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。</li>
            </ul>
          </section>
          <section className={`${prefixCls}-code`}>
            <h2>代码演示</h2>
            <section className={`${prefixCls}-code-content`}>
              <div className={`${prefixCls}-code-content-box`}>
                <ShowContent prefixCls={prefixCls}>
                  <Radio name="radio">Radio</Radio>
                  <Radio defaultChecked>Radio</Radio>
                </ShowContent>
                <InfoCode prefixCls={prefixCls} title={'基本'} text={'最简单的用法。'} />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <ShowContent prefixCls={prefixCls}>
                  <Radio.Group value={value} onChange={this.onChange}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                  </Radio.Group>
                </ShowContent>
                <InfoCode prefixCls={prefixCls} title={'单选组合'} text={'一组互斥的 Radio 配合使用。并且携带默认值。'} />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <ShowContent prefixCls={prefixCls}>
                  <Radio.Group defaultValue={3} name="radio1">
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                  </Radio.Group>
                </ShowContent>
                <InfoCode prefixCls={prefixCls} title={'单选组合-配合name使用'} text={'可以为 RadioGroup 配置 <code>name</code> 参数，为组合内的 input 元素赋予相同的 <code>name</code> 属性，使浏览器把 RadioGroup 下的 Radio 真正看作是一组（例如可以通过方向键始终在同一组内更改选项）'} />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <ShowContent prefixCls={prefixCls}>
                  <Radio.Group disabled>
                    <Radio>A</Radio>
                    <Radio>B</Radio>
                    <Radio>C</Radio>
                    <Radio>D</Radio>
                  </Radio.Group>
                </ShowContent>
                <InfoCode prefixCls={prefixCls} title={'不可用'} text={'Radio 不可用。'} />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <ShowContent prefixCls={prefixCls}>
                  <Radio.Group name="radio2" options={options} onChange={this.handleChange} />
                </ShowContent>
                <InfoCode prefixCls={prefixCls} title={'组合 - 配置方式'} text={'通过配置 <code>options</code> 参数来渲染单选框。'} />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <ShowContent prefixCls={prefixCls}>
                  <Radio.Group value={value1} onChange={this.onChange1}>
                    <Radio value={1} style={radioStyle}>A</Radio>
                    <Radio value={2} style={radioStyle}>B</Radio>
                    <Radio value={3} style={radioStyle}>C</Radio>
                    <Radio value={4} style={radioStyle}>More...
                    {
                      value1 == 4 &&
                      <Input style={{ width: 100, marginLeft: 10 }} />
                    }
                    </Radio>
                  </Radio.Group>
                </ShowContent>
                <InfoCode prefixCls={prefixCls} title={'RadioGroup 垂直'} text={'垂直的 RadioGroup，配合更多输入框选项。'} />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <ShowContent prefixCls={prefixCls}>
                  <Radio.Group defaultValue="a" buttonStyle="solid" name="radio2">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value='b'>Shanghai</Radio.Button>
                    <Radio.Button value='c'>Beijing</Radio.Button>
                    <Radio.Button value='d'>Chengdu</Radio.Button>
                  </Radio.Group>
                  <br/>
                  <Radio.Group defaultValue="a" buttonStyle="solid" name="radio3">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value='b' disabled>Shanghai</Radio.Button>
                    <Radio.Button value='c'>Beijing</Radio.Button>
                    <Radio.Button value='d'>Chengdu</Radio.Button>
                  </Radio.Group>
                </ShowContent>
                <InfoCode prefixCls={prefixCls} title={'填底的按钮样式'} text={'实色填底的单选按钮样式'} />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <ShowContent prefixCls={prefixCls}>
                  <Radio.Group defaultValue="a" buttonStyle="outline" name="radio4">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value='b'>Shanghai</Radio.Button>
                    <Radio.Button value='c'>Beijing</Radio.Button>
                    <Radio.Button value='d'>Chengdu</Radio.Button>
                  </Radio.Group>
                  <br/>
                  <Radio.Group defaultValue="a" buttonStyle="outline" name="radio5">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value='b' disabled>Shanghai</Radio.Button>
                    <Radio.Button value='c'>Beijing</Radio.Button>
                    <Radio.Button value='d'>Chengdu</Radio.Button>
                  </Radio.Group>
                  <br/>
                  <Radio.Group defaultValue="a" buttonStyle="outline" name="radio6" disabled>
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value='b' disabled>Shanghai</Radio.Button>
                    <Radio.Button value='c'>Beijing</Radio.Button>
                    <Radio.Button value='d'>Chengdu</Radio.Button>
                  </Radio.Group>
                </ShowContent>
                <InfoCode prefixCls={prefixCls} title={'填底的按钮样式'} text={'实色填底的单选按钮样式'} />
              </div>
            </section>
          </section>
          <footer className={`${prefixCls}-footer`}>
            <hgroup>
              <h2>API</h2>
              <h3>Radio</h3>
            </hgroup>
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
                  <td>classNameLabel</td>
                  <td>修改radio样式</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>checked</td>
                  <td>指定当前是否选中</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>defaultChecked</td>
                  <td>初始是否选中</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>根据 value 进行比较，判断是否选中</td>
                  <td>any</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
            <br/><br/>
            <h3>RadioGroup</h3>
            <br/><br/>
            <p>单选框组合，用于包裹一组 <code>Radio</code>。</p>
            <br/>
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
                  <td>defaultValue</td>
                  <td>默认选中的值</td>
                  <td>any</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>禁选所有子单选器</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>RadioGroup 下所有 <code>input[type="radio"]</code> 的 <code>name</code> 属性</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>options</td>
                  <td>以配置形式设置子元素</td>
                  <td>string[] | Array&lt;{' label: string value: string disabled?: boolean '}&gt;</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>用于设置当前选中的值</td>
                  <td>any</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>选项变化时的回调函数</td>
                  <td>Function(e:Event)</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>buttonStyle</td>
                  <td>RadioButton 的风格样式，目前有描边和填色两种风格</td>
                  <td><code>outline</code> | <code>solid</code></td>
                  <td><code>outline</code></td>
                </tr>
              </tbody>
            </table>
            <br/><br/>
            <hgroup>
              <h2>方法</h2>
              <h3>Radio</h3>
            </hgroup>
            <br/><br/>
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
        </div>
      </div>
    );
  }

  handleChange = (e: any) => {
    console.log(e.target.value);
  }
  // 用户用value控制选中哪个
  onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  onChange1 = (e: any) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value1: e.target.value,
    });
  }
}
export default index;
