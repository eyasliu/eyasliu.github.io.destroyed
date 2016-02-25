import style from './style.scss';
import Item from './Item';

export default class List extends React.Component {
  constructor() {
    super();
  }

  render() {
    const list = this.props.data;
    return (
<div>
  <div className="list-group">
    {list.map( item => (
      <Item key={'post-' + item.id} data={item} />
    ))}
  </div>
</div>
    );
  }
}
