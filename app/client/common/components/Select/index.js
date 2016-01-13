import Select from 'react-select';

const select =  Component => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  handlerChange(val) {
    this.setState({
      value: val
    });
  }

  render() {
    return <Component {...this.props} delimiter=',' value={this.state.value} onChange={::this.handlerChange} />;
  }
};

export default select(Select);