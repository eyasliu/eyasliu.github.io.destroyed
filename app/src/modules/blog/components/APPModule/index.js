export default class APPModule extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="blogModule">
        {this.props.children}
      </div>
    );
  }
}