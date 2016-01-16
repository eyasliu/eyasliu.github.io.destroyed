import { Route, IndexRoute } from 'react-router';
import Auth from './';
import Login from './components/Login';
import Signup from './components/Signup';

const APPRouter = (
<Route path="/auth" component={Auth}>
  <Route path="login" component={Login} />
  <Route path="signup" component={Signup} />
  <IndexRoute component={Login} />
</Route>
);

export default APPRouter;
