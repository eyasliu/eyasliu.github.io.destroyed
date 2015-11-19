import Navbar from '../navbar';

export default class APPModule extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="module-container">
        <Navbar />
        {this.props.children}
      </div>
      );
  }
}
