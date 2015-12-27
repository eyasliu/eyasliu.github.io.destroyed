import MarkdownEditor from 'common/components/MarkdownEditor';
import Select from 'react-select';
import formToObj from 'form-to-obj';

export default class Edit extends React.Component {
  constructor() {
    super();
  }

  submitHandler(e) {
    const formData = formToObj(this.refs.editForm);
    console.log(formData);
    e.preventDefault();
  }

  render() {
    return (
      <form ref="editForm" onSubmit={::this.submitHandler}>
        <div className="form-group">
          <label forHTML="exampleInputEmail1">标题</label>
          <input type="text" className="form-control" name="post.title"  placeholder="title" />
        </div>
        <div className="form-group">
          <label forHTML="exampleInputPassword1">标签</label>
          <Select
            name="tags[]"
            options={[
              { value: '110100', label: '北京市' },
              { value: '120100', label: '天津市' }]}
            onChange={e => console.log(e)}
           />
        </div>
        <div className="form-group">
          <label forHTML="exampleInputPassword1">内容</label>
          <div className="content">
            <MarkdownEditor name="content" />
          </div>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}
