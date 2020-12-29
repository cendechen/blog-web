import { useState, useEffect } from 'react'
import { ajax } from 'rxjs/ajax'
import { map, take, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { CONFIG } from './config'

export const post = (ajaxConfig) => {
  return ajax(ajaxConfig)
}


export const useObervableApi = (params) => {
  const [response, setResponse] = useState(null)

    useEffect(() => {
      let subscription
      let disabled = false
      if(!disabled) {
        const source$ = ajax(params).pipe(
          map(res => res),
          take(1),
          catchError(error => of({ error: true, message: `Error ${response.status}` }))
        )
        subscription = source$.subscribe(res => setResponse(res.response))
      }

      return () => {
        disabled = true
        subscription && subscription.unsubscribe()
      }
    }, [ params ])

    return response
}

export const getAricleList = (param = {}) => {
  return post({
    url: CONFIG.getList,
    data: {...param}
  })
}
