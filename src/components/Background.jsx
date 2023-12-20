import React from 'react'
import GellarGilmore from './GellarGilmore'

function Background() {
  return (
    <div w-full h-screen>
     <GellarGilmore/>
     <div className='fixed z-[2] mt-24 w-full py-10 flex justify-center text-zinc-200 font-semibold tracking-tight text-4xl'>My To-dos</div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-5xl tracking-tight font-semibold text-zinc-600'>Study like Paris Gellar.</h1>
    </div>
  )
}

export default Background
