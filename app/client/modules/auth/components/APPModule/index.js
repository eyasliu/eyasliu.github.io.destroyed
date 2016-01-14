import Login from '../Login';

export default class APPModule extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="authModule">
        {this.props.children || <Login />}
      </div>
    );
  }
}