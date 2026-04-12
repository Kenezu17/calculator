import React from 'react'
import {useState} from 'react'

function App() {
const [input, setInput] =useState('')


  const buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+'
  ]
  


  return (
  <div className='bg-black h-screen flex justify-center items-center'> 
   <div className='h-[500px] w-[300px] flex  flex-col justify-center items-center bg-stone-100 rounded-4xl'>
    <label className=' text-md text-stone-600 pt-4'>Calculator</label>
   <div className='grid grid-cols-4 w-full  px-4 gap-2'>
    {buttons.map((btn)=>(
      <button className='rounded-full bg-stone-800 text-white ' key={btn} >{btn}</button>
    ))}
   </div>

   </div>
  </div>
  )
}

export default App