import style from './style.scss';
import Item from './Item';
import ListView from './ListView';
import Header from './Header';

export default class List extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
<div className={style.list}>
  <div className="panel panel-default">
    <div className="panel-heading">
      文章列表
      
    </div>
    <div className="panel-body">
      <Header />
      <ListView></ListView>
    </div>
  </div>
</div>
    )
  }
}
