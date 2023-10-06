import React, { useState } from 'react';

function NewTaskForm(props) {
  const [{ label, min, sec }, setParam] = useState({ label: '', min: '', sec: '' });

  const onLabelChange = (e) => {
    setParam({
      label: e.target.value,
      min: min,
      sec: sec,
    });
  };
  const onMinutChange = (e) => {
    setParam({
      label: label,
      min: e.target.value,
      sec: sec,
    });
  };
  const onSecChange = (e) => {
    setParam({
      label: label,
      min: min,
      sec: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const re = /^[0-9\b]+$/;
    console.log(re.test(min.trim()));
    if (label.trim() && re.test(min.trim()) && re.test(sec.trim())) {
      props.onItemAdd(label, min, sec);
    }

    setParam({
      label: '',
      min: '',
      sec: '',
    });
  };
  return (
    <form className="new-element new-todo-form" onSubmit={onSubmit}>
      <input
        className="new-todo new-element__new-todo"
        onChange={onLabelChange}
        placeholder="What needs to be done?"
        autoFocus
        value={label}
      />
      <input onChange={onMinutChange} className="new-todo-form__timer" placeholder="Min" autoFocus value={min} />
      <input onChange={onSecChange} className="new-todo-form__timer" placeholder="Sec" autoFocus value={sec} />
      <button type="submit" />
    </form>
  );
}
export default NewTaskForm;
