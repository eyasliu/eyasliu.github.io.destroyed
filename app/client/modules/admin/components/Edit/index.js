import MarkdownEditor from 'common/components/MarkdownEditor';

export default class Edit extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label forHTML="exampleInputEmail1">标题</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
        </div>
        <div className="form-group">
          <label forHTML="exampleInputPassword1">标签</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group">
          <label forHTML="exampleInputPassword1">内容</label>
          <div className="content">
            <MarkdownEditor />
          </div>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}
