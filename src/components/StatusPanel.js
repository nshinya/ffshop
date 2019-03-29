import React from 'react';
import './StatusPanel.css';

export default function StatusPanel(props) {
  return (
    <div className="container">
      <h3>手持ちアイテム</h3>
      {
        props.items.length === 0 ?
          null
          :
          <div className="flex-container">
            {
              props.items.map((value) => <div className="item" key={value.id}>{value.name}</div>)
            }
          </div>
      }
    </div>
  );
}
