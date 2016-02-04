import marked from 'marked';
import style from './style/preview.scss';

// marked.setOptions({
//   renderer: new marked.Renderer(),
//   gfm: true,
//   tables: true,
//   breaks: false,
//   pedantic: false,
//   sanitize: true,
//   smartLists: true,
//   smartypants: false
// });
export default class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    text: ''
  };

  render() {
    const {text} = this.props;
    return (
      <div className={cx(this.props.className, style.preview)}>
        <div className="post-content" dangerouslySetInnerHTML={{__html: marked(text)}} />
      </div>
    );
  }
}