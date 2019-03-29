import React from 'react';
import FFWindow from './FFWindow';
import CursorList from './CursorList';
import './ShopItems.css';

export default function ShopItems(props) {
  const { items, buyItem } = props;

  function typeChar(type) {
    switch (type) {
      case "black":
        return "●";
      case "white":
        return "〇";
      default:
        return "";
    }
  }
  return (
    <FFWindow width="80%">
      <CursorList>
        {
          items.map((value) => {
            return (<div key={value.id} style={{ "display": "flex" }}>
              <div onClick={() => buyItem(value)}>
                {typeChar(value.type)}
                {value.name}
              </div>
              <div style={{ marginLeft: "auto", marginRight: "10%" }}>{value.price}</div>
            </div>
            )
          })
        }
      </CursorList>
    </FFWindow >
  )
}
