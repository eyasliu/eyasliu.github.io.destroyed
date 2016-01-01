import { Route, IndexRoute } from 'react-router';
import Admin from './';
import List from './components/List';
import Edit from './components/Edit';

const APPRouter = (
<Route path="/admin" component={Admin}>
  <Route path="list" component={List} />
  <Route path="edit/:id" component={Edit} />
  <Route path="new" component={Edit} />
  <IndexRoute component={List} />
</Route>
);

export default APPRouter;
