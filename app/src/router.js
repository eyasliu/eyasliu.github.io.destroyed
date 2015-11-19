// 应用总路由
import Router, { Route, IndexRoute } from 'react-router';
import createHistory  from 'history/lib/createHashHistory';
import Framework from 'framework';
import ExampleRouter from 'blog/router';
import Index from 'blog';

const APPRouter = (
  <Router history={createHistory()}>
    <Route path="/" component={Framework}>
      {ExampleRouter}
      <IndexRoute component={Index} />
    </Route>
  </Router>
);

export default APPRouter;
