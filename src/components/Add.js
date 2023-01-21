import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Helmet} from "react-helmet";
import sun from "../images/sun.png";
import moon from "../images/moon.png"
//function Add shows a form with three inputs and uses add function provided by parent component (App.js) 
function Add(props){
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [sex, setSex] = useState('k');
    const [validation, setValidation] = useState('');
  
    const toggle = () =>{
      if(sex === 'k')
        setSex('m');
      else
        setSex('k');
    }
    const handleAdding = (event) =>{
      event.preventDefault();
      if(name !== '' && surname !== ''){
        let person = {};
        person.id = uuidv4();
        person.name = name;
        person.surname = surname;
        person.sex = sex;
        props.add(person);
        props.setPage(1);
      }
      else{
        setValidation('Pola nie mogą być puste')
      }
    }
  
    return (
      <div>
        <Helmet>
          <title>People List</title>
          <html className={props.mode === true ? 'dark bg-gray-800' : ''} />
        </Helmet>
        <button onClick={()=> props.setMode(!props.mode)} className='hover:bg-slate-200 bg-slate-100 border-solid border-2 border-slate-100 hover:border-slate-200 rounded-md p-1 mt-2 ml-2 dark:bg-gray-600 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700'><img className='w-11 h-11' src={ props.mode === true ? sun : moon} alt="sun icon" /></button>
      <div className="flex place-content-center">
        <div className="flex flex-col place-content-center">
          <form onSubmit={handleAdding}>
            <div className={validation === '' ? 'py-9 px-8 text-xl flex flex-col space-x-2 mb-3 mt-16 border-solid border-2 rounded-lg border-slate-900 bg-slate-50 dark:bg-zinc-500 dark:text-slate-100' : 'pt-9 pb-4 px-8 text-xl flex flex-col space-x-2 mb-3 mt-16 border-solid border-2 rounded-lg border-slate-900 bg-slate-50'}>
              <table className='text-center w-full'>
                <tbody>
                  <tr>
                    <td>Imię</td><td><input value={name} onChange={event => setName(event.target.value)} type="text" className="border-solid border-2 rounded-lg border-slate-200 focus:border-slate-400 focus:bg-slate-100 dark:bg-zinc-600 dark:border-zinc-600"/><br/></td>
                  </tr>
                  <tr>
                    <td>Nazwisko</td><td><input value={surname} onChange={event => setSurname(event.target.value)} type="text" className="border-solid border-2 rounded-lg border-slate-200 focus:border-slate-400 focus:bg-slate-100 dark:bg-zinc-600 dark:border-zinc-600"/></td>
                  </tr>
                </tbody>
              </table>
              <div className='w-full flex justify-center'>
                <div className='text-md mt-1.5'>Kobieta</div>
                  <div className='mt-2'>
                    <div className="flex justify-center">
                      <div className="form-check form-switch">
                        <input onChange={toggle} className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-zinc-600 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault56"/>
                      </div>
                    </div>
                  </div>
                <div className='text-md mt-1.5'>Mężczyzna</div>
              </div>
              <p className='text-red-900 text-sm'>{validation}</p>
            </div>
            <div className='flex justify-center gap-2'>
              <button onClick={()=>props.setPage(1)} className="border-solid border-2 mt-2 bg-slate-900 text-slate-50 border-slate-900 rounded-lg text-xl hover:bg-slate-700 hover:border-slate-800 w-16 text-center py-1 dark:bg-gray-600 dark:hover:bg-gray-700 dark:disabled:bg-gray-700 dark:border-gray-600">Wróć</button>
              <input type="submit" className="border-solid border-2 mt-2 bg-slate-900 text-slate-50 border-slate-900 rounded-lg text-xl hover:bg-slate-700 hover:border-slate-800 w-16 text-center py-1 dark:bg-gray-600 dark:hover:bg-gray-700 dark:disabled:bg-gray-700 dark:border-gray-600" value="Dodaj"/>
            </div>
          </form>
        </div>
      </div>
      </div>
    )
}

export default Add;