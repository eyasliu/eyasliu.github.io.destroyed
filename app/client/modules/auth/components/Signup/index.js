import style from 'auth/style/page.scss';
import * as actions from 'auth/actions/auth';

@connect(
  state => state.auth.signup,
  dispatch => bindActionCreators(actions, dispatch)
)
export default class Signup extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //   message: {
    //     type: 'none',
    //     text: ''
    //   }
    // }
  }
  
  handlerSubmit(e){
    const formData = formToObj(this.refs.loginForm);
    console.log(formData);
    this.props.Signup(formData);
    e.preventDefault();
  }

  render(){
    const {message} = this.props;
    console.log(message);
    return (
      <form action="#" onSubmit={::this.handlerSubmit} ref="loginForm" className={cx(style.form, 'form-horizontal')}>
        <div className="form-group">
          <label className="control-label col-sm-2" forHTML="username">用户名</label>
          <div className="col-sm-10">
            <input type="text" name="username" className="form-control" placeholder="用户名" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" forHTML="username">密码</label>
          <div className="col-sm-10">
            <input type="password" name="password" className="form-control" placeholder="密码" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" forHTML="username">确认密码</label>
          <div className="col-sm-10">
            <input type="password" name="confirmPassword" className="form-control" placeholder="确认密码" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" forHTML="username">邮箱</label>
          <div className="col-sm-10">
            <input type="email" name="email" className="form-control" placeholder="邮箱" />
          </div>
        </div>
        <div className={cx("form-group", style['form-action'])}>
          <div className="col-sm-10 col-sm-offset-2">
            <button type="submit" className="btn btn-primary">提交</button> 
            <input className="btn btn-default" type="reset" value="重置"/>
            <a href="#/auth/login" className="btn btn-link">登陆</a>
          </div>
        </div>
        <div className={style.message}>
          <div className={cx('alert', 'alert-' + message.type)} role="alert">{message.text}</div>
        </div>
      </form>
    );
  }
}