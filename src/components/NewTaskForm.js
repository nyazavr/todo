import React from 'react';

export default class NewTaskForm extends React.Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdd(this.state.label);
    this.setState({ label: '' });
  };

  render() {
    return (
      <form className="new-element" onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.label}
        />
      </form>
    );
  }
}
