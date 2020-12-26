import React from 'react'

export const Cate = (props) => {
  const { data = [] } = props
  return <div className="content-box content-inner top-line">
    <div class="title-center">分类</div>
    <div class="content-inner">
      <ul className="category-list">
      {data.map(item => <li className="category-list-item">
        <a></a>
        <span></span>
      </li>)}
      </ul>
    </div>
  </div>
}
