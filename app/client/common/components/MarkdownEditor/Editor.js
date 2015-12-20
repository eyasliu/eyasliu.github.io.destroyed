import Textarea from './Textarea';
import Preview from './Preview';

export default class Editor extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  changeText(newText) {
    console.log(this);
    this.setState({
      text: newText
    })
  }

  render() {
    return (
<div>
  <Textarea changeText={::this.changeText} />
  <Preview text={this.state.text} />
</div>
    );
  }
}