import React from 'react';

export default class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      label: '',
    };
  }
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemEdit(this.state.label, this.props.id);
    this.setState({
      editing: false,
      label: '',
    });
  };
  onClickEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  render() {
    const { description, createdDate, id, onDeleted, onClickLabel, completed, visible } = this.props;
    let typeTasc = '';
    console.log(this.state.editing);
    completed ? (typeTasc = 'completed ') : (typeTasc = typeTasc.replace('completed ', ''));
    this.state.editing ? (typeTasc += 'editing') : typeTasc.replace('editing', '');
    return visible ? (
      <li className={typeTasc} key={id}>
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
            <input onChange={this.onLabelChange} type="text" className="edit" value={this.state.label} />
          </form>
        ) : (
          ''
        )}
      </li>
    ) : null;
  }
}
