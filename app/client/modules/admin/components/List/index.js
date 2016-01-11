import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'admin/actions/list';

import style from './style.scss';
import Item from './Item';
import ListView from './ListView';
import Header from './Header';
import Loading from 'common/components/loading';

@connect(
  state => state.admin.list,
  dispatch => bindActionCreators(Actions, dispatch)
  )
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchList();
  }

  render() {
    const {listdata} = this.props;
    console.log(listdata);
    return (
<div className={style.list}>
  <div className="panel panel-default">
    <div className="panel-heading">
      文章列表
    </div>
    <div className="panel-body">
      <Header />
      {listdata.length ? <ListView data={listdata} /> : <Loading />}
    </div>
  </div>
</div>
    );
  }
}
