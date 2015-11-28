import { Route, IndexRoute } from 'react-router';
import Blog from './';
import List from './components/List';
import Detail from './components/Detail';

const APPRouter = (
<Route path="/blog" component={Blog}>
  <Route path="list" component={List} />
  <Route path="detail/:id" component={Detail} />
  <IndexRoute component={List} />
</Route>
);

export default APPRouter;
