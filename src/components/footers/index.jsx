import React from 'react'
import './index.less'

export const Footer = () => {
  const year = (new Date()).getFullYear()
  return <footer className="footer">
    <div class="footer-container">
      <p><a target="_blank" rel="noreferrer" href="https://beian.miit.gov.cn/">蜀ICP备18033390号-1</a> © Copyright {year}. Powered by cendechen</p>
      <p>共123访客123312次访问</p>
    </div>
  </footer>
}
