import React from 'react';

export default class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      min: '',
      sec: '',
    };
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };
  onMinutChange = (e) => {
    this.setState({
      min: e.target.value,
    });
  };
  onSecChange = (e) => {
    this.setState({
      sec: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const re = /^[0-9\b]+$/;
    console.log(re.test(this.state.min.trim()));
    if (this.state.label.trim() && re.test(this.state.min.trim()) && re.test(this.state.sec.trim())) {
      this.props.onItemAdd(this.state.label, this.state.min, this.state.sec);
    }

    this.setState({
      label: '',
      min: '',
      sec: '',
    });
  };

  render() {
    return (
      <form className="new-element new-todo-form" onSubmit={this.onSubmit}>
        <input
          className="new-todo new-element__new-todo"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.label}
        />
        <input
          onChange={this.onMinutChange}
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus
          value={this.state.min}
        />
        <input
          onChange={this.onSecChange}
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          value={this.state.sec}
        />
        <button type="submit" />
      </form>
    );
  }
}
