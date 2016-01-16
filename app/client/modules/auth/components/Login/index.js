import style from 'auth/style/page.scss';
import formToObj from 'form-to-obj';
import {connect} from 'react-redux';
import * as actions from 'auth/actions/auth';
import {bindActionCreators} from 'redux';

@connect(
  null,
  dispatch => bindActionCreators(actions, dispatch)
)
export default class Login extends React.Component{
  constructor(){
    super();
  }

  handlerSubmit(e){
    const formData = formToObj(this.refs.loginForm);
    console.log(formData);
    this.props.Login(formData);
    e.preventDefault();
  }

  render(){
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
          <div className="col-sm-10 col-sm-offset-2">
            <div className="checkbox">
              <label>
                <input type="checkbox" name="remember" value="true" /> 记住我
              </label>
            </div>
          </div>
        </div>
        <div className={cx("form-group", style['form-action'])}>
          <div className="col-sm-10 col-sm-offset-2">
            <button type="submit" className="btn btn-primary">登录</button> 
            <input className="btn btn-default" type="reset" value="重置"/>
            <a href="#/auth/signup" className="btn btn-link">注册</a>
          </div>
        </div>
      </form>
    );
  }
}