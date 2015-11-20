import APPModule from './components/APPModule';

export default class Example extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="blog">
        <APPModule>{this.props.children}</APPModule>
      </div>
    );
  }
}
