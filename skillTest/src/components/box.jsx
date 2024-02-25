import React from 'react';
import {useState} from 'react'
const Box=({value,a})=>{
  const[text,setText]=useState('')
    return(
        <div className='w-[60%] h-10 bg-green-200 m-2 flex justify-between items-center'>
        <div className='m-2'>
          <h1>Here is your question {a} </h1>
          <p>
            {text}
          </p>
        </div>
        <div>
          <button className='px-5 rounded-lg shadow-lg bg-violet-600'
          onClick={()=>setText(value)}>Click</button>
        </div>
      </div>
    )
}
export default Box