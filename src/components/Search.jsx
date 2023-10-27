import React from 'react'

export function Search({search}) {
  return (
    <div className=' text-center p-4'>
        <input type="text" className=' outline-0 border-b-2 border-orange-400 w-[40%] text-xl text-red-500' placeholder=' Search here ...'  onChange={(e)=>search(e.target.value)}/>
    </div>
  )
}
