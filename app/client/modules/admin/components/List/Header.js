import style from './header.scss';

export default class List extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
<div className={style.header}>
  <a href="#/admin/new" className="btn btn-primary btn-sm">新建文章</a>
</div>
    )
  }
}
