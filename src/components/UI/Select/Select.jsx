import React from 'react';
import classes from './Select.module.css';

function Select(props) {
  const htmlFor = `${props.labe}-${Math.random}`;

  return (
    <div className={classes.Select}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select id={htmlFor} value={props.value} onChange={props.onChange}>
        {props.options.map((option, index) => {
          return (
            <option value={option.value} key={option.value + index}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
