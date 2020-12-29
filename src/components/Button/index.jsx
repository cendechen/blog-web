import React from 'react'
import classNames from 'classnames'
import './index.less'

export const Button = (props) => {
  const { children, type } = props
  const classes = classNames('rx-btn', {
    'rx-btn-default': !type,
    'rx-btn-primary': type === 'primary'
  })
  return <button className={classes}>
    {children}
  </button>
}
