import { Link } from 'react-router';
import { connect } from 'react-redux';
import style from './style';

// function mapActionToProps(state) {
//   return {
//     ...state.globals.info,
//     isDetail: !!state.blog.detail.data
//   };
// }

@connect(state => {return {routes: state.routing};})
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  static defaultProps = {
    data: []
  }

  render() {
    const isDetail = this.props.routes.path.indexOf('blog/detail') != -1;
    return (
      <nav className={cx({
        navbar: true,
        [style['navbar-eyas']]: true
      })}>
        <ul className="nav navbar-nav">
          {isDetail ? (
            <li key={'navItem-goback'}>
              <a  href="#/blog" className={style.goback} >
                <i className="glyphicon glyphicon-chevron-left"></i>返回
              </a>
            </li>
            ) : ''}
          {util.renderList(this.props.data, item => {
            return (
              <li key={'navItem-' + item.id}>
                <a target={item.link.indexOf('://') > 0 ? '_blank' : '_self'} href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}