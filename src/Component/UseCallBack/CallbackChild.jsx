import React, { memo } from 'react'

const CallbackChild = ({childFunc}) => {
    console.log("child");
   
    const handleFunc=()=>{
        childFunc("Hello")
    }
  return (
    <div onClick={handleFunc}>CallbackChild</div>
  )
}

export default memo(CallbackChild)