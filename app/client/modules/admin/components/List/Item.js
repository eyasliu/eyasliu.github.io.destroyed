import style from './item.scss';
import * as actions from 'admin/actions/list';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

@connect(
  state => state,
  dispath => bindActionCreators(actions, dispath)
)
export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    data: {}
  }

  delPost(e) {
    this.props.destroy(this.props.data.id);
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
    <a href={"#/admin/edit/" + item.id} className={cx(style.edit, 'btn', 'btn-xs', 'btn-primary')}>
      <i className="fa fa-edit"></i>
    </a>
    <a href="#/admin" onClick={::this.delPost} className={cx(style.delete, 'btn', 'btn-xs', 'btn-danger')}>
      <i className="fa fa-trash"></i>
    </a>
  </div>
  <p className="list-group-item-text" dangerouslySetInnerHTML={{__html: util.cutStr(item.content, 100)}}></p>
</div>
    );
  }
}
