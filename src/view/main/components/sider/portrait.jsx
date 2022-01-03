import React from 'react'
import { Icon } from '../../../../components/Icon'
import Avatar from '../../../../static/img/avatar.jpg'

const url = 'http://api.map.baidu.com/marker?location=30.565873,104.063864&title=两江国际&content=成都美团&output=html&src=webapp.baidu.openAPIdemo'

export const Portrait = () => {

  return <div className="p-4 protait">
    <div className="text-center mb-4">
      <img className="mx-auto rounded-full w-24 h-24" src={Avatar} alt="头像"/>
    </div>
    <div className="text-center">
      <h3 className="name mb-2"><strong>陈俊林</strong></h3>
      <div className="mb-1">工欲善其事，必先利其器</div>
      <div className="mb-1">
        <a href={url} target="_blank" rel="noreferrer">
          <Icon icon="icon-address" size="xl" />中国·成都
        </a>
        </div>
    </div>
  </div>
}
