import React,{useRef, useState} from 'react'
import Card from './Card'
import Input from './Input';

function Foreground() {

  const ref = useRef(null);
  const [Data, setData] = useState([])
  const [TaskLeft, setTaskLeft] = useState(Data.length)

  const handleDataChange = (Task) => {
    setData([...Data,{Task}]);
    setTaskLeft(TaskLeft+1)
  }

  const handleDeletedTask = (taskToDelete) => {
    const updatedData = Data.filter((task) => task.Task !== taskToDelete?.Task);
    setData(updatedData);
    setTaskLeft(TaskLeft-1)
  };

  const handleChange = (change) =>{
    setTaskLeft(TaskLeft+change)
  }
  return (
    <div className='fixed z-[3] p-8 w-full h-screen'>
      <div className='flex justify-center items-center'>
      <Input onDataChange = {handleDataChange} />
      {Data.length>0 ? <div className='relative top-[9rem] ml-4 text-3xl tracking-tight font-semibold text-zinc-200'>{Data.length - TaskLeft}/{Data.length} left</div> : 
      <div className='relative top-[9rem] ml-4 text-3xl tracking-tight font-semibold text-zinc-200'>Start your day!</div>
      }
      </div>
      <div ref = {ref} className='fixed z-[3] w-full h-screen top-[16rem] p-3 gap-2 flex flex-wrap'>
      {
      Data.map((task,id)=>(
        <Card key={id} data={task} reference = {ref} onDelete = {()=>handleDeletedTask(task)} onStatusChange = {handleChange}/>
      ))}
      </div>
    </div>
  )
}

export default Foreground
