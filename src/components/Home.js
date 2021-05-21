import React, { Component } from 'react';
import { PostsList, FriendsList } from './';

class Home extends Component {
  render() {
    const { posts, friends, isLoggedin } = this.props;
    return (
      <div className="home container container-fluid">
        <PostsList posts={posts}className="container" />
        {isLoggedin && <FriendsList friends={friends} />}
      </div>
    );
  }
}

export default Home;
