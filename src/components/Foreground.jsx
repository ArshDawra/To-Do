import React,{useRef, useState} from 'react'
import Card from './Card'
import Input from './Input';

function Foreground() {
  const ref = useRef(null);
  const [Data, setData] = useState([])
  const handleDataChange = (newState) => {
    setData(newState);
  }
  const handleDeletedTask = (taskToDelete) => {
    const updatedData = Data.filter((task) => task.Task !== taskToDelete?.Task);
    setData(updatedData);
  };
  
  return (
    <div className='fixed z-[3] p-8 w-full h-screen'>
      <Input onDataChange = {handleDataChange}/>
      <div ref = {ref} className='fixed z-[3] w-full h-screen top-[16rem] p-3 gap-2 flex flex-wrap'>
      {
      Data.map((task,id)=>(
        <Card key={id} data={task} reference = {ref} onDelete = {()=>handleDeletedTask(task)}/>
      ))}
      </div>
    </div>
  )
}

export default Foreground
