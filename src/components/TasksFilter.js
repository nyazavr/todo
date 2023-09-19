import React from 'react';

export default class TaskFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: [
        { id: 1, name: 'All', selected: true },
        { id: 2, name: 'Active', selected: false },
        { id: 3, name: 'Completed', selected: false },
      ],
    };
  }

  onClickFilter = (e) => {
    const filters = this.state.filters.slice();
    this.setState({
      filters: filters.map((el) => {
        el.name == e.target.textContent ? (e.selected = true) : (e.selected = false);
        return el;
      }),
    });
    this.props.onSetFilter(e.target.textContent);
  };

  initFilter(e) {
    return (
      <li key={e.id} className={e.selected ? 'selected' : ''}>
        <button onClick={this.onClickFilter}>{e.name}</button>
      </li>
    );
  }

  render() {
    console.log(this.state.filters);
    const filters = this.state.filters.slice();
    const filtersEl = filters.map((e) => this.initFilter(e));
    return <ul className="filters">{filtersEl}</ul>;
  }
}
