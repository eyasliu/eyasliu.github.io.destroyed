import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loading from 'common/components/loading';
import * as Actions from 'blog/actions/detail';
import Post from './post';
import style from './style';

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.props.getPost(this.props.params.id);
    document.body.scrollTop = 50;
  }
  render() {
    const { post } = this.props;
    console.log( this.props.params.id == post.ID );
    return (
      <div className={cx({
        [style.detail]: true,
        container: true
      })}>
        {this.props.params.id == post.ID ? (<Post post={post} />) : (<Loading />) }
      </div>
    );
  }
}

function mapActionToProps(state) {
  return {
    ...state.globals.info,
    post: state.blog.detail.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapActionToProps, mapDispatchToProps)(Detail);