import React from 'react'

export const Archives = (props) => {
  const { data = [] } = props

  return <div className="content-box content-inner top-line">
    <div class="title-center">归档</div>
    <div class="content-inner">
      <ul className="archive-list">
      {data.map(item => <li className="archive-list-item">
        <a className="archive-list-link" href="">{item.name}</a>
        <span className="archive-list-cnt">{item.cnt}</span>
      </li>)}
      </ul>
    </div>
  </div>
}
