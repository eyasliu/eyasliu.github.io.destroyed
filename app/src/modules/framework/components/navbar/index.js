import { IndexLink } from 'react-router';
import { connect } from 'react-redux';
import style from './style';

class Navbar extends React.Component {
  constructor() {
    super();
  }

  static defaultProps = {
    data: []
  }

  render() {
    const navItems = [];
    this.props.data.map((item, index) => {
      navItems.push(<li key={'navItem-' + index}><IndexLink to={item.link}>{item.name}</IndexLink></li>);
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
function mapStateToProps(state) {
  return state.globals.navbar;
}

export default connect(mapStateToProps)(Navbar);