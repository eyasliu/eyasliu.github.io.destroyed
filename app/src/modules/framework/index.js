import 'common/style';
import APPModule from './components/APPModule';
import { Provider } from 'react-redux';
import createStore from 'utils/store';
import reducers from './reducers';
import Devtool from 'utils/DevTools';

const store = createStore()(reducers);

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
