import style from './style.scss';
import Item from './Item';

export default class List extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
<div>
  <div className="list-group">
    <Item></Item>
    <Item></Item>
    <Item></Item>
    <Item></Item>
    <Item></Item>
    <Item></Item>
    <Item></Item>
    <Item></Item>
    <Item></Item>
    <Item></Item>
  </div>
</div>
    )
  }
}
