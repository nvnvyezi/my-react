import * as React from 'react';
import info from "./info";
import { Link } from "react-router-dom";
import classNames from 'classnames';

import './index.less'

class index extends React.Component {
  render() {
    const prefixCls = 'nvnv-sidebar';
    return (
      <div className={prefixCls}>
        <div className={`${prefixCls}-img`}>sd</div>
        <ul className={`${prefixCls}-ul`}>
          {
            info.map((item, key) => {
              const { url } = item;
              const classes = classNames(`${prefixCls}-li`, {
                [`${prefixCls}-istitle`]: item.isTitle,
                [`${prefixCls}-url`]: url,
                [`${prefixCls}-isct`]: item.isCT,
              })
              return url ? <Link to={url} key={key} className={classes}>{item.name}</Link> : <li key={key} className={classes}>{item.name}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default index;
