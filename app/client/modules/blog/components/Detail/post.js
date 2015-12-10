import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loading from 'common/components/loading';
import * as Actions from 'blog/actions/detail';
import style from './style';

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    post: {}
  }

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
        <section dangerouslySetInnerHTML={{__html: post.content}} className={cx(style.content, 'post-content')}>
        </section>
        <footer className={style.footer}>
        </footer>
      </article>
    );
  }
}

function mapActionToProps(state) {
  return {
    ...state.globals.info,
    post: state.blog.detail.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapActionToProps, mapDispatchToProps)(Detail);