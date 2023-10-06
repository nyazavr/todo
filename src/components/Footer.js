import React from 'react';

import TaskFilter from './TasksFilter';

function Footer(props) {
  const { onSetFilter, doneLength, deletedItems } = props;
  return (
    <footer className="footer">
      <span className="todo-count">{doneLength} items left</span>
      <TaskFilter onSetFilter={onSetFilter} />
      <button className="clear-completed" onClick={deletedItems}>
        Clear completed
      </button>
    </footer>
  );
}
export default Footer;
