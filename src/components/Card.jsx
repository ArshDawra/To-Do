import React, { useState } from 'react'
import { MdOutlineDelete } from "react-icons/md";
import TaskNotDone from '../assets/AngryParis.ico';
import TaskDone from '../assets/HappyParis.ico';
import { motion } from "framer-motion"

function Card({data,reference,onDelete,onStatusChange}) {

    const [Done, setDone] = useState(0)

    const handleOnClick = () => {
      if(Done){
        setDone(0);
        onStatusChange(1);
      }
      else{
        setDone(1);
        onStatusChange(-1);
      }
    }

  return (
<motion.div drag dragConstraints={reference} whileDrag= {{scale:1.2}} className='relative flex-shrink-0 flex items-center justify-between w-96 h-20 rounded-full bg-zinc-900 text-white p-5' >
    <button className='p-0' onClick={handleOnClick}>
        <img className='w-12 h-12 rounded-full mr-2' src={Done ? TaskDone : TaskNotDone} alt='Task Status' />
    </button>
    <p className={`text-sm font-semibold tracking-tight text-zinc-200 ${Done ? 'line-through' : ''}`}>
        {data.Task}
    </p>
    <button onClick={onDelete} className='ml-auto p-0'>
      <MdOutlineDelete className='w-6 h-6'></MdOutlineDelete>
    </button>  
</motion.div>
  )
}

export default Card
