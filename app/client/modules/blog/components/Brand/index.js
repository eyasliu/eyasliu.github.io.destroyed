import style from './style';

export default class Brand extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={style.brand}>
        <div className={style['brand-inner']}>
          <div className={style.title}>
            {this.props.title}
          </div>
          <div className={style.description}>
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}