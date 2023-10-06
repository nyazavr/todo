import React, { useState } from 'react';

function TaskFilter(props) {
  const [filters, setFilters] = useState([
    { id: 1, name: 'All', selected: true },
    { id: 2, name: 'Active', selected: false },
    { id: 3, name: 'Completed', selected: false },
  ]);

  const onClickFilter = (e) => {
    const newFilters = filters.slice();
    setFilters(
      newFilters.map((el) => {
        el.name == e.target.textContent ? (e.selected = true) : (e.selected = false);
        return el;
      })
    );
    props.onSetFilter(e.target.textContent);
  };

  const initFilter = (e) => {
    return (
      <li key={e.id} className={e.selected ? 'selected' : ''}>
        <button onClick={onClickFilter}>{e.name}</button>
      </li>
    );
  };
  const newFilters = filters.slice();
  return <ul className="filters">{newFilters.map((e) => initFilter(e))}</ul>;
}
export default TaskFilter;
