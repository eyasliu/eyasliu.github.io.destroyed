import Select from 'react-select';

let options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

export default class SelectEn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: [],
    }
  }

  static defaultProps = {
    onChange: _.noop,
    name: '',
    options: [{
      value: '',
      label: ''
    }]
  }

  handleChange = (value) => {
    this.setState({value});
    this.props.onChange(value)
  };

  render(){
    return (
      <Select
        name={this.props.name}
        value={this.state.value}
        multi
        simpleValue
        options={this.props.options}
        onChange={this.handleChange}
      />
    )
  }
}