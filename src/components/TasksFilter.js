import React from 'react';

export default class TaskFilter extends React.Component {
  onClickFilter = (e) => {
    console.log(e.currentTarget);

    e.currentTarget.childNodes.forEach((el) => {
      el.firstChild.className = '';
      return el;
    });
    e.target.className = 'selected';
    this.props.onSetFilter(e.target.textContent);
  };

  render() {
    return (
      <ul className="filters" onClick={this.onClickFilter}>
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    );
  }
}
