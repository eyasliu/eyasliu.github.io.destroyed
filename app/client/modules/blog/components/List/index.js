import * as Actions from 'blog/actions/list';
import style from './style';
import Brand from '../Brand';
import PostList from './PostList';
import PageNav from './PageNav';
import Loading from 'cc/loading';

@connect(
  state => {
    return {
      ...state.globals.info,
      list: state.blog.list.data
    };
  }, 
  dispatch => bindActionCreators(Actions, dispatch)
)
export default class List extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.getList(1);
  }

  render() {
    return (
      <div className={style['list-page']}>
        <Brand
          title={this.props.title}
          description={this.props.description}
        />
        {this.props.list.length ? <PostList data={this.props.list} /> : <Loading />}
      </div>
    );
  }
}
