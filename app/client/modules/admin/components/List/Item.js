import style from './item.scss';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    data: {}
  }

  render() {
    const item = this.props.data;
    return (
<div className="list-group-item">
  <a href="#" className="list-group-item-heading">{item.title}</a>
  <div className={cx(style.action, 'btn-group')}>
    <a href="#/admin/edit" className={cx(style.view, 'btn', 'btn-xs', 'btn-info')}>
      <i className="fa fa-eye"></i>
    </a>
    <a href={"#/admin/edit/" + item.ID} className={cx(style.edit, 'btn', 'btn-xs', 'btn-primary')}>
      <i className="fa fa-edit"></i>
    </a>
    <a href="#/admin/edit" className={cx(style.delete, 'btn', 'btn-xs', 'btn-danger')}>
      <i className="fa fa-trash"></i>
    </a>
  </div>
  <p className="list-group-item-text" dangerouslySetInnerHTML={{__html: util.cutStr(item.content, 100)}}></p>
</div>
    );
  }
}
