import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleDetail } from '../../services/index'
import './index.less'


export const Article = () => {
  const params = useParams()
  const [item, setItem] = useState<any>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if ((params as any).id ) {
      const id = (params as any).id
      getArticleDetail({ id }).then(({ code, data }) => {
        if (code === 0) {
          setItem(data)
          setLoading(false)
        }
      })
    }
  }, [params])



  const parse = (): string => {
    if (loading) return '正在加载'
    return (window as any).marked.parse((item as any).content || '');
  }
  return <div className="article-content">
    <div className="title">{ item.title }</div>
    <div dangerouslySetInnerHTML={{__html: parse()}} />
  </div>
}
