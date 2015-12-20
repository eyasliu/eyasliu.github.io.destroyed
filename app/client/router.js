// 应用总路由
import Router, { Route, IndexRoute } from 'react-router';
import createHistory  from 'history/lib/createHashHistory';
import Framework from 'framework';
import BlogRouter from 'blog/router';
import AdminRouter from 'admin/router';
import Index from 'blog';

const APPRouter = (
  <Router history={createHistory()}>
    <Route path="/" component={Framework}>
      {BlogRouter}
      {AdminRouter}
      <IndexRoute component={Index} />
    </Route>
  </Router>
);

export default APPRouter;
