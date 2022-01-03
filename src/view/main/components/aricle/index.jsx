import React, { useEffect, useState } from 'react'
import { Item } from './Item'
import './index.less'
import { getArticleList } from '../../../../services/index'
import { useRequest } from '@umijs/hooks'
import { Pagination } from 'antd'


export const AricleList = () => {
  const [total, setTotal] = useState(0)
  const [current, setCurrent] = useState(1)
  const [list, setList] = useState([])

  const { run } = useRequest(async (params) => {
    return await getArticleList(params)
  }, {
    onSuccess: ({ code, data }, params) => {
      if (code === 0) {
        setTotal(1000)
        setList(data.list)
      }
    },
    manual: true
  })

  useEffect(() => {
    run({
      page: 1,
    })
  }, [run])

  const onChangePage = (value) => {
    setCurrent(value)
    run({
      page: value
    })
  }

  return <div className="aricle-list">
    <div className="list">
      {(list || []).map((aricle, index) => {
        return <Item key={index} {...aricle} />
      })}
    </div>
    <div className="page">
      <Pagination
        total={total}
        defaultCurrent={1}
        current={current}
        onChange={onChangePage}
      />
    </div>
  </div>
}
