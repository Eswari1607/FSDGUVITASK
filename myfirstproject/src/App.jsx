import { useState } from 'react';
import './App.css'




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


{/*function App(){
  const data = [{button:"Add"},{button:"sub"},{button:"multip"}]
  return( <>
  {
  data.map((el,index)=> <Circle key={`${el.button}-${index}`}  label={el.button}/>)}
  }
  </>
  )
}*/}

function App (){
  const data =[
    {Title: "Trial 1",
      Features: [{Task:"Line 1",isok:true},{Task:"Line 2",isok:false}, {Task:"Line 3",isok:true}]},
     { Title: "Trial 2",
      Features: [{Task:"Line A",isok:true},{Task:"Line B",isok:false}, {Task:"Line C",isok:true}]},
     { Title: "Trial 3",
      Features: [{Task:"Line X",isok:true},{Task:"Line Y",isok:false}, {Task:"Line Z",isok:true}]}
  ]
  return (
    <div>
      <input placeholder='Enter task here' onChange={() => {console.log('changing')

      }}/>
      <button>Save</button>
      {data.map((element,index)=>{
        return (
          <div key={index}> 
<h3>{element.Title}</h3>
<ul>
  {element.Features.map((item,index) => <li key={index} 
  style={{textDecoration:item.isok ? 'line-through':'none'}}> {item.Task}</li>)}
</ul>
          </div>
        )

      })}
    </div>
  )
}

export default App;
