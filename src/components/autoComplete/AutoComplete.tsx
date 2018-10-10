import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IautoProps, IautoState } from "./interfance";
import classNames from 'classnames';
import './style/AutoComplete.less'

class AutoComplete extends React.PureComponent<IautoProps, IautoState> {
  static defaultProps = {
    prefixCls: 'nvnv-autocomplete',
    allowClear: false,
    placeholder: 'input here',
    autoFocus: false,
    dataSource: [],
  }
  static propTypes = {
    prefixCls: PropTypes.string,
    allowClear: PropTypes.bool,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
  }

  private checkInput: any;
  private selectBox: any;

  constructor(props: IautoProps) {
    super(props);
    this.state = {
      allowClearFlag: false,
      allowSelectBox: false,
      value: '',
      select: 0,
      keyNum: 0,
    }
  }

  componentDidMount() {
    const { autoFocus } = this.props;
    if (autoFocus) {
      this.focus();
    }
    // 监听按键
    document.onkeydown = (e: any) => {
      const { keyNum, allowSelectBox } = this.state;
      const { prefixCls } = this.props;
      e = e || event;
      let currentKey = e.keyCode || e.which || e.charCode;
      let node;
      try {
        node = this.selectBox.children;
      } catch (error) {
        node = []
      }
        // 向上
      if (node.length && allowSelectBox && currentKey === 38) {
        let num = +keyNum - 1;
        if (num === -1) {
          num = node.length - 1;
        }
        this.setState({
          keyNum: num,
        })
        node[num].classList.add(`${prefixCls}-bgColor`);
        num + 1 == node.length
        ?
        node[0].classList.remove(`${prefixCls}-bgColor`)
        :
        node[num + 1].classList.remove(`${prefixCls}-bgColor`)
      }
      // 向下
      if (node.length && allowSelectBox && currentKey === 40) {
        let num = +keyNum + 1;
        if (num === node.length) {
          num = 0;
        }
        this.setState({
          keyNum: num,
        })
        node[num].classList.add(`${prefixCls}-bgColor`);
        num === 0
        ?
        node[node.length - 1].classList.remove(`${prefixCls}-bgColor`)
        :
        node[num - 1].classList.remove(`${prefixCls}-bgColor`)
      }
      if (node.length && allowSelectBox && currentKey === 13) {
        node = node[keyNum];
        this.setState({
          value: node.innerText || node.innerText.textContent,
          keyNum: node.getAttribute('data-index'),
          select: node.getAttribute('data-index'),
        }, () => {
          this.blur();
        })
      }
    }
  }

  // 获取　失去焦点
  focus = () => {
    const { onFocus } = this.props;
    if (onFocus && typeof onFocus === 'function') {
      onFocus();
    }
    this.checkInput.focus();
  }
  blur = () => {
    const { onBlur } = this.props;
    if (onBlur && typeof onBlur === 'function') {
      onBlur();
    }
    this.checkInput.blur();
  }
  // ref事件
  savecheckinput = (node: any) => {
    this.checkInput = node;
  }
  saveSelectBox = (node: any) => {
    this.selectBox = node;
  }

  // 是否显示清除icon
  handleAllowClear = () => {
    this.setState({
      value: '',
    })
  }
  // 处理input　onChange事件
  handleChange = (e: any) => {
    const { onSearch, onChange } = this.props;
    let val = e.target.value;
    if (onSearch && typeof onSearch === 'function') {
      onSearch(val);
    }
    if (onChange && typeof onChange === 'function') {
      onChange(val);
    }
    if (val) {
      this.setState({
        allowClearFlag: true,
        allowSelectBox: true,
        value: val,
        select: 0,
        keyNum: 0,
      }, () => {
        try {
          let node = this.selectBox.children;
          for (let i = 0, len = node.length; i < len; i++) {
            node[i].classList.remove('nvnv-autocomplete-bgColor');
          }
          node[0].classList.add('nvnv-autocomplete-bgColor');
        } catch (error) {
          console.log('别慌，正常操作');
        }
      })
    } else {
      this.setState({
        allowClearFlag: false,
        value: val,
      })
    }
  }
  // 选中后做的事
  handleSelect = (e: any) => {
    const { onSelect } = this.props;
    if (onSelect && typeof onSelect === 'function') {
      this.setState({
        select: e.target.getAttribute('data-index'),
        keyNum: e.target.getAttribute('data-index'),
        value: e.target.innerText || e.target.textContent,
      })
      onSelect(e.target.innerText || e.target.textContent);
    }
  }

  // focus blur 处理
  handleShowSelect = () => {
    const { onFocus } = this.props;
    if (onFocus && typeof onFocus === 'function') {
      onFocus();
    };
    const { value } = this.state;
    if (value) {
      this.setState({
        allowSelectBox: true,
      })
    }
  }
  handleHideSelect = () => {
    const { onBlur } = this.props;
    if (onBlur && typeof onBlur === 'function') {
      onBlur();
    }
    setTimeout(() => {
      this.setState({
        allowSelectBox: false,
      })
    }, 100);
  }

  render() {
    const { prefixCls, placeholder, allowClear, autoFocus, dataSource, onSearch, style, onSelect, onFocus, onBlur, onChange, disabled, ...others } = this.props;
    const { allowClearFlag, value, select, allowSelectBox } = this.state;
    const classesInput = classNames(`${prefixCls}-input`, {
      [`${prefixCls}-disabled`]: disabled,
    })
    const classesallowclear = classNames(`${prefixCls}-allowclear`, {
      [`${prefixCls}-allowclear-hidden`]: !allowClearFlag,
    })
    return (
      <div { ...others} className={prefixCls} style={style}>
        <span className={`${prefixCls}-input-aide`}>
          <input ref={this.savecheckinput} className={classesInput} type="text" name="" id="" placeholder={placeholder} value={value} onChange={this.handleChange} onFocus={this.handleShowSelect} onBlur={this.handleHideSelect} disabled={disabled} />
          {
            allowClear && <i className={classesallowclear} onClick={this.handleAllowClear}/>
          }
        </span>
        {
          allowSelectBox &&
          <div className={`${prefixCls}-search-box`}>
            <ul ref={this.saveSelectBox} className={`${prefixCls}-search-ul`}>
              {
                dataSource && dataSource.map((item: any, index: any) => {
                  const classesSelect = classNames(`${prefixCls}-search-li`, {
                    [`${prefixCls}-select`]: select == index,
                    [`${prefixCls}-bgColor`]: select == index,
                  })
                  return <li onClick={this.handleSelect} className={classesSelect} key={index} data-index={index}>{item}</li>
                })
              }
            </ul>
          </div>
        }
      </div>
    );
  }
}
export default AutoComplete;
