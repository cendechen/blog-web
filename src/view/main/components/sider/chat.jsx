import React from 'react'
import { Icon } from 'rsuite'

const ChatList = [{
  href: 'https://github.com/cendechen',
  name: 'github',
  icon: 'github'
}]

export const Chat = () => {

  return <div className="top-line">
    <ul className="chat-container">
      {ChatList.map(item => {
        return <li key={item.href}>
          <a target="_blank" href={item.href} className="chat-sms">
            <Icon icon={item.icon} size="3x"/>
          </a>
        </li>
      })}
    </ul>
  </div>
}
