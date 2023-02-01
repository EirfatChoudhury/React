import { useState } from 'react'
import Content from './components/Content'
import Filter from './components/Filter'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleChange = (setValue) => (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  const addNameNumber = (event) => {
    event.preventDefault()
    console.log("button clicked", event.target)

    if (persons.find(person => person.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    }

    const nameObject = {
      name: newName,
      number: newNumber
    }
  
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
    console.log(persons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h2>Filter</h2>
      filter: <Filter value={newFilter} handleChange={handleChange} set={setNewFilter}/>
      <h2>Add name and number</h2>
      <Form onSubmit={addNameNumber} value1={newName} value2={newNumber} handleChange={handleChange} set1={setNewName} set2={setNewNumber}/>
      <h2>Numbers</h2>
      <Content persons={persons} filter={newFilter}/>
    </div>
  )
}

export default App