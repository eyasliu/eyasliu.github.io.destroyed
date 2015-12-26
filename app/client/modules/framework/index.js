import { syncReduxAndRouter } from 'redux-simple-router';
import createHistory  from 'history/lib/createHashHistory';

import 'common/style';
import APPModule from './components/APPModule';
import { Provider } from 'react-redux';
import createStore from 'utils/store';
import reducers from './reducers';
import Devtool from 'utils/DevTools';

const store = createStore()(reducers);
const history = createHistory();

syncReduxAndRouter(history, store);

export default class FrameWork extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app-container framework">
        <Provider store={store}>
          <div className="provider-container">
            <APPModule children={this.props.children} />
            { config.debug && config.devtool && <Devtool store={store} /> }
          </div>
        </Provider>
      </div>
    );
  }

}
