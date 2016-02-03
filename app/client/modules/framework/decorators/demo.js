export default ComposedComponent => class extends Component {
  constructor() {
    super();
    this;
  }
  componentDidMount() {
    console.log('hello,this is demo decorator');
  }
  render() {
    return <ComposedComponent {...this.props} />;
  }
};
