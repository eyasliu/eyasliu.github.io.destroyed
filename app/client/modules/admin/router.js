import { Route, IndexRoute } from 'react-router';
import Admin from './';
import List from './components/List';

const APPRouter = (
<Route path="/admin" component={Admin}>
  <Route path="list" component={List} />
  <IndexRoute component={List} />
</Route>
);

export default APPRouter;
