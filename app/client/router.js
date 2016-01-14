// 应用总路由
import Router, { Route, IndexRoute } from 'react-router';
import history  from 'utils/history';
import Framework from 'framework';
import BlogRouter from 'blog/router';
import AdminRouter from 'admin/router';
import AuthRouter from 'auth/router';
import Index from 'blog';

const APPRouter = (
  <Router history={history}>
    <Route path="/" component={Framework}>
      {BlogRouter}
      {AdminRouter}
      {AuthRouter}
      <IndexRoute component={Index} />
    </Route>
  </Router>
);

export default APPRouter;
