import Login from '../Login';
import style from './style.scss';

export default class APPModule extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="authModule">
        <div className={style.login}>
          <div className={style.container}>
            {this.props.children || <Login />}
          </div>
        </div>
      </div>
    );
  }
}