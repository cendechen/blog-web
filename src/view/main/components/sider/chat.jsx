import React from 'react'
import { Icon } from '../../../../components/Icon'
const ChatList = [{
  href: 'https://github.com/cendechen',
  name: 'github',
  icon: 'github'
}]

export const Chat = () => {
  return <div className="chat-line">
    <ul className="flex justify-center flex-wrap px-4 py-4">
      {ChatList.map(item => {
        return <li key={item.href}>
          <a target="_blank" href={item.href} className="chat-sms" rel="noreferrer">
            <Icon icon="icon-huaban88" size={50}/>
          </a>
        </li>
      })}
    </ul>
  </div>
}
