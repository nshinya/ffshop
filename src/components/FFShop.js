import React from 'react';
import ShopHeader from '../containers/ShopHeader';
import ShopItems from '../containers/ShopItems';
import StatusPanel from '../containers/StatusPanel';

export default function FFShop(props) {
  const { selectedMenu } = props;

  function buildItemView() {
    switch (selectedMenu) {
      case "buy":
        return <ShopItems />
      case "none":
      default:
        return null;
    }
  }

  return (
    <div>
      <ShopHeader />
      {buildItemView()}
      <StatusPanel />
    </div>
  );
}
