import style from './style';

export default class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={style.footer}>
        <div className="container">
          <p>Power by <a href="#">React</a>. Built & Design by Eyas</p>
        </div>
      </div>
    );
  }
}
