import * as React from 'react'

export const InfoCode = (props: any) => {
  const { prefixCls, flag, code, text, title, onFlag } = props;
  return(
    <React.Fragment>
      <div className={`${prefixCls}-box-info`}>
      <div className={`${prefixCls}-info-title`}>
        <span>{ title }</span>
      </div>
      <p dangerouslySetInnerHTML = {{ __html:text }} />
      <span className={`${prefixCls}-info-code-show`} onClick={onFlag}>
        {
          flag
          ?
          <img src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" alt="show code"/>
          :
          <img src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" alt="hidecode"/>
        }
      </span>
    </div>
    {
      flag
      &&
      <footer className={`${prefixCls}-box-info`}>
        <pre>{code}</pre>
      </footer>
    }
  </React.Fragment>
  )
}

export default InfoCode;
