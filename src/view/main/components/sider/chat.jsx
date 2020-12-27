import React from 'react'
import { Icon } from 'rsuite'

const ChatList = [{
  href: 'https://github.com/cendechen',
  name: 'github',
  icon: 'github'
}]

export const Chat = () => {
  return <div className="border-t-2 border-solid border-gray-100">
    <ul className="flex justify-center flex-wrap px-4 py-4">
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
