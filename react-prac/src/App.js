import { useState } from "react";

function App() {
  // List of people in DB

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  // States
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  // Event for when a new person is added and using preventDefault on the addedPerson so that the page doesn't reload.
  const addPerson = (e) => {
    e.preventDefault();
    
    if (newName.trim() !== '') {
      // Check if the name or number is already in the list

      const nameExists = persons.some(person => person.name === newName);
      const numberExists = persons.some(person => person.number === newNumber);

      if (nameExists) {
        alert(`${newName} is already in the phonebook.`);

      } else if (numberExists) {
        alert(`${newNumber} is already in the phonebook.`);

      } else {
        setPersons([...persons, { name: newName, number: newNumber }]);
        setNewNumber('');
        setNewName('');
      }
    }
  };

  // input for name and changing the numebrs list for when the button is clicked to show all the people.
  // This is done by taking the setNewName state and showing its value and putting it in the newName for it to show in the Numbers section. 
  return (
    <div className="App">
      <h2>Phonebook</h2>
      <form>
        <div>
          filter: <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
        </div>
      </form>
      <div>
        <h2>Add New Person</h2>
        <form>
          <div>
            name: <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)}/>
          </div>
          <div>
            number: <input type="text" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
          </div>
          <div>
            <button type="submit" onClick={addPerson}>add</button>
          </div>
        </form>
      </div>

      <h2>Numbers</h2>
      {persons
        .filter(person =>
          person.name.toLowerCase().includes(filter.toLowerCase()) ||
          person.number.includes(filter)
        )
        .map((person) => (
           <p key={person.id}>{person.name}: {person.number}</p>
        ))
        }
    </div>
  );
}

export default App;
