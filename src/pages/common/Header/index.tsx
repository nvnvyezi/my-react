import * as React from 'react'

export const Header = (props: any) => {
  const { prefixCls, text, title } = props;
  return(
    <header className={`${prefixCls}-header`}>
      <h1>{title}</h1>
      <p>{text}</p>
    </header>
  )
}

export default Header;
