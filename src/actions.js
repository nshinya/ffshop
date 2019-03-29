export const selectMenu = (menuName) => ({
  type: "SELECT_MENU",
  payload: {
    selectedMenu: menuName,
  }
})

export const buyItem = (item) => ({
  type: "BUY_ITEM",
  payload: {
    selectedItem: item,
  }
})
