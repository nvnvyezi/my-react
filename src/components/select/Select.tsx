import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IselectProps, IselectState } from "./interfance";
import './Select.less'
import Option from './Option'
const classNames = require('classnames');

class Select extends React.PureComponent<IselectProps, IselectState> {
  static Option = Option;
  static defaultProps = {
    prefixCls: 'nvnv-select',
  }
  static propTypes = {
    prefixCls: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    onChange: PropTypes.func,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
    placeholder: PropTypes.string,
    classNameSelect: PropTypes.string,
  }
  // 处理首次显示
  static getDerivedStateFromProps (props: any, state: any) {
    if (props.children === undefined) {
      return {};
    } else if(props.children.length === undefined) {
      let node = props.children;
      if (node.props.value === state.valueFlag) {
        return {text: node.props.children};
      }
    } else {
      for (let i = 0, len = props.children.length; i < len; i++) {
        let node = props.children[i];
        if (node.props.value === state.valueFlag) {
          return {text: node.props.children};
        }
      }
    }
    if (props.placeholder) {
      return {text: props.placeholder}
    }
    return {};
  }
  private selectDiv: any;
  constructor(props: IselectProps) {
    super(props);
    this.state = {
      allowOptionBox: false,
      text: '',
      valueFlag: this.props.defaultValue,
      multipleArr: [],
    }
  }
  componentDidMount = () => {
    const { autoFocus } = this.props;
    if (autoFocus) {
      this.focus();
    }
  }

  saveSelectDiv = (node: any) => {
    this.selectDiv  = node;
  }

  focus = () => {
    this.selectDiv.focus();
  }
  blur = () => {
    this.selectDiv.blur();
  }

  //触发focus,blur事件
  handleFocus = (e: any) => {
    this.focus();
    const { onFocus } = this.props;
    if (onFocus && typeof onFocus === 'function') {
      onFocus(e)
    }
  }
  handleBlur = (e: any) => {
    this.blur();
    const { onBlur } = this.props;
    if (onBlur && typeof onBlur === 'function') {
      onBlur(e)
    }
    setTimeout(() => {
      this.setState({
        allowOptionBox: false,
      })
    }, 200);
  }
  // 触发click事件
  handleClick = (e: any) => {
      this.setState({
        allowOptionBox: !this.state.allowOptionBox,
    })
  }
  // 触发选中事件
  handleSelect = (e: any) => {
    let value = e.target.innerText || e.target.textContent;
    const { onChange, multiple } = this.props;
    const { multipleArr } = this.state;
    if (onChange && typeof onChange === 'function') {
      onChange(e);
    }
    if (!multiple) {
      this.setState({
        text: value,
        valueFlag: e.target.getAttribute('data-value'),
      }, () => {
        this.setState({
          allowOptionBox: false,
        })
      })
    } else {
      // 检测是否存在这个数
      let arr = multipleArr;
      let flag = false;
      let key = 0;
      for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i].trim() === value.trim()) {
          flag = true;
          key = i;
          break;
        }
      }
      if (flag) {
        arr.splice(key, 1);
      } else {
        arr.push(value.trim())
      }
      this.setState({
        multipleArr: [...arr],
      }, () => {
        this.setState({
          allowOptionBox: true,
        })
      })
    }
  }
  // 在多选项中删除
  handleDelete = (e: any) => {
    e.stopPropagation();
    let value = e.currentTarget.getAttribute('data-value');
    const { multipleArr } = this.state;
    let arr = multipleArr;
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === value) {
        arr.splice(i, 1);
        break;
      }
    }
    this.setState({
      multipleArr: [...arr],
    })
  }

  render() {
    const { prefixCls, children, style, className, classNameSelect, disabled, multiple } = this.props;
    const { allowOptionBox, text, valueFlag, multipleArr } = this.state;
    const classes = classNames(prefixCls, className, {
    })
    const classesSelect = classNames(`${prefixCls}-select`, classNameSelect, {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-select-multiple`]: multiple,
    })
    const classesIcon = classNames({
      [`${prefixCls}-icon-hide`]: allowOptionBox,
      [`${prefixCls}-icon-show`]: !allowOptionBox,
    })
    const classesOption = classNames(`${prefixCls}-option`, {
      [`${prefixCls}-option-multiple`]: multiple,
    })
    const options = React.Children.map(children, (option: React.ReactElement<any>) => {
      let flag = option.props.value === valueFlag;
      return React.cloneElement(option, {
        select: flag,
        onSelect: this.handleSelect,
        multipleArr: multipleArr,
      })
    })
    return (
      <div className={classes} style={style}>
        {
          !disabled
          ?
          <React.Fragment>
            <div ref={this.saveSelectDiv} tabIndex={0} className={classesSelect} onFocus={this.handleFocus} onBlur={this.handleBlur} onClick={this.handleClick}>
              {
                !multiple
                ?
                <div className={`${prefixCls}-aide`}>
                <div className={`${prefixCls}-title`}>
                  {text}
                </div>
                <span className={classesIcon}><i className={`${prefixCls}-icon`} /></span>
              </div>
              :
              <ul className={`${prefixCls}-multiple`}>
                {
                  multipleArr.length > 0
                  ?
                  multipleArr.map((item: any, index: any) => {
                    return <li className={`${prefixCls}-multiple-box`} key={index}><span>{item}</span><i data-value={item} className={`${prefixCls}-multiple-icon`} onClick={this.handleDelete} /></li>
                  })
                  :
                  text
                }
              </ul>
              }
            </div>
            {
              allowOptionBox && <div className={classesOption}>
                {options}
              </div>
            }
          </React.Fragment>
          :
          <div className={classesSelect}>
            <div className={`${prefixCls}-aide`}>
              <div className={`${prefixCls}-title`}>
                { text }
              </div>
              <span className={classesIcon}><i className={`${prefixCls}-icon`} /></span>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Select;
