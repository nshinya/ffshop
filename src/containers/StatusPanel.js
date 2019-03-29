import { connect } from 'react-redux';
import StatusPanel from '../components/StatusPanel';

function mapStateToProps(state) {
  return {
    items: state.guest.items,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusPanel);
