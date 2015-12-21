import Textarea from './Textarea';
import Preview from './Preview';

import style from './style/editor.scss';

export default class Editor extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      isPreview: false
    };
  }

  static defaultProps = {
    preview: 'tab'
  }

  changeText(newText) {
    console.log(this);
    this.setState({
      text: newText
    });
  }

  tabTo(target) {
    this.setState({
      isPreview: target === 'preview'
    });
  }

  render() {
    let navEl = '';
    if (this.props.preview === 'tab') {
      navEl = (
        <div className={style.nav}>
          <ul>
            <li className={cx({
              [style.active]: !this.state.isPreview
            })} onClick={e => {this.tabTo('edit');}}>Edit</li>
            <li className={cx({
              [style.active]: this.state.isPreview
            })} onClick={e => {this.tabTo('preview');}}>Preview</li>
          </ul>
        </div>);
    }
    return (
<div className={style.editor}>
  {navEl}
  <div className={cx({
    [style['edit-area']]: true,
    [style[this.props.preview]]: true,
    [style['on-preview']]: this.state.isPreview
  })}>
    <Textarea className={style.textarea} changeText={::this.changeText} mode="markdown" />
    <Preview className={style.preview} text={this.state.text} />
  </div>
</div>
    );
  }
}