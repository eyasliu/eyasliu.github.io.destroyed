import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'blog/actions/list';
import style from './style';
import Brand from '../Brand';
import PostList from './PostList';
import PageNav from './PageNav';

class List extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.getList(1);
  }

  render() {
    return (
      <div className={style['list-page']}>
        <Brand  title={this.props.title}
                description={this.props.description}
         />
        <PostList data={this.props.list} />
        <PageNav />
      </div>
    );
  }
}

function mapActionToProps(state) {
  return {
    ...state.globals.info,
    list: state.blog.list.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapActionToProps, mapDispatchToProps)(List);