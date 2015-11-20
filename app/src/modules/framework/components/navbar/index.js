import { Link } from 'react-router';

import style from './style';

export default class Navbar extends React.Component {
  constructor() {
    super();
  }

  static defaultProps = {
    text: 'test'
  }

  render() {
    return (
      <nav className={cx({
        navbar: true,
        [style['navbar-eyas']]: true
      })}>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <ul className="nav navbar-nav">
          <li><Link to="/blog">首页</Link></li>
          <li><Link to="/">关于</Link></li>
        </ul>
      </nav>
    );
  }
}
