import React, { useState } from 'react'
import { IoAdd } from "react-icons/io5";

function Input({onDataChange}) {
  const [Task, setTask] = useState("")
  const [TaskList, setTaskList] = useState([])
  const submitHandler = (e) =>{
    e.preventDefault()
    setTaskList([...TaskList,{Task}])
    onDataChange([...TaskList,{Task}])
    setTask("")
    //console.log(TaskList)
  }
  return (
    <div className='relative top-[9rem] flex items-center justify-center h-20'>
        <form className='h-20' onSubmit={submitHandler}>
          <input
            type="text"
            className='text-xl border-zinc-200 rounded-md w-[24] h-12 m-5 px-4 py-2'
            placeholder='Enter your task here'
            value = {Task}
            onChange = {(e)=>{
              setTask(e.target.value)
            }}
          />
        </form>
        <button onClick = {submitHandler} className='w-12 h-12 bg-zinc-500 rounded-full ml-2 flex items-center justify-center'>
          <IoAdd className='w-6 h-6 text-white'></IoAdd>
        </button>
      </div>
  )
}

export default Input
