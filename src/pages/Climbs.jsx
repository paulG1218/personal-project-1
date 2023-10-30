import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Climbs = () => {

    const {climbs} = useLoaderData()

    const climbList = climbs.map(({difficulty}) => (
        <li>
            {difficulty}
        </li>
    ))

  return (
    <ul>
      {climbList}
    </ul>
  )
}

export default Climbs
