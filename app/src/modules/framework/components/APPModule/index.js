import Navbar from '../navbar';
import Footer from '../Footer';

export default class APPModule extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="module-container">
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
      );
  }
}
