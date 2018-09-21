import * as React from 'react';

import './index.less'
import { Radio } from "../../components/nvnvyezi";

interface IradioProps {
  prefixCls: string;
  code1: string;
  options: Array<any>;
}
interface Istate {
  flag1: boolean;
}

class index extends React.PureComponent<IradioProps, Istate> {
  static defaultProps = {
    prefixCls: 'show-radio',
    options: ['A', 'B', 'C', 'D'],
    code1: 'ReactDOM.render(<Radio>Radio</Radio>, mountNode);',
  }
  constructor(props: IradioProps) {
    super(props);
    this.state = {
      flag1: false,
    }
  }

  handleFlag = (num: number) => {
    switch (num) {
      case 1:
        this.setState({
          flag1: !this.state.flag1,
        })
        break;

      default:
        break;
    }
  }

  handleChange = (e: any) => {
    console.log(e.target.value);
  }

  render() {
    const { prefixCls, code1, options } = this.props;
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
            <section className={`${prefixCls}-content`}>
              <div className={`${prefixCls}-box`}>
                <header className={`${prefixCls}-box-header`}>
                  <div className={`${prefixCls}-box-aide`}>
                    <div className={`${prefixCls}-box-radio`}><Radio name="radio">Radio</Radio></div>
                  </div>
                </header>
                <main className={`${prefixCls}-box-info`}>
                  <div className={`${prefixCls}-info-title`}>
                    <span>基本</span>
                  </div>
                  <p>最简单的用法。</p>
                  <span className={`${prefixCls}-info-code-show`} onClick={this.handleFlag.bind(this, 1)}>
                    {
                      this.state.flag1
                      ?
                      <img src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" alt="show code"/>
                      :
                      <img src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" alt="hidecode"/>
                    }
                  </span>
                </main>
                {
                  this.state.flag1
                  &&
                  <footer className={`${prefixCls}-box-info`}>
                    <pre>{code1}</pre>
                  </footer>
                }
              </div>
              <div className={`${prefixCls}-box`}>
                <header className={`${prefixCls}-box-header`}>
                  <div className={`${prefixCls}-box-aide`}>
                    <Radio.Group defaultValue={2} onChange={this.handleChange}>
                      <Radio>A</Radio>
                      <Radio>B</Radio>
                      <Radio>C</Radio>
                      <Radio>D</Radio>
                    </Radio.Group>
                    <br/>
                    <Radio.Group name="radio1" defaultValue={3}>
                      <Radio>A</Radio>
                      <Radio>B</Radio>
                      <Radio>C</Radio>
                      <Radio>D</Radio>
                    </Radio.Group>
                    <br/>
                    <Radio.Group disabled onChange={this.handleChange}>
                      <Radio>A</Radio>
                      <Radio>B</Radio>
                      <Radio>C</Radio>
                      <Radio>D</Radio>
                    </Radio.Group>
                    <br/>
                    <Radio.Group name="radio2" options={options} />
                  </div>
                </header>
                <main className={`${prefixCls}-box-info`}>
                  <div className={`${prefixCls}-info-title`}>
                    <span>单选组合</span>
                  </div>
                  <p>一组互斥的 Radio 配合使用。</p>
                  <span className={`${prefixCls}-info-code-show`} onClick={this.handleFlag.bind(this, 1)}>
                    {
                      this.state.flag1
                      ?
                      <img src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" alt="show code"/>
                      :
                      <img src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" alt="hidecode"/>
                    }
                  </span>
                </main>
                {
                  this.state.flag1
                  &&
                  <footer className={`${prefixCls}-box-info`}>
                    <pre>{code1}</pre>
                  </footer>
                }
              </div>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
export default index;
