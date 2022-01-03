import React from 'react'
import { isNumber } from 'lodash-es'

export const Icon = (props) => {
  const { icon, size = 30 } =  props
  var style = {}
  if (isNumber(size)) {
    style = {
      'fontSize': `${size}px`
    }
  }
  return <i className={`iconfont ${icon}`} style={style} />
}
