import style from './style';
import {Link} from 'react-router';

export default class PostItem extends React.Component {
  constructor() {
    super();
  }

  static defaultProps = {
    data: {}
  }

  render() {
    const { data } = this.props;
    return (
      <article className={style['post-item']}>
        <div className={style['item-inner']}>
          <div className={style['item-header']}>
            <h3><Link to={data.permalink}>{ data.title }</Link></h3>
            <div className={style['item-meta']}>
              <span className={style.author}>
                作者：<a href="#">{data.author}</a>
              </span>
              <span className={style.author}>
                2015-11-20
              </span>
            </div>
          </div>
          <div className={style['item-content']}>
            <p>{data.content}</p>
          </div>
          <div className={style['item-permalink']}>
            <a href="#" className="btn btn-default btn-sm">阅读全文</a>
          </div>
          <div className={style['item-footer']}>
            <div className={style['footer-left']}>
              <div className={style['footer-meta']}>
                <span><i className="fa fa-folder-open-o"></i></span>
                <a href="#">前端</a>
                <a href="#">node js</a>
                <a href="#">开发模式</a>
              </div>
            </div>
            <div className={style['footer-right']}>
              <div className={style['footer-left']}>
                <div className={style['footer-meta']}>
                  <span><i className="fa fa-star-o"></i></span>
                  <span><i className="fa fa-share"></i></span>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </article>
    );
  }
}