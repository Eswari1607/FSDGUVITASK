import { useState } from 'react';
import './App.css'
import Circle from './components/Circle';



{/*function App() {
const [count,setcount] = useState(0);

function handleAdd(){
  setcount(count+1)
}
function handleSubstrat(){
  setcount(count-1)
}
  return (<>
     {count>10 ? <div  className='error-bannner' style={{color:'black',backgroundColor:'blue'}}>Count exceeded 15</div> : null}
     <h1 id='count' style={{color:"black"}}>{count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubstrat}  disabled={count<1}>Subtract</button>
    </>
  )
}*/}


function App(){
  const data = [{button:"Add"},{button:"sub"},{button:"multip"}]
  return( <>
  {
  data.map((el,index)=> <Circle key={`${el.button}-${index}`}  label={el.button}/>)}
  }
  </>
  )
}

export default App
