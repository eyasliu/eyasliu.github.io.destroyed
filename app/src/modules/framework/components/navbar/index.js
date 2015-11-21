import { IndexLink } from 'react-router';

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
        <ul className="nav navbar-nav">
          <li><IndexLink to="/">首页</IndexLink></li>
          <li><IndexLink to="/blog">Blog</IndexLink></li>
        </ul>
      </nav>
    );
  }
}
