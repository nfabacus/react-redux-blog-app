import React, { Component} from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
          {/* <a href="/posts/new">Normal link. This link will refresh the page.</a> */}
        </div>
        List of blog posts
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
// Above is not required with refactoring as below.

// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
export default connect(null, { fetchPosts })(PostsIndex);
