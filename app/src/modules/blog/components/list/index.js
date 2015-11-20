import style from './style';
import Brand from '../brand';
import PostList from './postList';

export default class List extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={style['list-page']}>
        <Brand  title="Eyas Blog"
                description="这只是一个博客，现在这个博客还没完成"
         />
        <PostList />
      </div>
    );
  }
}