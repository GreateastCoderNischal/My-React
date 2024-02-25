
import { useState } from 'react'
import Input from './components/input'
import useCurrency from './Hooks/useCurrency'

function App() {
  const [amount, setAmount] = useState(0)
  const [from,setfrom]=useState('usd')
  const [to,setto]=useState('npr')
  const [convertedAmount, setconvertedAmount] = useState(0)
  const currencyInfo=useCurrency(from)
  const options=Object.keys(currencyInfo);

  function converter(){
    console.log(amount)
    setconvertedAmount(currencyInfo[to]*amount)
  }
  return (
    <div className="w-full h-screen flex justify-center items-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=600` }}>
      <div className='p-2 bg-white/30 rounded-lg mx-auto'>
      <form onSubmit={event=>{
        event.preventDefault()
        converter()
      }}>
        <Input
        label={from}
        amount={amount}
        currencyOptions={options}
        onAmount={(amount)=>setAmount(amount)}
        onCurrency={(currency)=>setfrom(currency)}
        selectedCurrency={from}
        Function_='converter'
        />
        <Input 
        label={to}
        amount={convertedAmount}
        currencyOptions={options}
        onAmount={amount=>setAmount(amount)}
        onCurrency={(currency)=>setto(currency)}
        selectedCurrency={to}
        />
        <div className='w-full mt-2'>
          <button type='submit' className='w-full p-4 bg-indigo-600'>Convert</button>
        </div>
      </form>
    
      </div>
    </div>
  )
}
export default App