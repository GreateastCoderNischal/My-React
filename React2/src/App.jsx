import { useCallback, useState,useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [NumbersAllowed, setNumbersAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState('')
  const [buttonText, setbuttonText] = useState('Copy')

  const passwordRef=useRef(null)
  let PasswordGenerator = useCallback(() => {
    let pass = "";
    let txt = "";
    let sTring = 'abcdefghijklmnopqrstuvwxyz'
    let str = sTring.toUpperCase() + sTring;
    let number = '123456789'
    let char = '!@#$%^&*';
    if (NumbersAllowed) str += number
    if (charAllowed) str += char
    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setpassword(pass)
  })
  useEffect(() => {
    setbuttonText('copy');
    PasswordGenerator();
  }, [length, NumbersAllowed, charAllowed])

  return (
    <div className='w-full h-screen m-auto bg-slate-600 '>
      <div className='w-[45%] m-auto'>

        <h1 className='m-auto text-center text-teal roboto text-[25px] font-bold'> Password Generator </h1>
        <div className='flex shadow rounded-lg overflow-hidden'>
          <input type="text" 
            value={password}
            ref={passwordRef}
            className='p-2 w-full
                outline-none 
                ' placeholder='Password' 
                readOnly />
          <button className="bg-blue-500 px-3 py-0.5"
          onClick={()=>{
            window.navigator.clipboard.writeText(password)
            setbuttonText('Copied')
            passwordRef.current?.select()
          }}>
            {buttonText}
          </button>
        </div>
        <div className='flex items-center gap-6'>

          <div className="flex mt-[20px] cursor-pointer outline-none gap-x-3">
            <input type="range" min={6} value={length} onChange={(e) => setlength(e.target.value)} />
            <label className='roboto font-medium'>Length : {length}</label>
          </div>

          <div className="flex mt-[20px] cursor-pointer outline-none gap-x-3">
            <input type="checkbox" defaultChecked={NumbersAllowed}
              onChange={() => {


                setNumbersAllowed(e => !e)

              }

              }
            />
            <label className='roboto font-medium'>Numbers Allowed</label>
          </div>

          <div className="flex mt-[20px] cursor-pointer outline-none gap-x-3">
            <input type="checkbox" defaultChecked={charAllowed}
              onChange={() => {
                setcharAllowed(e => !e)
              }
              }
            />
            <label className='roboto font-medium'>Character Allowed</label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
