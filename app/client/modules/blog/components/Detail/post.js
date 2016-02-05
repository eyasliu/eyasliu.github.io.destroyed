import marked from 'marked';
import Loading from 'cc/loading';
import * as Actions from 'blog/actions/detail';
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
  }

  static defaultProps = {
    post: {}
  };

  render() {
    const { post } = this.props;
    return (
      <article className={style.post}>
        <header className={style['post-header']}>
          <h1 className={style.title}>{post.title}</h1>
          <div className={style['post-meta']}>
            <span className={style.author}>
              作者：<a href="javascript:">{post.author.nickname}</a>
            </span>
            <span className={style.author}>
              {post.date}
            </span>
          </div>
        </header>
        <section dangerouslySetInnerHTML={{__html: marked(post.content)}} className={cx(style.content, 'post-content')}>
        </section>
        <footer className={style.footer}>
        </footer>
      </article>
    );
  }
}