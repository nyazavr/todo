import React from 'react';
import classNames from 'classnames';

export default class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      label: '',
    };
    this.textInput = React.createRef();
  }

  focout = () => {
    this.setState({
      editing: false,
    });
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.state.label.trim() ? this.props.onItemEdit(this.state.label, this.props.id) : null;
    this.setState({
      editing: false,
      label: '',
    });
  };
  onClickEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  componentDidUpdate() {
    if (this.textInput.current) {
      this.textInput.current.focus();
    }
  }

  render() {
    const { description, createdDate, id, onDeleted, onClickLabel, completed, visible } = this.props;
    console.log(this.state.editing);
    return visible ? (
      <li
        className={classNames({ completed: completed ? true : false }, { editing: this.state.editing ? true : false })}
        key={id}
      >
        <div className="view">
          <input className="toggle" type="checkbox" defaultChecked={completed} onClick={onClickLabel} id={'id:' + id} />
          <label htmlFor={'id:' + id}>
            <span className="description">{description}</span>
            <span className="created">{createdDate}</span>
          </label>
          <button className="icon icon-edit" onClick={this.onClickEdit}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {this.state.editing ? (
          <form onSubmit={this.onSubmit}>
            <input
              onBlur={this.onSubmit}
              onChange={this.onLabelChange}
              type="text"
              ref={this.textInput}
              className="edit"
              value={this.state.label}
            />
          </form>
        ) : (
          ''
        )}
      </li>
    ) : null;
  }
}
