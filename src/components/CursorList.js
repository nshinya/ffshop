import React from 'react';
import './CursorList.css';

export default function CursorList(props) {
  return (
    <ul className={`CursorList ${props.horizontal ? "horizontal" : "vertical"}`}>
      {
        props.children.map((value, index) =>
          <li
            key={index}
            className={value.length !== 0 ? "selectable" : ""}
          >
            {value}
          </li>
        )
      }
    </ul>
  );
}
