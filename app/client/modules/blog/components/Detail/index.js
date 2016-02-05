import Loading from 'cc/loading';
import * as Actions from 'blog/actions/detail';
import Post from './post';
import style from './style';

@connect(
  state => {
    return {
      ...state.globals.info,
      post: state.blog.detail.data
    };
  }, 
  dispatch => bindActionCreators(Actions, dispatch)
)
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.props.getPost(this.props.params.id);
    this.props.toDetail(this.props.params.id);
    document.body.scrollTop = 50;
  }
  render() {
    const { post } = this.props;
    return (
      <div className={cx({
        [style.detail]: true,
        container: true
      })}>
        {parseInt(this.props.params.id) === post.id ? <Post post={post} /> : <Loading /> }
      </div>
    );
  }
}
