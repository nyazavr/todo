import React from 'react';

import TaskFilter from './TasksFilter';

export default class Footer extends React.Component {
  render() {
    const { onSetFilter, doneLength, deletedItems } = this.props;
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
}
