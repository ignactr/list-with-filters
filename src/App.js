import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function List(props) {
  const people= props.people;
  const filtered = people.filter(person =>{
    return person.sex === props.filter ;
  });
  return (
    <div className="text-center">
      { props.filter === "w" ?
        people.map(person => <p key={person.id} className='Person'>{person.name} {person.surname}</p>) :
        filtered.map(person => <p key={person.id} className='Person'>{person.name} {person.surname}</p>)
      }
    </div>
  );
}

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
    <div className="flex place-content-center">
      <div className="flex flex-col place-content-center">
        <form onSubmit={handleAdding}>
          <div className={validation === '' ? 'py-9 px-8 text-xl flex flex-col space-x-2 mb-3 mt-16 border-solid border-2 rounded-lg border-slate-900 bg-slate-50' : 'pt-9 pb-4 px-8 text-xl flex flex-col space-x-2 mb-3 mt-16 border-solid border-2 rounded-lg border-slate-900 bg-slate-50'}>
            <table className='text-center w-full'>
              <tbody>
                <tr>
                  <td>Imię</td><td><input value={name} onChange={event => setName(event.target.value)} type="text" className="border-solid border-2 rounded-lg border-slate-200 focus:border-slate-400 focus:bg-slate-100"/><br/></td>
                </tr>
                <tr>
                  <td>Nazwisko</td><td><input value={surname} onChange={event => setSurname(event.target.value)} type="text" className="border-solid border-2 rounded-lg border-slate-200 focus:border-slate-400 focus:bg-slate-100"/></td>
                </tr>
              </tbody>
            </table>
            <div className='w-full flex justify-center'>
              <div className='text-md mt-1.5'>Kobieta</div>
                <div className='mt-2'>
                  <div className="flex justify-center">
                    <div className="form-check form-switch">
                      <input onChange={toggle} className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-slate-900 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault56"/>
                    </div>
                  </div>
                </div>
              <div className='text-md mt-1.5'>Mężczyzna</div>
            </div>
            <p className='text-red-900 text-sm'>{validation}</p>
          </div>
          <div className='flex justify-center gap-2'>
            <button onClick={()=>props.setPage(1)} className="border-solid border-2 mt-2 bg-slate-900 text-slate-50 border-slate-900 rounded-lg text-xl hover:bg-slate-700 hover:border-slate-800 w-16 text-center py-1 ">Wróć</button>
            <input type="submit" className="border-solid border-2 mt-2 bg-slate-900 text-slate-50 border-slate-900 rounded-lg text-xl hover:bg-slate-700 hover:border-slate-800 w-16 text-center py-1 " value="Dodaj"/>
          </div>
        </form>
      </div>
    </div>
  )
}

function App() {
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
      <div className="flex place-content-center">
        <div className="flex flex-col place-content-center">
          <div className="flex space-x-2 mb-3 mt-16">
            <button onClick={() => setFilter('w')} disabled={filter === 'w' ? true : false} className="Button">Wszystko</button>
            <button onClick={() => setFilter('m')} disabled={filter === 'm' ? true : false} className="Button">Mężczyźni</button>
            <button onClick={() => setFilter('k')} disabled={filter === 'k' ? true : false} className="Button">Kobiety</button>
          </div>
          <List filter = {filter} people={people}/>
          <div className=' flex place-content-center'>
            <button onClick={()=>setPage(2)} className="border-solid border-2 mt-2 bg-slate-900 text-slate-50 border-slate-900 rounded-lg text-2xl hover:bg-slate-700 hover:border-slate-800 w-12 text-center py-1 ">+</button>
          </div>
        </div>
      </div>
    )
  }
  else{
    return (
      <Add add={add} setPage={setPage}/>
    )
  }
}

export default App;