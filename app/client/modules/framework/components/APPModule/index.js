import * as Actions from 'framework/actions/globals';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {connect} from 'react-redux';

@connect(
  state => state.globals,
  dispatch => bindActionCreators(Actions, dispatch)
)
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

export default APPModule;