import style from './style/editor.scss';

export default class Textarea extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
<div className={style['textarea-container']}>
  <textarea name="text" onChange={e => this.props.changeText(e.target.value)} className={style['form-control']} rows="6"></textarea>
</div>
    );
  }
}