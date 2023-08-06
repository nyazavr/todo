import React from 'react';

import NewTaskForm from './NewTaskForm';

export default class Header extends React.Component {
  render() {
    const { onItemAdd } = this.props;
    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onItemAdd={onItemAdd} />
      </header>
    );
  }
}
