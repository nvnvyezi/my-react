import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from "classnames";
import { ItooltipProps, ItooltipState } from "./interface";
import './style/tooltip.less'

class Tooltip extends React.PureComponent<ItooltipProps, ItooltipState> {
  static defaultProps = {
    defaultVisible: true,
    placement: 'top',
    prefixCls: 'nvnv-tooltip',
  }
  static propTypes = {
    className: PropTypes.string,
    defaultVisible: PropTypes.bool,
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    overlayClassName: PropTypes.string,
    overlayStyle: PropTypes.object,
    placement: PropTypes.string,
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    visible: PropTypes.bool,
  }
  private timeId: any;
  private timeDelayId: any;
  private selectTip: any;

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      style: {},
    }
  }

  componentWillUnmount () {
    // 清除计时器
    this.timeDelayId && clearTimeout(this.timeDelayId);
    this.timeId && clearTimeout(this.timeId);
  }

  render() {
    const { children, className, defaultVisible, mouseEnterDelay, mouseLeaveDelay, onVisibleChange, overlayClassName, overlayStyle, placement, prefixCls, title, visible, ...otherProps } = this.props;
    const { show, style } = this.state;

    const styles ={ ...overlayStyle, ...style };

    const classes = classNames(prefixCls, className);

    const classesTip = classNames(`${prefixCls}-tip`, `${prefixCls}-tip-${placement}`, overlayClassName, {
      [`${prefixCls}-tip-visible`]:  !(visible || defaultVisible),
    });

    return (
      <React.Fragment>
        <span {...otherProps} className={classes} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          {children}
          {
            show && <div style={styles} ref={node => this.selectTip=node} className={classesTip}>{title}</div>
          }
        </span>
      </React.Fragment>
    );
  }

  // 鼠标进入时触发
  handleMouseEnter = () => {
    const { mouseEnterDelay = 0.2 } = this.props;
    const { placement } = this.props;
    this.timeId = setTimeout(() => {
      this.setState({show: true}, () => {
        const params = this.selectTip.getBoundingClientRect();
        switch (placement) {
          case 'top':
          case 'topLeft':
          case 'topRight':
            this.setState({style: {top: `-${params.height + 13}px`}});
            break;
          case 'bottom':
          case 'bottomLeft':
          case 'bottomRight':
            this.setState({style: {top: `${params.height + 10}px`}});
            break;
          case 'left':
          case 'leftTop':
          case 'leftBottom':
            this.setState({style: {left: `-${params.width + 10}px`}});
            break;
          case 'right':
          case 'rightTop':
          case 'rightBottom':
          console.log(params);
            this.setState({style: {right: `-${params.width +13}px`}});
            break;
          default:
            break;
        }
      });
    }, mouseEnterDelay * 1000);
  }

  // 鼠标移除时触发
  handleMouseLeave = () => {
    const { mouseLeaveDelay = 0.1, onVisibleChange } = this.props;
    if (this.timeId) {
      clearTimeout(this.timeId);
    }
    this.timeDelayId = setTimeout(() => {
        this.setState({show: false}, () => {
          onVisibleChange && onVisibleChange(this.selectTip);
        });
      }, mouseLeaveDelay * 1000)
  }
}

export default Tooltip;
