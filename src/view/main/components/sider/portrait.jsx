import React from 'react'
import { Icon } from '../../../../components/Icon'
import Avatar from '../../../../static/img/avatar.jpg'

export const Portrait = () => {
  return <div className="p-4">
    <div className="text-center mb-4">
      <img className="mx-auto rounded-full w-24 h-24" src={Avatar} alt="头像"/>
    </div>
    <div className="text-center">
      <h3><strong>陈俊林</strong></h3>
      <div className="text-gray-400">工欲善其事，必先利其器</div>
      <div className="text-gray-400"><Icon icon="icon-address" size="xl" />中国·成都</div>
    </div>
  </div>
}
