// 应用总路由
import Router, { Route, IndexRoute } from 'react-router';
import createHistory  from 'history/lib/createHashHistory';
import Framework from 'framework';
import BlogRouter from 'blog/router';
import Index from 'blog';
import BlogList from 'blog/components/list';

const APPRouter = (
  <Router history={createHistory()}>
    <Route path="/" component={Framework}>
      {BlogRouter}
      <IndexRoute component={Index} children={BlogList} />
    </Route>
  </Router>
);

export default APPRouter;
