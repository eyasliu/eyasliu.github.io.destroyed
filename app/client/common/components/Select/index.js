import Select from 'react-select';

const select =  Select => class extends React.Component {
  constructor(props) {
    super(props);
    console.log('==>',props);
    this.state = {
      value: []
    };
  }

  static defaultProps = {
    
  }

  handlerChange(val) {
    console.log(this);
    this.setState({
      value: val
    })
  }

  render() {
    return <Select {...this.props} value={this.state.value} onChange={::this.handlerChange} />;
  }
}

export default select(Select);