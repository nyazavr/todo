import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Task from './Task';

function TaskList(props) {
  const { tasks, onDeleted, onClickLabel, onItemEdit } = props;

  let elements = tasks.map((e) => {
    const { id, createdDate, ...taskProp } = e;
    return (
      <Task
        {...taskProp}
        createdDate={formatDistanceToNow(createdDate, { includeSeconds: true })}
        id={id}
        key={id}
        onDeleted={() => onDeleted(id)}
        onClickLabel={() => onClickLabel(id)}
        onItemEdit={onItemEdit}
      />
    );
  });
  return <ul className="todo-list">{elements}</ul>;
}
export default TaskList;
