import APPModule from './components/APPModule';

export default class Auth extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="auth">
        <APPModule>{this.props.children}</APPModule>
      </div>
    );
  }
}
