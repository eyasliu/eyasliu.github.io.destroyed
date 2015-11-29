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
    const category = util.renderList(data.terms.category, item => <a key={'category-' + item.ID} href="javascript:">{item.name}</a>);
    return (
      <article className={style['post-item']}>
        <div className={style['item-inner']}>
          <div className={style['item-header']}>
            <h3><a href={'#/blog/detail/' + data.ID}>{ data.title }</a></h3>
            <div className={style['item-meta']}>
              <span className={style.author}>
                作者：<a href="javascript:">{data.author.nickname}</a>
              </span>
              <span className={style.author}>
                {util.dateFormate(data.date, 'YYYY-MM-DD hh:mm:ss')}
              </span>
            </div>
          </div>
          <div className={style['item-content']}>
            <p dangerouslySetInnerHTML={{__html: util.cutStr(data.content, 250)}} />
          </div>
          <div className={style['item-permalink']}>
            <a href={'#/blog/detail/' + data.ID} className="btn btn-default btn-sm">阅读全文</a>
          </div>
          <div className={style['item-footer']}>
            <div className={style['footer-left']}>
              <div className={style['footer-meta']}>
                <span><i className="fa fa-folder-open-o"></i></span>
                {category}
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