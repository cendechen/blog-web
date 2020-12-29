import React from 'react'
import { Logo } from './Logo'
import './main.less'
import { Button } from '../Button'

const headList = [
  {
    name: '首页',
    href: ''
  },
  {
    name: '关于',
    href: ''
  }, {
    name: '标签',
    href: ''
  }, {
    name: '分类',
    href: ''
  }, {
    name: '归档',
    href: ''
  }, {
    name: '搜索',
    href: ''
  }
]
export const Header = () => {
  return <header className="header">
    <div className="container mx-auto">
      <nav className="flex h-14 py-2 justify-between">
        {/* logo */}
        <div className="nav-left">
          <Logo>cendechen</Logo>
        </div>
        <div className="nav-search"></div>
        <div className="md:hidden">
          <Button>
            <span class="sr-only">打开菜单</span>
            <svg class="h-6 w-6" x-description="Heroicon name: menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </Button>
        </div>
        {/* 搜索框 */}
        <div className="hidden md:flex items-center">
          <ul class="flex">
            {headList.map(item => {
              return <li key={item.name} class="px-2">
                <a class="text-base font-medium py-2 px-3 text-gray-900 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-900" href={item.href} target="_self">{ item.name }</a>
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
