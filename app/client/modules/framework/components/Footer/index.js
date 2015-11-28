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
          <p dangerouslySetInnerHTML={{__html: this.props.data.footer}} />
        </div>
      </div>
    );
  }
}
