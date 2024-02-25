import {useState} from 'react'
import './App.css';

function App() {
  let [color,change]=useState('olive')

  function changer(color){
    change(color)
    console.log(color);
  }
  return (
    <>
    <div className="container"
    style={{backgroundColor:color}}
    >
      <div className="buttons">
        <button onClick={()=>changer('red')}>Red</button>
        <button onClick={()=>changer('blue')}>Blue</button>
        <button onClick={()=>changer('green')}>Green</button>
        <button onClick={change('yellow')}>Yellow</button>
      </div>
    </div>
    </>
  );
}

export default App;
