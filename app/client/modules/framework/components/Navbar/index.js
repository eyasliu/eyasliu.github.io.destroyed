import { Link } from 'react-router';
import style from './style';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    data: []
  }

  render() {
    return (
      <nav className={cx({
        navbar: true,
        [style['navbar-eyas']]: true
      })}>
        <ul className="nav navbar-nav">
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