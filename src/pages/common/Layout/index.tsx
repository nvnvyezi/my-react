import * as React from 'react'

export const ShowLayout = (props: any) => {
  const { prefixCls, children } = props;
  return(
    <div className={prefixCls}>
        <div className={`${prefixCls}-aide`}>
          {children}
        </div>
      </div>
  )
}

export default ShowLayout;
