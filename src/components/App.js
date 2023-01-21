import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Helmet} from "react-helmet";
import sun from "../images/sun.png";
import moon from "../images/moon.png"
import Add from './Add';
import List from './List';

function App() {
  const [mode, setMode] = useState(false);
  const [filter, setFilter] = useState('w');
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState([
    {id: uuidv4(), name: "Bubi", surname:"Bałysz", sex:"m"},
    {id: uuidv4(), name: "Maria", surname:"Gitara", sex:"k"},
    {id: uuidv4(), name: "Kondron", surname:"Kiewitz", sex:"m"},
    {id: uuidv4(), name: "Hania", surname:"Montania", sex:"k"},
    {id: uuidv4(), name: "Bania", surname:"Cyganna", sex:"k"},
    {id: uuidv4(), name: "Marcel", surname:"Afelierowietzei", sex:"m"}
  ]);
  const add = (person) => setPeople([...people, person]); 

  if(page === 1){
    return (
      <div>
        <Helmet>
          <title>People List</title>
          <html className={mode === true ? 'dark bg-gray-800' : ''} />
        </Helmet>
        <button onClick={()=> setMode(!mode)} className='hover:bg-slate-200 bg-slate-100 border-solid border-2 border-slate-100 hover:border-slate-200 rounded-md p-1 mt-2 ml-2 w-12 h-12 dark:bg-gray-600 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700'><img src={ mode === true ? sun : moon} alt="sun icon" /></button>
        <div className="flex place-content-center">
          <div className="flex flex-col place-content-center"> 
            <div className="flex space-x-2 mb-3 mt-16">
              <button onClick={() => setFilter('w')} disabled={filter === 'w' ? true : false} className="Button">Wszystko</button>
              <button onClick={() => setFilter('m')} disabled={filter === 'm' ? true : false} className="Button">Mężczyźni</button>
              <button onClick={() => setFilter('k')} disabled={filter === 'k' ? true : false} className="Button">Kobiety</button>
            </div>
            <List filter = {filter} people={people}/>
            <div className=' flex place-content-center'>
              <button onClick={()=>setPage(2)} className="border-solid border-2 mt-2 bg-slate-900 text-slate-50 border-slate-900 rounded-lg text-2xl hover:bg-slate-700 hover:border-slate-800 w-12 text-center py-1 dark:bg-gray-600 dark:hover:bg-gray-700">+</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else{
    return (
      <Add add={add} setPage={setPage} mode={mode} setMode={()=>setMode(!mode)}/>
    )
  }
}

export default App;