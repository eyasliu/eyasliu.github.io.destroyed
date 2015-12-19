import APPModule from './components/APPModule';

export default class Admin extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="admin">
        <APPModule>{this.props.children}</APPModule>
      </div>
    );
  }
}
