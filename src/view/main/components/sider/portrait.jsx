import React from 'react'
import Avatar from '../../../../static/img/avatar.jpg'
import { Icon } from 'rsuite'

export const Portrait = () => {
  return <div className="portrait">
    <div className="portrait-hd">
      <img className="avatar" src={Avatar} alt="头像"/>
    </div>
    <div className="portrait-bd">
      <h3><strong>cendechen</strong></h3>
      <div className="sub-title">工欲善其事，必先利其器</div>
      <div className="map-marker"><Icon icon="map-marker" size="lg" /> 中国·成都</div>
    </div>
  </div>
}
