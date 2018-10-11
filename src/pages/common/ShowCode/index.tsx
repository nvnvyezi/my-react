import * as React from 'react'

export const ShowCode = (props: any) => {
  const { prefixCls, children } = props;
  return(
    <section className={`${prefixCls}-code`}>
      <h2>代码演示</h2>
      {children}
    </section>
  )
}

export default ShowCode;
