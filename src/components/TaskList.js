import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Task from './Task';

export default class TaskList extends React.Component {
  render() {
    const { onDeleted, onClickLabel, onItemEdit } = this.props;
    const tasks = this.props.tasks;

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
}
