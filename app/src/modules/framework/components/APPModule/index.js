import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from 'framework/actions/globals';
import Navbar from '../Navbar';
import Footer from '../Footer';

class APPModule extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchGlobals();
  }

  render() {
    return (
      <div className="module-container">
        <Navbar data={this.props.navbar} />
        {this.props.children}
        <Footer data={this.props.info} />
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
