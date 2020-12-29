import React from 'react'
import { Button } from '../../../../components/Button'

export const Item = (props) => {
  const { title, createTime, content, previewImage } = props
  return <div className="bg-white rounded-lg mb-4">
    <div className="mb-4 rounded-tl-lg rounded-tr-lg">
      <img className="w-full max-h-64" src={previewImage} alt="背景图片" />
    </div>
    <div className="px-4 pb-4">
      <div className="tags">

      </div>
      <div className="font-sans">
        <h1 class="text-xl text-gray-900 font-bold"><a className="cursor-pointer hover:text-green-900" href="/">{ title }</a></h1>
        <p class="text-gray-500 text-xs">{ createTime }</p>
        <div class="mt-2 mb-4 text-base text-gray-900">
          { content }
        </div>
        <Button type="primary">Read More</Button>
      </div>
    </div>
  </div>
}
