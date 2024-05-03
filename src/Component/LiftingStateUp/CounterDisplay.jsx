import React from 'react'

const CounterDisplay = ({count}) => {
    console.log("count",count);
  return (
    <div>CounterDisplay
        <div>
            {count}
        </div>
    </div>
  )
}

export default CounterDisplay