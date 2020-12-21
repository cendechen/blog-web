import React from 'react'
import classname from 'classnames'
export const Header = () => {
  const topclass = classname([
    "top",
    {
      "theme-night" : true
    }
  ])
  return <nav className={topclass}>

  </nav>
}
