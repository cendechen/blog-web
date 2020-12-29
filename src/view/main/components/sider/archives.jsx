import React from 'react'

export const Archives = (props) => {
  const { data = [] } = props

  return <div className="top-line py-2 px-2">
    <div class="text-center">归档</div>
    <div class="py-4">
      <ul>
      {data.map(item => <li key={item.name} className="flex mb-1 justify-between">
        <a className="text-gray-900" href="/">{item.name}</a>
        <span className="text-white text-center bg-gray-900 px-2 rounded">{item.cnt}</span>
      </li>)}
      </ul>
    </div>
  </div>
}
