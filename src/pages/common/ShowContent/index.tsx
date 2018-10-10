import * as React from 'react'

export const ShowContent = (props: any) => {
  const { prefixCls, children } = props;
  return(
    <header className={`${prefixCls}-box-header`}>
      <div className={`${prefixCls}-box-aide`}>
        {children}
      </div>
    </header>
  )
}

export default ShowContent;
