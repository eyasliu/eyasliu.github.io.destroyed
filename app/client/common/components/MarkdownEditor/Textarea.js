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
    mode: 'markdown'
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
      profile: this.props.mode
    });
    emmetCodeMirror(mycodeMirror);
    mycodeMirror.on('change', (CM, Obj) => {
      this.props.changeText(CM.getValue());
    });
  }

  render() {
    return (
<div className={cx(style['textarea-container'], this.props.className)}>
  <textarea name="text" ref="codemirror" onChange={e => this.props.changeText(e.target.value)} className={style['form-control']} rows="6"></textarea>
</div>
    );
  }
}