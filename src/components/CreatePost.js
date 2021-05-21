import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/posts';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  handleOnClick = () => {
    // dispatch action
    this.props.dispatch(createPost(this.state.content));
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  render() {
    return (
      <div className="create-post container container-lg">
        <textarea
          className="add-post"
          value={this.state.content}
          onChange={this.handleChange}
        />

        <div>
          <button className="btn btn-primary btn-lg" onClick={this.handleOnClick}>
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(CreatePost);
