import { Link } from 'react-router';
import { connect } from 'react-redux';
import style from './style';

function mapActionToProps(state) {
  return {
    ...state.globals.info,
    isDetail: !!state.blog.detail.data
  };
}

@connect(mapActionToProps)
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    data: []
  }

  render() {
    console.log(this.props);
    return (
      <nav className={cx({
        navbar: true,
        [style['navbar-eyas']]: true
      })}>
        <ul className="nav navbar-nav">
          {this.props.isDetail ? (
            <li key={'navItem-goback'}>
              <a  onClick={() => history.go(-1)}
                  className={style.goback}
              >
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