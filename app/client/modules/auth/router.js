import { Route, IndexRoute } from 'react-router';
import Auth from './';
import Login from './components/Login';

const APPRouter = (
<Route path="/auth" component={Auth}>
  <Route path="login" component={Login} />
  <IndexRoute component={Login} />
</Route>
);

export default APPRouter;
