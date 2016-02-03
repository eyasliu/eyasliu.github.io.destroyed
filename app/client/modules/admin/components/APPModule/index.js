import style from './style.scss';
import List from '../List';

export default class APPModule extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={style.AdminModule}>
        {this.props.children || <List />}
      </div>
    );
  }
}