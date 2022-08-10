import { useState } from 'react';
import './App.css';

function App() {


const [todos,setTodos] = useState(['Evi temizle','markete git'])
const [style,setStyle] = useState('')

const submitInput = (e) =>{
  if (e.key ==='Enter') {
    setTodos([...todos,e.target.value])
  }
 
  
}

const checkedInput = (e) =>{
  if (e.target.checked === true) {
    setStyle('checked')
  }
  else
    setStyle('')
}



const sil = (e)=>{
  
  setTodos(todos.filter((item)=>
    todos.indexOf(item) !== parseInt(e.target.id) 
  ))

  
}
  return (
    <div className="App">
      <h1 className='başlık' >todos</h1>    
      <div className='todo'>
      <input  placeholder='Yapılacaklar'  onKeyPress={submitInput}/>
      <ul className='list'>
        {
          todos.map((item,index) =>
          <div className={style} id={index} key={index}>
            <label className="container">
              <input id={index} type="checkbox" onClick={checkedInput}/>
              <span className="checkmark"></span>
            </label>
            <li >{item}</li>
            <button id={index} className='btn-2' onClick={sil}>X</button>
          </div>
           )
        }
      </ul>
      <div className='footer'>
        <span>{todos.length} yapılacak kaldı</span>
        <button>hepsi</button>
        <button>aktif</button>
        <button>tamamlanmış</button>
        <button>Tamamlanmışları sil</button>
      </div>
      </div>
    </div>
  );
}

export default App;
