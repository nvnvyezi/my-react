import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IsearchProps } from "./interfance";
import Input from './Input'
import './Search.less'
const classNames = require('classnames');

class Search extends React.PureComponent<IsearchProps> {
  static defaultProps = {
    prefixCls: 'nvnv-input-search',
  }
  static propTypes = {
    prefixCls: PropTypes.string,
  }
  private selectSearch: any;
  // 触发搜索回调
  handleSearch = () => {
    const { onSearch } = this.props;
    if (onSearch && typeof onSearch === 'function') {
      let e = this.selectSearch.handleSearch();
      let value = e.value;
      onSearch(value, e);
    }
  }
  render() {
    const { prefixCls, className, style, onSearch, enterButton, ...others } = this.props;
    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-addon-button-string`]: typeof enterButton === 'string',
    });
    const classesAddonIcon = classNames(`${prefixCls}-addon-icon`, {
      [`${prefixCls}-addon-icon-button`]: enterButton,
      [`${prefixCls}-addon-icon-button-boolean`]: typeof enterButton === 'boolean',
    });
    const clasesIcon = classNames(`${prefixCls}-icon`, {
      [`${prefixCls}-icon-button`]: enterButton,
    });
    return (
      <span className={classes} style={style}>
        <Input ref={node => this.selectSearch = node} {...others} />
        <span className={classesAddonIcon} onClick={this.handleSearch}>
        {
          typeof enterButton === 'string'
          ?
          <button className={`${prefixCls}-icon-text`}>{enterButton}</button>
          :
          <i className={clasesIcon} />
        }
        </span>
      </span>
    );
  }
}

export default Search;
