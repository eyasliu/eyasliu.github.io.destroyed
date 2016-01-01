import MarkdownEditor from 'common/components/MarkdownEditor';
import Select from 'react-select';
import formToObj from 'form-to-obj';
import _ from 'lodash';

const options = [
  { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' }
]

export default class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: []
    }
  }

  submitHandler(e) {
    const formData = formToObj(this.refs.editForm);
    console.log(formData);
    e.preventDefault();
  }

  handlerChange(value){
    this.setState({
      tags: value
    })
  }

  render() {
    return (
      <form ref="editForm" onSubmit={::this.submitHandler}>
        <div className="form-group">
          <label forHTML="exampleInputEmail1">标题</label>
          <input type="text" className="form-control" name="title"  placeholder="title" />
        </div>
        <div className="form-group">
          <label forHTML="exampleInputPassword1">标签</label>
          <Select
            name="tags"
            options={options}
            value={this.state.tags}
            placeholder="请选择文章标签"
            multi
            allowCreate={true}
            noResultsText="没有该选项"
            onChange={::this.handlerChange}
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
