import { syncReduxAndRouter } from 'redux-simple-router';
import createHistory  from 'history/lib/createHashHistory';

// 全局样式
import 'common/style';

// 骨架容器
import APPModule from './components/APPModule';
import { Provider } from 'react-redux';
import createStore from 'utils/store';
import reducers from './reducers';

const store = createStore()(reducers);

// 热加载reducers
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers')['default'];
    store.replaceReducer(nextRootReducer);
  });
}

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
          </div>
        </Provider>
      </div>
    );
  }

}
