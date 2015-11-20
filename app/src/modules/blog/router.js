import { Route, IndexRoute } from 'react-router';
import Blog from './';
import List from './components/list';

const APPRouter = (
<Route path="/blog" component={Blog}>
  <IndexRoute component={List} />
</Route>
);

export default APPRouter;
