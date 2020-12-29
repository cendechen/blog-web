import React from 'react'
import { isNumber } from 'lodash-es'
export const Icon = (props) => {
  const { icon, size = 'base' } =  props
  var textSize = size === 'base' ? 'text-base' : size === 'lg' ? 'text-lg' : 'text-xl'
  var style = {}
  if (isNumber(size)) {
    textSize = ''
    style = {
      'font-size': `${size}px`
    }
  }
  return <i className={`iconfont ${icon} ${textSize}`} style={style} />
}
