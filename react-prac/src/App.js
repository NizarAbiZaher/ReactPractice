// App.js
import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);

  const addPerson = (newName, newNumber) => {
    if (newName.trim() !== '') {
      const nameExists = persons.some(person => person.name === newName);
      const numberExists = persons.some(person => person.number === newNumber);

      if (nameExists) {
        alert(`${newName} is already in the phonebook.`);
      } else if (numberExists) {
        alert(`${newNumber} is already in the phonebook.`);
      } else {
        setPersons([...persons, { name: newName, number: newNumber }]);
      }
    }
  };

  useEffect(() => {
    console.log('effect')
  
    const eventHandler = response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    }
  
    const promise = axios.get('http://localhost:3001/persons')
    promise.then(eventHandler)
  }, [])

  const [filter, setFilter] = useState('');

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />

      <PersonForm addPerson={addPerson} />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  );
}

export default App;
