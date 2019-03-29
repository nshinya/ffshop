import React from 'react';
import './FFWindow.css';

export default function FFWindow(props) {
  const style = {
    ...props.style,
    textAlign: (props.textalign || "left"),
    width: (props.width || "100%"),
  }
  return (
    <div className="ffwindow" style={style}>
      {props.children}
    </div>
  );
}
