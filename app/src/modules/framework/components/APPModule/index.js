import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from 'framework/actions/globals';
import Navbar from '../Navbar';
import Footer from '../Footer';

class APPModule extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchGlobals();
  }

  render() {
    console.log(this.props);
    return (
      <div className="module-container">
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
      );
  }
}
function mapActionToProps(state) {
  return state.globals;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapActionToProps, mapDispatchToProps)(APPModule);
