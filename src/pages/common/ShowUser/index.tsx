import * as React from 'react'

export const ShowUser = (props: any) => {
  const { prefixCls, title="何时使用", children } = props;
  return(
    <section className={`${prefixCls}-user`}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default ShowUser;
