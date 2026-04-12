import React from 'react'
import {useState} from 'react'

function App() {
const [input, setInput] =useState('')


  const buttons = [
    'C','Del','%',
    '/','7','8','9',
    'x','4','5','6',
    '-','1','2','3',
    '+','0','.','='
  ]
  


  return (
  <div className='bg-black h-screen flex justify-center items-center pt-10'> 
   <div className='h-[500px] w-[300px] flex  flex-col justify-center items-center bg-stone-100 rounded-4xl'>
    <label className=' text-md text-stone-600 pt-4 pb-2'>Calculator</label>

    <div className=' relative rounded-3xl  w-70 pt-15 px-1.5 bg-slate-500 h-200  items-center '>
      <p className='flex text-white justify-end items-end pr-3'>Value  </p>
      <span className='flex text-sm justify-end pr-3 pt-2 text-green-300   '>Total</span>
    </div>


   <div className='mt-auto grid grid-cols-4 w-full py-5 px-4 gap-2'>
    {buttons.map((btn, index)=>(
      <button className={`rounded-full text-white h-12 backdrop-blur-lg
        ${btn === 'C' ? 'bg-red-500': ''}
        ${btn === '='? 'bg-green-600 w-30 text-2xl justify-center': ''}
        ${btn === 'Del'? 'bg-yellow-500': ''}
        ${btn === '.'? 'bg-stone-500': ''}
        ${['x','/','+','-', '%'].includes(btn)? 'bg-stone-500': ''}
        ${['0','1','2','3','4','5','6','7','8','9'].includes(btn)? 'bg-stone-800':''}
       `} key={index} >{btn}</button>
    ))}
   </div>

   </div>
  </div>
  )
}

export default App