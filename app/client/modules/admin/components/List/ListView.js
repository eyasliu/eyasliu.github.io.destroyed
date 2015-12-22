import style from './style.scss';
import Item from './Item';

export default class List extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div>
  <div className="list-group">
    {util.renderList(this.props.data, item => <Item key={'post-' + item.ID} data={item} />)}
  </div>
</div>
    );
  }
}
