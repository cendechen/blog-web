import { Get } from '../utils/fetch'

export const getTagList = async() => {
  return Get('/api/tags/list')
}

export const getArticleList = async(params = { page: 1, pageSize: 10 }) => {
  return Get('/api/article/list', params)
}

export const getArticleDetail = async(params = { id: 0 }) => {
  return Get('/api/article/detail', params)
}
