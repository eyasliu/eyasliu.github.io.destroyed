import style from './style';
import PostItem from './PostItem';

export default class PostList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={cx({
        [style['post-list']]: true,
        container: true
      })}>
        <div className={style['post-list-inner']}>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
      </div>
    );
  }
}