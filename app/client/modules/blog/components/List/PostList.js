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
    const listItems = [];
    this.props.data.map( (item, index) => {
      listItems.push(<PostItem key={'post-' + index} data={item} />);
    });
    return (
      <div className={cx({
        [style['post-list']]: true,
        container: true
      })}>
        <div className={style['post-list-inner']}>
          {listItems}
        </div>
      </div>
    );
  }
}