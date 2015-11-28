import style from './style';
import PostItem from './PostItem';

export default class PostList extends React.Component {
  constructor() {
    super();
  }

  static defaultProps = {
    data: []
  }

  render() {
    return (
      <div className={cx({
        [style['post-list']]: true,
        container: true
      })}>
        <div className={style['post-list-inner']}>
          {util.renderList(this.props.data, item => <PostItem key={'post-' + item.ID} data={item} />)}
        </div>
      </div>
    );
  }
}