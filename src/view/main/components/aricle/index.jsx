import React from 'react'
import { Item } from './Item'

const aricleList = [{
  id: 12, // 文章Id
  previewImage: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2806461511,601663066&fm=26&gp=0.jpg', //预览图片
  title: '测试鼠标',
  introduction: '前言或者间接',
  content: 'xadasdasdasdasdasd', // 内容
  createTime: '2019-01-02', // 创建时间
  updateTime: '2019-01-02', // 更新时间
  tags: [], // 标签
  cate: [], // 分类信息
}, {
  id: 12, // 文章Id
  previewImage: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2806461511,601663066&fm=26&gp=0.jpg', //预览图片
  title: '测试鼠标',
  introduction: '前言或者间接',
  content: 'xadasdasdasdasdasd', // 内容
  createTime: '2019-01-02', // 创建时间
  updateTime: '2019-01-02', // 更新时间
  tags: [], // 标签
  cate: [], // 分类信息
}, {
  id: 12, // 文章Id
  previewImage: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2806461511,601663066&fm=26&gp=0.jpg', //预览图片
  title: '测试鼠标',
  introduction: '前言或者间接',
  content: 'xadasdasdasdasdasd', // 内容
  createTime: '2019-01-02', // 创建时间
  updateTime: '2019-01-02', // 更新时间
  tags: [], // 标签
  cate: [], // 分类信息
}]

export const AricleList = () => {
  return <div class="w-full pl-0 md:w-5/6 md:pl-10">
    {aricleList.map((aricle, index) => {
      return <Item key={index} {...aricle} />
    })}
    <div class="page">

    </div>
  </div>
}
