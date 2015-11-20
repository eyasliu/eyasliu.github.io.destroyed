import List from '../list';

export default class APPModule extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="blogModule">
        {this.props.children || <List />}
      </div>
    );
  }
}