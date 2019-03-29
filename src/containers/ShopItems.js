import { connect } from 'react-redux';
import { buyItem } from '../actions';
import ShopItems from '../components/ShopItems';

function mapStateToProps(state) {
  return {
    items: state.shop.items,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    buyItem(item) {
      dispatch(buyItem(item));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopItems);
