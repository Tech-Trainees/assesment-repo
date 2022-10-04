import React from 'react'
import useFetch from './useFetch'

export const FetchHome = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
        {data && data.map(i => {
            return <p key={i.id}>{i.title}</p>
        })}

    </div>
  )
}
