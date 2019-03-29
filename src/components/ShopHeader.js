import React from 'react';
import FFWindow from './FFWindow';
import CursorList from './CursorList';

const style = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  }
}

export default function ShopHeader(props) {
  const { shopname, message, isBuying, gils, selectMenu } = props;

  function handleMenuClick(menu) {
    selectMenu(menu);
  }

  return (
    <div>
      <div style={style.container}>
        <FFWindow textalign="center" width="12%">{shopname}</FFWindow>
        <FFWindow style={{ width: "88%" }}>{message}</FFWindow>
      </div>
      <div style={style.container}>
        <FFWindow textalign="center" width="50%">
          <CursorList horizontal>
            <div onClick={() => handleMenuClick("buy")}>かう</div>
            {isBuying ? <div onClick={() => handleMenuClick("sell")}>うる</div> : <div></div>}
            <div onClick={() => handleMenuClick("exit")}>でる</div>
          </CursorList>
        </FFWindow>
        <FFWindow width="50%">
          てもち
          <span style={{ float: "right" }}>{gils} &nbsp; ギル</span>
        </FFWindow>
      </div>
    </div>
  );
}
