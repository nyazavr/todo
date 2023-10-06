import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';

import TaskList from './components/TaskList';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  let maxid = 100;
  const [itemsData, setItemsData] = useState([
    {
      description: 'Completed task',
      createdDate: new Date(2023, 6, 2),
      id: 0,
      completed: true,
      visible: true,
      minut: 1,
      second: 5,
    },
    {
      description: 'Editing task',
      createdDate: new Date(2023, 6, 2),
      id: 1,
      completed: false,
      visible: true,
      minut: 1,
      second: 5,
    },
    {
      description: 'Active task',
      createdDate: new Date(2023, 6, 2),
      id: 2,
      completed: false,
      visible: true,
      minut: 1,
      second: 5,
    },
  ]);

  const deletedItemsCompleted = () => {
    console.log(itemsData);
    for (let item in this.state.itemsData) {
      console.log(item);
      if (this.state.itemsData[item].completed) {
        this.deletedItem(this.state.itemsData[item].id);
      }
    }
  };
  const deletedItem = (id) => {
    let newArr = itemsData.slice();
    let idx = newArr.findIndex((e) => {
      return e.id === id;
    });
    newArr.splice(idx, 1);
    setItemsData(newArr);
  };
  const createItem = (text, min, sec) => {
    return {
      description: text,
      createdDate: new Date(),
      id: maxid++,
      completed: false,
      visible: true,
      minut: min,
      second: sec,
    };
  };
  const addItem = (text, min, sec) => {
    let newArr = itemsData.slice();
    const newItem = createItem(text, min, sec);
    newArr.push(newItem);
    setItemsData(newArr);
  };
  const clickLabel = (id) => {
    let newArr = itemsData.slice();
    let idx = newArr.findIndex((e) => {
      return e.id === id;
    });
    newArr[idx].completed = !newArr[idx].completed;
    setItemsData(newArr);
  };
  const setFilter = (e) => {
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
    setItemsData(newArr);
  };
  const itemEdit = (text, id) => {
    let newArr = itemsData.slice();
    let idx = newArr.findIndex((e) => {
      return e.id === id;
    });
    newArr[idx].description = text;
    setItemsData(newArr);
  };
  console.log(itemsData);
  const doneCount = itemsData.filter((el) => !el.completed).length;
  return (
    <section className="todoapp">
      <Header onItemAdd={addItem} />
      <section className="main">
        <TaskList tasks={itemsData} onDeleted={deletedItem} onClickLabel={clickLabel} onItemEdit={itemEdit} />
        <Footer doneLength={doneCount} onSetFilter={setFilter} deletedItems={deletedItemsCompleted} />
      </section>
    </section>
  );
}
const root = createRoot(document.getElementById('root'));
root.render(<App />);
