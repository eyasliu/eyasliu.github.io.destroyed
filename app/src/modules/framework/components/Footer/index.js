import style from './style';

export default class Footer extends React.Component {
  constructor() {
    super();
  }

  static defaultProps = {
    data: {}
  }

  render() {
    return (
      <div className={style.footer}>
        <div className="container">
          <p>{this.props.data.footer}</p>
        </div>
      </div>
    );
  }
}
