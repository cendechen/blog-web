import React from 'react'
import { Logo } from './Logo'
import './main.less'
import { Button } from '../Button'

const headList = [
 {
    name: '标签',
    href: '/tags/all'
  }
]
export const Header = () => {
  return <header className="header">
    <div className="contain mx-auto">
      <nav className="flex h-14 py-2 justify-between">
        {/* logo */}
        <div className="nav-left">
          <Logo>cendechen</Logo>
        </div>
        <div className="nav-search"></div>
        <div className="md:hidden">
          <Button>
            <span className="sr-only">打开菜单</span>
            <svg clasName="h-6 w-6" x-description="Heroicon name: menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </Button>
        </div>
        {/* 搜索框 */}
        <div className="hidden md:flex items-center">
          <ul className="flex">
            {headList.map(item => {
              return <li key={item.name} class="px-2">
                <a class="text-base font-medium py-2 px-3 hover:text-gray-500" href={item.href} target="_self">{ item.name }</a>
              </li>
            })}
          </ul>
        </div>
        {/* pc导航 */}
        {/* mobile 导航 */}
      </nav>
    </div>
  </header>
}
