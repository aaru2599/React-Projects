import React, { useState } from 'react'
import CounterDisplay from './CounterDisplay'
import CounterIncrement from './CounterIncrement'

const Parant = () => {
    const [count, setcount] = useState(0)
    const incrementCount=()=>setcount(prev=>prev+1)
  return (
    <div>
        <CounterDisplay count={count}/>
        <CounterIncrement incrementOnCick={incrementCount}/>
    </div>
  )
}

export default Parant