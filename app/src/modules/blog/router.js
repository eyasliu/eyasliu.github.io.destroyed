import { Route, IndexRoute } from 'react-router';
import Blog from './';

const APPRouter = (
<Route path="/example" component={Blog}>
  <IndexRoute component={Blog} />
</Route>
);

export default APPRouter;
