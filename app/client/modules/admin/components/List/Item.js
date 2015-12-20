import style from './item.scss';

export default class Item extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div className="list-group-item">
  <a href="#" className="list-group-item-heading">List group item heading</a>
  <div className={cx(style.action, 'btn-group')}>
    <a href="#/admin/edit" className={cx(style.view, 'btn', 'btn-xs', 'btn-info')}>
      <i className="fa fa-eye"></i>
    </a>
    <a href="#/admin/edit" className={cx(style.edit, 'btn', 'btn-xs', 'btn-primary')}>
      <i className="fa fa-edit"></i>
    </a>
    <a href="#/admin/edit" className={cx(style.delete, 'btn', 'btn-xs', 'btn-danger')}>
      <i className="fa fa-trash"></i>
    </a>
  </div>
  <p className="list-group-item-text">虽然不总是必须，但是某些时候你可能需要将某些 DOM 内容放到一个盒子里。对于这种情况，可以试试面板组件</p>
</div>
    );
  }
}
