import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Helmet} from "react-helmet";
import sun from "../images/sun.png";
import moon from "../images/moon.png";
import bin from "../images/bin.png";
import globe from "../images/globe.png";
import Add from './Add';
import List from './List';

//function App is the main component. It shows different pages depending on page const
function App() {
  const [mode, setMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [filter, setFilter] = useState('w');
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState('eng');
  const [people, setPeople] = useState([
    {id: uuidv4(), name: "Bubi", surname:"Bałysz", sex:"m"},
    {id: uuidv4(), name: "Maria", surname:"Gitara", sex:"k"},
    {id: uuidv4(), name: "Kondron", surname:"Kiewitz", sex:"m"},
    {id: uuidv4(), name: "Hania", surname:"Montania", sex:"k"},
    {id: uuidv4(), name: "Bania", surname:"Cyganna", sex:"k"},
    {id: uuidv4(), name: "Marcel", surname:"Żółwik", sex:"m"}
  ]);
  const changeLanguage = () =>{
    if(language === 'pl') 
      setLanguage('eng'); 
    else 
      setLanguage('pl');
  }
  const add = (person) => setPeople([...people, person]); 
  const deleteFunc = (id) => setPeople(people.filter(person => person.id !== id));
//page 1 is main list/page, page 2 is adding form
  if(page === 1){
    return (
      <div>
        <Helmet>
          <title>People List</title>
          <html className={mode === true ? 'dark bg-gray-800 m-0' : 'm-0'} />
        </Helmet>
        <button onClick={()=> setMode(!mode)} className='mt-2 hover:bg-slate-200 bg-slate-100 border-solid border-2 border-slate-100 hover:border-slate-200 rounded-md p-1 ml-2 dark:bg-gray-600 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 hover:shadow-lg hover:shadow-slate-900/50'><img className='w-11 h-11' src={ mode === true ? sun : moon} alt="sun icon" /></button>
        <button onClick={()=> setDeleteMode(!deleteMode)} className={deleteMode === false ? 'mt-2 hover:bg-slate-300 bg-slate-100 border-solid border-2 border-slate-100 hover:border-slate-300 rounded-md p-1 ml-2 w-14 h-14 dark:bg-gray-600 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 hover:shadow-lg hover:shadow-red-800/50' : 'delete mt-2 hover:bg-red-500 bg-red-600 border-solid border-2 border-red-600 hover:border-red-500 rounded-md p-1 ml-2 w-14 h-14 hover:shadow-lg hover:shadow-red-900/50'}><img src={bin} alt="sun icon" /></button>
        <button onClick={changeLanguage} className='mt-2 hover:bg-slate-200 bg-slate-100 border-solid border-2 border-slate-100 hover:border-slate-200 rounded-md p-1 ml-2 dark:bg-gray-600 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 hover:shadow-lg hover:shadow-slate-900/50'><img className='w-11 h-11' src={globe} alt="sun icon" /></button>
        <div className="flex place-content-center">
          <div className="flex flex-col place-content-center"> 
            <div className="flex space-x-2 mb-3 mt-16">
              <button onClick={() => setFilter('w')} disabled={filter === 'w' ? true : false} className="Button">{language === 'pl' ? 'Wszystko': 'Everyone'}</button>
              <button onClick={() => setFilter('m')} disabled={filter === 'm' ? true : false} className="Button">{language === 'pl' ? 'Mężczyźni': 'Males'}</button>
              <button onClick={() => setFilter('k')} disabled={filter === 'k' ? true : false} className="Button">{language === 'pl' ? 'Kobiety': 'Females'}</button>
            </div>
            <List filter = {filter} people={people} deleteMode={deleteMode} deleteFunc={deleteFunc}/>
            <div className='flex place-content-center'>
              <button onClick={deleteMode === false ? ()=>setPage(2) : ()=> setDeleteMode(!deleteMode)} className={deleteMode === true ?'Bottom-Button-1 delete' : 'Bottom-Button-2'}>{deleteMode === true ? 'x' : '+'}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else{
    return (
      //returning form for adding new data (People)
      <Add add={add} setPage={setPage} mode={mode} setMode={()=>setMode(!mode)} language={language} changeLanguage={changeLanguage}/>
    )
  }
}

export default App;