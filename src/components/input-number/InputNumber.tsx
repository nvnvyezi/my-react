import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Iprops, Istate } from "./interface";
import classNames from 'classnames';
import './style/inputnumber.less';

class InputNumber extends React.Component<Iprops, Istate> {
  static defaultProps = {
    prefixCls: 'nvnv-inputnumber',
    max: 2 ** 53,
    min: (-2) ** 53,
    precision: 0,
    size: 'default',
    step: 1,
  }
  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number,
    onChange: PropTypes.func,
    prefixCls: PropTypes.string,
    value: PropTypes.number,
  }
  static getDerivedStateFromProps(props, state) {
    const { formatter, parser } = props;
    let { currentValue } = state;

    let value;
    if (typeof currentValue === 'string' && parser) {
      value = parser(currentValue);
    }
    if (formatter) {
      value = formatter(value || currentValue);
    }
    return {currentValue: value || currentValue};
  }
  private selectInput: any;

  constructor(props: Iprops) {
    super(props);
    this.state = {
      currentValue: props.value || props.defaultValue || 0,
      isBottomClick: true,
      isTopClick: true,
      precision: props.precision || 0,
      visible: false,
    }
  }
  // 判断精度
  componentDidMount () {
    const { step } = this.props;
    const place = String(step).indexOf('.');
    if (place !== -1) {
      this.setState({precision: String(step).length - place - 1});
    }
  }

  render() {
    const { className, defaultValue, disabled, formatter, onChange, parser, size, prefixCls, ...otherProps } = this.props;
    const { currentValue, isBottomClick, isTopClick, visible } = this.state;

    const classes = classNames(prefixCls, className, `${prefixCls}-size-${size}`);
    const classesTop = classNames(`${prefixCls}-arrow-top`, {
      [`${prefixCls}-arrow-click`]: !isTopClick,
    })
    const classesBottom = classNames(`${prefixCls}-arrow-bottom`, {
      [`${prefixCls}-arrow-click`]: !isBottomClick,
    })
    const classesInput = classNames(`${prefixCls}-input`, {
      [`${prefixCls}-input-disabled`]: disabled,
    })

    return (
      <div className={classes} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <input ref={node => this.selectInput = node} className={classesInput} {...otherProps} disabled={disabled} value={currentValue} type="text" onChange={this.handleChange} />
        {
          !disabled && visible &&
          <div className={`${prefixCls}-arrow-assist`}>
            <div className={classesTop} onClick={this.handleAddNumber} />
            <div className={classesBottom} onClick={this.handleReduceNumber} />
          </div>
        }
      </div>
    );
  }

  // 移入移除显示小箭头
  handleMouseEnter = () => {
    this.setState({visible: true});
  }
  handleMouseLeave = () => {
    this.setState({visible: false});
  }

  // 数字增大减小
  handleAddNumber = () => {
    const { min, max, onChange, step = 1 } = this.props;
    const { precision } = this.state;
    let value = this._number();
    const currentValue = (value + step).toFixed(precision);
    if (max) {
      if (max > value) {
        this.setState({currentValue, isBottomClick: true}, () => {
          onChange && onChange(this.state.currentValue);
        });
      } else if (min && value < min) {
        this.setState({currentValue: min, isTopClick: false, isBottomClick: true});
      } else {
        this.setState({currentValue: max, isTopClick: false});
        return ;
      }
    } else {
      this.setState({currentValue, isBottomClick: true}, () => {
        onChange && onChange(this.state.currentValue);
      });
    }
  }
  handleReduceNumber = () => {
    const { max, min, onChange, step = 1 } = this.props;
    const { precision } = this.state;
    let value = this._number();
    if (min) {
      if (min < value) {
        this.setState({currentValue: (value - step).toFixed(precision), isTopClick: true}, () => {
          onChange && onChange(this.state.currentValue);
        });
      } else if (max && value > max) {
        this.setState({currentValue: max, isBottomClick: false, isTopClick: true});
      } else {
        this.setState({currentValue: min, isBottomClick: false});
        return ;
      }
    } else {
      this.setState({currentValue: (value - step).toFixed(precision), isTopClick: true},  () => {
        onChange && onChange(this.state.currentValue);
      });
    }
  }

  // 有parser，将value变为number
  _number = (value = this.state.currentValue) => {
    const { parser } = this.props;
    if (typeof value === 'string' && parser) {
      value = parser(value)
    }
    if (typeof value === 'string') {
      value = +value;
    }
    return value;
  }

  // change
  handleChange = (e) => {
    let value = e.target.value;
    value = this._number(value);
    const reg = /^(^-?\d+$)$/;
    if (reg.test(value)) {
      this.setState({
        currentValue: value,
      })
      const { onChange } = this.props;
      onChange && onChange(value);
    }
  }

  // focus blur
  focus = () => {
    this.selectInput.focus();
  }
  blur = () => {
    this.selectInput.blur();
  }
}

export default InputNumber;
