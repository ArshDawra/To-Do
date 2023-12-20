import React, { useState } from 'react'
import { MdOutlineDelete } from "react-icons/md";
import TaskNotDone from '../assets/AngryParis.ico';
import TaskDone from '../assets/HappyParis.ico';
import { motion } from "framer-motion"

function Card({data,reference,onDelete}) {
    const [Done, setDone] = useState(0)
    const handleDelete = () =>{
      onDelete();
      //console.log(data)
    }
  return (
<motion.div drag dragConstraints={reference} whileDrag= {{scale:1.2}} className='relative flex-shrink-0 flex items-center justify-between w-96 h-20 rounded-full bg-zinc-900 text-white p-5' >
    {
    Done ? 
    <button className='p-0' onClick={()=>setDone(0)}>
        <img className='w-12 h-12 rounded-full mr-2' src={TaskDone} alt='Task Done' />
    </button>
    :
    <button className='p-0' onClick={()=>setDone(1)}>
        <img className='w-12 h-12 rounded-full mr-2' src={TaskNotDone} alt='Task Done' />
    </button>   
    }
    {
    Done ? <p className='text-sm font-semibold tracking-tight text-zinc-200 line-through'>{data.Task}</p> :
    <p className='text-sm font-semibold tracking-tight text-zinc-200'>{data.Task}</p>
    }
    <button onClick={handleDelete} className='ml-auto p-0'>
      <MdOutlineDelete className='w-6 h-6'></MdOutlineDelete>
    </button>  
</motion.div>
  )
}

export default Card
