import React, {useState} from 'react';
import './css/App.css'

function App() {

  const [newItem, setNewItem]=useState("");
  const [items,setItems]=useState([]);

  function addItem(){
    if(!newItem){
      alert("bos buraxma");
      return;
    }


    const item = {
      id: Math.floor(Math.random()*1000),
      value: newItem
    }
    setItems(oldItems => [...oldItems,item])
    setNewItem("");
  }
  function deleteItem(id){
    const newArray =items.filter(item => item.id !== id);
    setItems(newArray);
  }
  return (
    <div className="App">
      <h1
      style={{
        color:'white',
        paddingBottom:'2rem',
        fontSize:'37px',

      }}
      >Todo list </h1>


    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      gap:'0.7rem'
    }}>
      <input
      className='inpt'
      type="text"
      placeholder='bir seyler yazin....'
      value={newItem}
      onChange={e=>setNewItem(e.target.value)}
      />

    <button className='btn1' onClick={()=>addItem()}>Add</button>
    </div>
    <ul className='ul'>
      {items.map(item =>{
        return(
          <li className='li' key={item.id}>{item.value}<button className='btn2' onClick={()=>deleteItem(item.id)}> X</button></li>
        )
      })}
    </ul>


    </div>
  );
}

export default App;
