import CodeMirror from 'codemirror';
import emmetCodeMirror from 'emmet-codemirror';
import style from './style/textarea.scss';

export default class Textarea extends React.Component {
  constructor(props) {
    super(props);
    require('codemirror/mode/' + this.props.mode + '/' + this.props.mode);
  }

  static defaultProps = {
    theme: 'monokai',
    mode: 'markdown',
    text: ''
  }

  componentDidMount() {
    const mycodeMirror = CodeMirror.fromTextArea(this.refs.codemirror, {
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      mode: this.props.mode,
      theme: 'monokai',
      smartIndent: true,
      tabSize: 2,
      value: this.props.text,
      profile: this.props.mode
    });
    emmetCodeMirror(mycodeMirror);
    mycodeMirror.on('change', (CM, Obj) => {
      this.props.changeText(CM.getValue());
      this.refs.codemirror.value = CM.getValue();
    });
  }

  render() {
    return (
<div className={cx(style['textarea-container'], this.props.className)}>
  <textarea value={this.props.text} name={this.props.name} ref="codemirror" onChange={e => this.props.changeText(e.target.value)} className={style['form-control']} rows="6"></textarea>
</div>
    );
  }
}