import React from 'react';

export default function Filter(props) {
  return (
    <div>
      Sort by:{' '}
      <select onChange={props.handleChange}>
        <option value="name">name</option>
        <option value="weight">weight</option>
      </select>
      <br />
      Greased Only!: <input type="checkbox" onChange={props.handleCheck} />
    </div>
  );
}
