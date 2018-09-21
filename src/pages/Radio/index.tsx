import * as React from 'react';

import './index.less'
import InfoCode from "../common/InfoCode/index";
import { Radio } from "../../components/nvnvyezi";

interface IradioProps {
  prefixCls: string;
  code1: string;
  options: Array<any>;
}
interface Istate {
  flag1: boolean;
  flag2: boolean;
  flag3: boolean;
  flag4: boolean;
}

class index extends React.PureComponent<IradioProps, Istate> {
  static defaultProps = {
    prefixCls: 'show-radio',
    options: ['A', 'B', 'C', 'D'],
    code1: '<Radio>Radio</Radio>',
  }
  constructor(props: IradioProps) {
    super(props);
    this.state = {
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,
    }
  }

  handleFlag = (num: number) => {
    switch (num) {
      case 1:
        this.setState({
          flag1: !this.state.flag1,
        })
        break;
      case 2:
        this.setState({
          flag2: !this.state.flag2,
        })
        break;
      case 3:
        this.setState({
          flag3: !this.state.flag3,
        })
        break;
      case 4:
        this.setState({
          flag4: !this.state.flag4,
        })
        break;
      default:
        break;
    }
    // this.setState(prevState => {
    //   let a: string = 'flag1'
    //   let arr = {
    //     1: 'flag1'
    //   }
    //   return {arr[1]: !prevState[`flag${num}`]}
    // })
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
                    <Radio name="radio">Radio</Radio>
                  </div>
                </header>
                <InfoCode prefixCls={prefixCls} flag={this.state.flag1} code={code1} onFlag={this.handleFlag.bind(this, 1)} title={'基本'} text={'最简单的用法。'} />
              </div>
              <div className={`${prefixCls}-box`}>
                <header className={`${prefixCls}-box-header`}>
                  <div className={`${prefixCls}-box-aide`}>
                    <Radio.Group defaultValue={2} name="radio1">
                      <Radio>A</Radio>
                      <Radio>B</Radio>
                      <Radio>C</Radio>
                      <Radio>D</Radio>
                    </Radio.Group>
                  </div>
                </header>
                <InfoCode prefixCls={prefixCls} flag={this.state.flag2} code={code1} onFlag={this.handleFlag.bind(this, 2)} title={'单选组合'} text={'一组互斥的 Radio 配合使用。并且携带默认值。'} />
              </div>
              <div className={`${prefixCls}-box`}>
                <header className={`${prefixCls}-box-header`}>
                  <div className={`${prefixCls}-box-aide`}>
                    <Radio.Group disabled>
                      <Radio>A</Radio>
                      <Radio>B</Radio>
                      <Radio>C</Radio>
                      <Radio>D</Radio>
                    </Radio.Group>
                  </div>
                </header>
                <InfoCode prefixCls={prefixCls} flag={this.state.flag3} code={code1} onFlag={this.handleFlag.bind(this, 3)} title={'不可用'} text={'Radio 不可用。'} />
              </div>
              <div className={`${prefixCls}-box`}>
                <header className={`${prefixCls}-box-header`}>
                  <div className={`${prefixCls}-box-aide`}>
                    <Radio.Group name="radio2" options={options} onChange={this.handleChange} />
                  </div>
                </header>
                <InfoCode prefixCls={prefixCls} flag={this.state.flag4} code={code1} onFlag={this.handleFlag.bind(this, 4)} title={'组合 - 配置方式'} text={'通过配置 options 参数来渲染单选框。'} />
              </div>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
export default index;
