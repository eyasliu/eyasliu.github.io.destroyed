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
    const navItems = [];
    this.props.data.map((item, index) => {
      navItems.push(<li key={'navItem-' + index}><Link to={item.link}>{item.name}</Link></li>);
    });
    return (
      <nav className={cx({
        navbar: true,
        [style['navbar-eyas']]: true
      })}>
        <ul className="nav navbar-nav">
          {navItems}
        </ul>
      </nav>
    );
  }
}