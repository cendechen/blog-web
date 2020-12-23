import React from 'react'
import './Logo.less'

export const Logo = (props) => {
  console.log(props)
  const { children } = props
  return <a className="logo-container" href="/">
    <span className="logo">
      { children }
    </span>博客
  </a>
}
