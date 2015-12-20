import marked from 'marked';

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
  }

  render() {
    const {text} = this.props;
    // console.log(this.props);
    return (
<div dangerouslySetInnerHTML={{__html: marked(text)}}>

</div>
    );
  }
}