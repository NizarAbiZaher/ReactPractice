import { useState } from "react";

function App() {
  // States
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  // Event for when a new person is added and using preventDefault on the addedPerson so that the page doesn't reload.
  const addPerson = (e) => {
    e.preventDefault();
    
    if (newName.trim() !== '') {
      // Check if the name is already in the list
      const nameExists = persons.some(person => person.name === newName);
      
      if (nameExists) {
        alert(`${newName} is already in the phonebook.`);
      } else {
        setPersons([...persons, { name: newName }]);
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
          name: <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => (
        <p key={i}>{person.name}</p>
      ))}
    </div>
  );
}

export default App;
