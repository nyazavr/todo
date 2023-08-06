import { createRoot } from 'react-dom/client';
import React from 'react';

import TaskList from './components/TaskList';
import Footer from './components/Footer';
import Header from './components/Header';

export default class App extends React.Component {
  maxid = 100;

  state = {
    itemsData: [
      { description: 'Completed task', createdDate: new Date(2023, 6, 2), id: 0, completed: true, visible: true },
      { description: 'Editing task', createdDate: new Date(2023, 6, 2), id: 1, completed: false, visible: true },
      { description: 'Active task', createdDate: new Date(2023, 6, 2), id: 2, completed: false, visible: true },
    ],
    filterStatus: 'all',
  };

  deletedItemsCompleted = () => {
    console.log(this.state.itemsData);
    for (let item in this.state.itemsData) {
      console.log(item);
      if (this.state.itemsData[item].completed) {
        this.deletedItem(this.state.itemsData[item].id);
      }
    }
  };

  deletedItem = (id) => {
    this.setState(({ itemsData }) => {
      let idx = itemsData.findIndex((e) => {
        return e.id === id;
      });
      let newArr = itemsData.slice();
      newArr.splice(idx, 1);
      return {
        itemsData: newArr,
      };
    });
  };

  createItem = (text) => {
    return {
      description: text,
      createdDate: new Date(),
      id: this.maxid++,
      completed: false,
      visible: true,
    };
  };

  addItem = (text) => {
    const newItem = this.createItem(text);
    this.setState(({ itemsData }) => {
      let newArr = itemsData.slice();
      newArr.push(newItem);
      return {
        itemsData: newArr,
      };
    });
  };

  clickLabel = (id) => {
    this.setState(({ itemsData }) => {
      let newArr = itemsData.slice();
      let idx = newArr.findIndex((e) => {
        return e.id === id;
      });
      newArr[idx].completed = !newArr[idx].completed;
      return {
        itemsData: newArr,
      };
    });
  };

  setFilter = (e) => {
    this.setState(({ itemsData }) => {
      let newArr = itemsData.slice();
      if (e == 'All') {
        newArr.map((el) => {
          el.visible = true;
          return el;
        });
      } else if (e == 'Active') {
        newArr.map((el) => {
          el.completed ? (el.visible = false) : (el.visible = true);
          return el;
        });
      } else if (e == 'Completed') {
        newArr.map((el) => {
          el.completed ? (el.visible = true) : (el.visible = false);
          return el;
        });
      }
      return {
        itemsData: newArr,
      };
    });
  };

  itemEdit = (text, id) => {
    this.setState(({ itemsData }) => {
      let newArr = itemsData.slice();
      let idx = newArr.findIndex((e) => {
        return e.id === id;
      });
      newArr[idx].description = text;
      return {
        itemsData: newArr,
      };
    });
  };

  render() {
    const { itemsData } = this.state;
    const doneCount = itemsData.filter((el) => !el.completed).length;
    return (
      <section className="todoapp">
        <Header onItemAdd={this.addItem} />
        <section className="main">
          <TaskList
            tasks={itemsData}
            onDeleted={this.deletedItem}
            onClickLabel={this.clickLabel}
            onToggleImportant={this.ToggleDone}
            onItemEdit={this.itemEdit}
          />
          <Footer doneLength={doneCount} onSetFilter={this.setFilter} deletedItems={this.deletedItemsCompleted} />
        </section>
      </section>
    );
  }
}
const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(<App />);
