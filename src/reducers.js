const initialState = {
  shop: {
    name: "まほうや",
    message: "「なにが　ほしいんだいっ！？」",
    isBuying: false,
    items: [
      {
        id: 0,
        type: "white",
        name: "ケアル",
        price: 500,
        level: 1,
      },
      {
        id: 100,
        type: "black",
        name: "ファイア",
        price: 500,
        level: 1,
      },
      {
        id: 101,
        type: "black",
        name: "ファイラ",
        price: 2500,
        level: 3,
      },
      {
        id: 102,
        type: "black",
        name: "ファイガ",
        price: 22500,
        level: 5,
      },
    ],
  },
  guest: {
    gils: 4000,
    items: [],
  },
  ui: {
    selectedMenu: "none", // none, buy, sell, exit
    disable: false,
  },

};

function ffShopReducer(state = initialState, action) {
  if (state.ui.disable) {
    return state;
  }

  switch (action.type) {
    case 'SELECT_MENU':
      return {
        ...state,
        ui: {
          ...state.ui,
          selectedMenu: action.payload.selectedMenu,
        },
      };
    case 'BUY_ITEM':
      if (state.guest.gils < action.payload.selectedItem.price) {
        return {
          ...state,
          shop: {
            ...state.shop,
            message: "「おかねがたりないよ」",
          },
        }
      } else {
        return {
          ...state,
          shop: {
            ...state.shop,
            message: "「まいど！」",
          },
          guest: {
            ...state.guest,
            gils: state.guest.gils - action.payload.selectedItem.price,
            items: state.guest.items.concat(action.payload.selectedItem),
          },
        }
      }
    default:
      return state;
  }
}

export default ffShopReducer;
