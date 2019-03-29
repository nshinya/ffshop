import { connect } from 'react-redux';
import FFShop from '../components/FFShop';

function mapStateToProps(state) {
  return {
    selectedMenu: state.ui.selectedMenu,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FFShop);
