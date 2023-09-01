// Filter.js
import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <form>
      <div>
        filter: <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
    </form>
  );
};

export default Filter;
