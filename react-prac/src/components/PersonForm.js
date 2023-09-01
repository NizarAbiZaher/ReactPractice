// PersonForm.js
import React, { useState } from 'react';

const PersonForm = ({ addPerson }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newName.trim() !== '' && newNumber.trim() !== '') {
      addPerson(newName, newNumber);
      setNewName('');
      setNewNumber('');
    }
  };

  return (
    <div>
      <h2>Add New Person</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input type="text" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
