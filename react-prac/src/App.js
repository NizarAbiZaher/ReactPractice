// App.js
import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

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
