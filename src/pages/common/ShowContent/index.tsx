import * as React from 'react'

export const ShowContent = (props: any) => {
  const { prefixCls, children } = props;
  return(
    <header className={`${prefixCls}-content-box-header`}>
      <div className={`${prefixCls}-content-box-aide`}>
        {children}
      </div>
    </header>
  )
}

export default ShowContent;
