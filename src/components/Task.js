import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

function Task(props) {
  const [min, setMin] = useState(props.minut);
  const [sec, setSec] = useState(props.second);
  const [countTime, setCountTime] = useState(Number(props.second) + Number(props.minut * 60));
  const [pauseChec, setPauseChec] = useState(0);
  const [editing, setEditing] = useState(false);
  const [label, setLabel] = useState('');
  const textInput = React.createRef();

  useEffect(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
    let newCountTime = countTime - 1;
    if (pauseChec && newCountTime) {
      setTimeout(() => {
        setMin(parseInt(newCountTime / 60));
        setSec(newCountTime % 60);
        setCountTime(newCountTime);
      }, 1000);
    }
  });

  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    label.trim() ? props.onItemEdit(label, props.id) : null;
    setEditing(false);
    setLabel('');
  };

  const onClickEdit = () => {
    setEditing(!editing);
  };

  const handleKeyDown = (event) => {
    console.log('User pressed: ', event.key);
    event.key == 'Escape' ? setEditing(false) : null;
  };

  const { description, createdDate, id, onDeleted, onClickLabel, completed, visible } = props;

  return visible ? (
    <li className={classNames({ completed: completed ? true : false }, { editing: editing ? true : false })} key={id}>
      <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={completed} onClick={onClickLabel} id={'id:' + id} />
        <label htmlFor={'id:' + id}>
          <span className="title">{description}</span>
          <span className="description">
            <button className="icon icon-play" onClick={() => setPauseChec(true)}></button>
            <button className="icon icon-pause" onClick={() => setPauseChec(false)}></button>
            {min}:{sec}
          </span>
          <span className="created description">{createdDate}</span>
        </label>
        <button className="icon icon-edit" onClick={onClickEdit}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
      {editing ? (
        <form onSubmit={onSubmit}>
          <input
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onBlur={() => {
              setEditing(false);
            }}
            onChange={onLabelChange}
            type="text"
            ref={textInput}
            className="edit"
            value={label}
          />
        </form>
      ) : (
        ''
      )}
    </li>
  ) : null;
}

export default Task;
