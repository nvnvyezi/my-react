import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IsliderProps, IsliderState } from "./interface";
import Tooltip from '../tooltip/Tooltip'
import classNames from "classnames";
import './style/slider.less';

class Slider extends React.PureComponent<IsliderProps, IsliderState> {
  static defaultProps = {
    prefixCls: 'nvnv-slider',
  }
  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    disabled: PropTypes.bool,
    onAfterChange: PropTypes.func,
    onChange: PropTypes.func,
    prefixCls: PropTypes.string,
    range: PropTypes.bool,
  }

  static getDerivedStateFromProps (nextProps, nextState) {
    const { ballEnd, ballOrigin } = nextState;
    const { defaultValue, range } = nextProps;
    if (range) {
      return {ballOrigin: ballOrigin || defaultValue[0], ballEnd: ballEnd || defaultValue[1]};
    } else {
      return {ballEnd: ballEnd || defaultValue};
    }
  }

  private selectRail: any;
  private timeId: any;
  // slider info
  private params: any;
  // 判断左边移动还是右边
  private judge: boolean;

  constructor (props: IsliderProps) {
    super(props);
    this.state = {
      ballEnd: 0,
      ballOrigin: 0,
    }
  }
  componentDidMount () {
    const { disabled } = this.props;
    this.params = this.selectRail.getBoundingClientRect();
    if (!disabled) {
      this.selectRail.onmousedown = this._ballStart;
    }
    window.onresize = () => {
      this._getSliderNature();
    }
  }

  // disabled 时删除　onmousedown
  componentDidUpdate () {
    const { disabled, onChange, range } = this.props;
    let { ballOrigin, ballEnd } = this.state;
    ballOrigin = Math.round(ballOrigin);
    if (!range) {
      onChange && onChange(ballEnd);
    } else {
      onChange && onChange([ballOrigin, ballEnd]);
    }

    if (disabled) {
      this.selectRail.onmousedown = null;
    } else {
      if (!this.selectRail.onmousedown) {
        this.selectRail.onmousedown = this._ballStart;
      }
    }
  }
  componentWillUnmount() {
    this.selectRail.onmousedown = null;
  }

  render() {
    const { className, defaultValue, disabled, onAfterChange, onChange, prefixCls, range, ...otherProps } = this.props;
    const { ballEnd, ballOrigin } = this.state;

    const calsses = classNames(prefixCls, className);

    const classesTrack = classNames(`${prefixCls}-track`, {
      [`${prefixCls}-track-disabled`]: disabled,
    })

    const classesHandle = classNames(`${prefixCls}-handle`, {
      [`${prefixCls}-handle-disabled`]: disabled,
    })

    return (
      <div ref={node => this.selectRail = node} className={calsses} {...otherProps}>
        <div className={`${prefixCls}-rail`}/>
        <div style={{width: `${ballEnd - ballOrigin}%`, left: `${ballOrigin}%`}} className={classesTrack} />
        {
          !!ballOrigin &&
          <Tooltip tabIndex={0} style={{left: `${ballOrigin}%`}} className={classesHandle} title={Math.round(ballOrigin)} />
        }
        {
          !!ballEnd &&
          <Tooltip tabIndex={0} style={{left: `${ballEnd}%`}}  className={classesHandle} title={ballEnd} />
        }
      </div>
    );
  }
  // 获取滑动条的属性
  _getSliderNature = () => {
    if (this.timeId) {
      clearTimeout(this.timeId);
    }
    this.timeId = setTimeout(() => {
      this.params = this.selectRail.getBoundingClientRect();
      console.log(this.params)
    }, 300);
  }

  // 球的位置移动
  _ballStart = e => {
    const { range } = this.props;
    const { ballOrigin, ballEnd } = this.state;
    const startX = e.clientX;
    const percent = this._conversion(startX);
    // 判断是单滑动条还是双, 分别做处理
    if (range) {
      const left = Math.abs(percent - ballOrigin);
      const right = Math.abs(percent - ballEnd);
      if (left <= right) {
        if (percent <= 0) {
          this.setState({ballOrigin: 0.1}, () => this.judge = true);
        } else {
          this.setState({ballOrigin: percent}, () => this.judge = true);
        }
      } else {
        if (percent >= 100) {
          this.setState({ballEnd: 100}, () => this.judge = false);
        } else {
          this.setState({ballEnd: percent}, () => this.judge = false);
        }
      }
    } else {
      if (percent >= 100) {
        this.setState({ballEnd: 100});
      } else if (percent <= 0) {
        this.setState({ballEnd: 0});
      } else {
        this.setState({ballEnd: percent});
      }
    }
    document.onmousemove = this._ballMove;
    document.onmouseup = this._ballEnd;
  }
  _ballMove = (e) => {
    const { range } = this.props;
    const { ballOrigin, ballEnd} = this.state;
    const end = this._conversion(e.clientX);

    const num = Math.round(20 / this.params.width);
    // 判断边界
    if (end <= 0) {
      if (!range) {
        this.setState({ballEnd: 0.1})
      } else {
        if (this.judge) {
          this.setState({ballOrigin: 0.1});
        }
      }
      return;
    } else if (end >= 100) {
      if (!range) {
        this.setState({ballEnd: 100})
      } else {
        if (this.judge) {
          this.setState({ballEnd: 100});
        }
      }
      return;
    } else {
      if (this.judge) {
        if (end > ballEnd + num) {
          this.judge = false;
          this.setState({ballOrigin: ballEnd, ballEnd: end})
        } else {
          this.setState({ballOrigin: end})
        }
      } else {
        if (end < ballOrigin - num) {
          this.judge = true;
          this.setState({ballEnd: ballOrigin, ballOrigin: end})
        } else {
          this.setState({ballEnd: end});
        }
      }
    }
  }
  _ballEnd = e => {
    const { range, onAfterChange } = this.props;
    let { ballOrigin, ballEnd } = this.state;
    ballOrigin = Math.round(ballOrigin);
    if (!range) {
      onAfterChange && onAfterChange(ballEnd);
    } else {
      onAfterChange && onAfterChange([ballOrigin, ballEnd]);
    }
    document.onmousemove = null;
    document.onmouseup = null;
  }

  // 将坐标转化为百分比
  _conversion = num => {
    const moveX = Math.round(num - this.params.left);
    const end = Math.round(moveX / this.params.width * 100);
    return end;
  }
}

export default Slider;
