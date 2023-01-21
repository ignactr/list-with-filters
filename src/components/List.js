//function List maps People array of objects into buttons with data of one person. If deleteMode is on, clicking the button will delete data of that person
function List(props) {
    const people= props.people;
    const filtered = people.filter(person =>{
      return person.sex === props.filter ;
    });
    return (
      <div className="text-center">
        { props.filter === "w" ?
          people.map(person => <><button onClick={()=>props.deleteFunc(person.id)} disabled={props.deleteMode === true ? false : true} key={person.id} className='Person'>{person.name} {person.surname}</button><br/></>) :
          filtered.map(person => <><button onClick={()=>props.deleteFunc(person.id)} disabled={props.deleteMode === true ? false : true} key={person.id} className='Person'>{person.name} {person.surname}</button><br/></>)
        }
      </div>
    );
}

export default List;