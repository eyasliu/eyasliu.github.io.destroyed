import MarkdownEditor from 'common/components/MarkdownEditor';
import * as Actions from 'admin/actions/edit';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Select from 'react-select';
import formToObj from 'form-to-obj';
import Loading from 'common/components/loading';
import _ from 'lodash';

const options = [
  { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' }
]

@connect(
  state => {
    return { item: state.admin.edit.itemdata,routing:state.routing}},
  dispatch => bindActionCreators(Actions, dispatch)
)
export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.isNew = props.routing.path === '/admin/new';
    !this.isNew&&props.fetchEditPost(props.routeParams.id)

    this.state = {
      tags: [],
      isReady: this.isNew||(props.routeParams.id == props.item.ID)
    }
  }

  submitHandler(e) {
    const formData = formToObj(this.refs.editForm);
    console.log(this.props);
    if(this.isNew){
      this.props.create(formData);
    }else{
      this.props.save(formData);
    }
    e.preventDefault();
  }

  handlerChange(value){
    this.setState({
      tags: value
    })
  }

  componentWillReceiveProps(nextProp){
    this.setState({
      isReady: nextProp.item.ID == this.props.routeParams.id
    })
  }

  render() {
    const item = this.isNew?{}:this.props.item;
    const editContent = (
      <form ref="editForm" onSubmit={::this.submitHandler}>
        {this.isNew?'':<input type="hidden" name="ID" value={item.ID} />}
        <div className="form-group">
          <label forHTML="exampleInputEmail1">标题</label>
          <input type="text" className="form-control" name="title" onChange={_.noop} defaultValue={item.title} placeholder="title" />
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
            <MarkdownEditor preview="tab" name="content" text={item.content} />
          </div>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
      );
    return this.state.isReady?editContent:<Loading />;
  }
}
