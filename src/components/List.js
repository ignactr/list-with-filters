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

export default List;