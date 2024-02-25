import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/box'

function App() {
const [value, setvalue] = useState('')
  return (
    <div className=" bg-stone-500 w-full h-screen flex justify-center">
      <div className='w-[60%]'>
        
      <button className='bg-yellow-400 px-2' onClick={()=>setvalue('Hello this is a test')}> Expand </button>
      <Box value={value} a="name" />
      </div>
    </div>
    )
}

export default App
