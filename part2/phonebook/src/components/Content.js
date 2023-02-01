const Content = ( {persons, filter} ) => persons.filter(person => person.name.toLowerCase().includes(filter)).map(person => <p>{person.name} {person.number}</p>)

export default Content