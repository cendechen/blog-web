import React from 'react'
import './Logo.less'

export const Logo = (props) => {
  const { children } = props
  // return <a className="logo-container" href="/">
  //   <span className="logo">
  //     { children }
  //   </span>博客
  // </a>
  return <svg>
    <circle r="24" cx="25" cy="25" fill="none" className="stroke-current"/>
    <g>
      <circle r="24" cx="25" cy="25" fill="none" className="animate-fade-in"/>
      <circle r="24" cx="25" cy="25" fill="none" className="animate-fade-out"/>
    </g>
  </svg>
}
