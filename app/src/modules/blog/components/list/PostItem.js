import style from './style';

export default class PostList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <article className={style['post-item']}>
        <div className={style['item-inner']}>
          <div className={style['item-header']}>
            <h3>文章标题文章标题文章标题文章标题</h3>
            <div className={style['item-meta']}>
              <span className={style.author}>
                作者：<a href="#">Eyas Liu</a>
              </span>
              <span className={style.author}>
                2015-11-20
              </span>
            </div>
          </div>
          <div className={style['item-content']}>
            <p>Ghost 官方在 18 号的会议记录上透露了 Ghost 0.7 版本可能会在这个月底前发布，也就是说 Github 仓库里的代码不会有太大变化了。周末抽时间把 master 分支上的代码下载、编译、安装起来，截几张高清图，360 度无死角透视一下最新版的真面目吧！ 安装界面</p>
          </div>
        </div>
      </article>
    );
  }
}