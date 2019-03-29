import { connect } from 'react-redux';
import { selectMenu } from '../actions';
import ShopHeader from '../components/ShopHeader';

function mapStateToProps(state) {
  return {
    shopname: state.shop.name,
    message: state.shop.message,
    isBuying: state.shop.isBuying,
    gils: state.guest.gils,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectMenu(menu) {
      dispatch(selectMenu(menu));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopHeader);
