import * as React from 'react';
import * as PropTypes from 'prop-types';
import './index.less'
import { Checkbox, Button, Row, Col } from "../../components/nvnvyezi";
import { InfoCode, ShowContent } from "../common/index";

const CheckboxGroup = Checkbox.Group;

interface IcheckboxProps {
  prefixCls: string;
  plainOptions: Array<string>;
  defaultCheckedList: Array<string>;
}
interface IcheckboxState {
  disabled: boolean;
  checked: boolean;
  checkedList: Array<string>;
  indeterminate: boolean;
  checkAll: boolean;
}

class index extends React.PureComponent<IcheckboxProps, IcheckboxState> {
  static defaultProps = {
    prefixCls: 'show-checkbox',
    plainOptions: ['Apple', 'Pear', 'Orange'],
    defaultCheckedList: ['Apple', 'Orange'],
  }
  static propTypes = {
    prefixCls: PropTypes.string,
  }

  constructor(props: IcheckboxProps) {
    super(props);
    this.state = {
      // 受控的
      checked: false,
      disabled: false,
      // 全选
      checkedList: this.props.defaultCheckedList,
      indeterminate: true,
      checkAll: false,
    }
  }

  render() {
    const { prefixCls, plainOptions } = this.props;
    const { checked, disabled, checkAll, indeterminate, checkedList } = this.state;
    const text = `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;
    return (
      <div className={prefixCls}>
        <div className={`${prefixCls}-aide`}>
          <header className={`${prefixCls}-header`}>
            <h1>Checkbox 多选框</h1>
            <p>多选框。</p>
          </header>
          <section className={`${prefixCls}-user`}>
            <h2>何时使用</h2>
            <ul className={`${prefixCls}-ul`}>
              <li className={`${prefixCls}-li`}>在一组可选项中进行多项选择时；</li>
              <li className={`${prefixCls}-li`}>单独使用可以表示两种状态之间的切换，和 <code>switch</code> 类似。区别在于切换 <code>switch</code> 会直接触发状态改变，而 <code>checkbox</code> 一般用于状态标记，需要和提交操作配合。</li>
            </ul>
          </section>
          <section className={`${prefixCls}-code`}>
            <h2>代码演示</h2>
            <div className={`${prefixCls}-code-content`}>
              <div className={`${prefixCls}-code-content-box`}>
                <ShowContent prefixCls={prefixCls}>
                  <Checkbox onChange={this.handleChange}>Checkbox</Checkbox>
                  <Checkbox checked>Checkbox</Checkbox>
                </ShowContent>
                <InfoCode prefixCls={prefixCls} title="基本用法" text="简单的 checkbox。" />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <ShowContent prefixCls={prefixCls}>
                  <p style={{ marginBottom: '20px' }}>
                    <Checkbox
                      disabled={disabled}
                      checked={checked}
                      onChange={this.onChange}
                    >
                      {text}
                    </Checkbox>
                  </p>
                  <p>
                    <Button
                      type="primary"
                      size="small"
                      onClick={this.toggleChecked}
                    >
                      {checked ? 'Check' : 'Uncheck'}
                    </Button>
                    <Button
                      style={{ marginLeft: '10px' }}
                      type="primary"
                      size="small"
                      onClick={this.toggleDisable}
                    >
                      {disabled ? 'Disable' : 'Enable'}
                    </Button>
                  </p>
                </ShowContent>
                <InfoCode prefixCls={prefixCls} title="受控的 Checkbox" text="联动 checkbox。" />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <ShowContent prefixCls={prefixCls}>
                  <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                    <Checkbox
                      indeterminate={indeterminate}
                      onChange={this.onCheckAllChange}
                      checked={checkAll}
                    >
                      Checkbox
                    </Checkbox>
                  </div>
                  <br />
                  <CheckboxGroup
                    options={plainOptions}
                    value={checkedList}
                    onChange={this.onChange1}
                  />
                </ShowContent>
                <InfoCode prefixCls={prefixCls} title="全选" text="在实现全选效果时，你可能会用到 <code>checkbox</code>。" />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <ShowContent prefixCls={prefixCls}>
                  <CheckboxGroup
                    options={plainOptions}
                    defaultValue={['Pear']}
                    onChange={this.onChange2}
                  />
                  <br />
                  <CheckboxGroup
                    options={plainOptions}
                    defaultValue={['Pear']}
                    onChange={this.onChange2}
                    disabled
                  />
                </ShowContent>
                <InfoCode prefixCls={prefixCls} title="全选" text="在实现全选效果时，你可能会用到 <code>checkbox</code>。" />
              </div>
              <div className={`${prefixCls}-code-content-box`}>
                <ShowContent prefixCls={prefixCls}>
                  <CheckboxGroup style={{ width: '100%' }} onChange={this.onChange2}>
                    <Row>
                      <Col span={8}><Checkbox value="A">A</Checkbox></Col>
                      <Col span={8}><Checkbox value="B">B</Checkbox></Col>
                      <Col span={8}><Checkbox value="C">C</Checkbox></Col>
                      <Col span={8}><Checkbox value="D">D</Checkbox></Col>
                      <Col span={8}><Checkbox value="E">E</Checkbox></Col>
                    </Row>
                  </CheckboxGroup>,
                </ShowContent>
                <InfoCode prefixCls={prefixCls} title="布局" text="Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。" />
              </div>
            </div>
          </section>
          <footer className={`${prefixCls}-footer`}>
            <hgroup>
              <h2>API</h2>
              <h3>Checkbox</h3>
            </hgroup>
            <br />
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
                  <td>className</td>
                  <td>设置样式</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>autoFocus</td>
                  <td>自动获取焦点</td>
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
                  <td>defaultChecked</td>
                  <td>初始是否选中</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>失效状态</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>indeterminate</td>
                  <td>设置 indeterminate 状态，只负责样式控制</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>变化时回调函数</td>
                  <td>Function(e:Event)</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
            <br /><br />
            <h3>Checkbox Group</h3>
            <br />
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
                  <td>className</td>
                  <td>设置样式</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>defaultValue</td>
                  <td>默认选中的选项</td>
                  <td>string[]</td>
                  <td>[]</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>整组失效</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>options</td>
                  <td>指定可选项</td>
                  <td>string[]</td>
                  <td>[]</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>指定选中的选项</td>
                  <td>string[]</td>
                  <td>[]</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>变化时回调函数</td>
                  <td>Function(checkedValue)</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
            <br/><br/>
            <h3>方法</h3>
            <br/>
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

  // 基本用法的onchange
  handleChange = (e: any) => {
    console.log('checked=', e.target.checked);
  }

  // 受控checkbox
  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  }

  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled });
  }

  onChange = (e) => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  }

  // 全选
  onChange1 = (checkedList) => {
    const { plainOptions } = this.props;
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }

  onCheckAllChange = (e) => {
    const { plainOptions } = this.props;
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }

  // group change
  onChange2 = (val: any) => {
    console.log(val);
  }
}

export default index;
