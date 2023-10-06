import React from 'react';

import NewTaskForm from './NewTaskForm';

function Header(props) {
  const { onItemAdd } = props;
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm onItemAdd={onItemAdd} />
    </header>
  );
}
export default Header;
