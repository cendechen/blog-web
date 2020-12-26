import React from 'react'
import './index.less'

export const Footer = () => {
  const day = (new Date()).getFullYear()
  return <footer className="footer">
    <div class="footer-container">
      <p>© Copyright {day}. Powered by cendechen</p>
      <p>共123访客123312次访问</p>
    </div>
  </footer>
}
