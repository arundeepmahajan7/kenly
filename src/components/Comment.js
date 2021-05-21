import React from 'react';

function Comment({ comment }) {
  return (
    <div className="post-comment-item">
      <div className="post-comment-header">
        <span className="post-comment-author text-black-50"><h6><strong>{comment.user.name}</strong></h6></span>
        <span className=" "><h6>&nbsp;a minute ago</h6></span>
        <span className="post-comment-likes"><h6>{comment.likes.length} likes</h6></span>
      </div>
    <div className="container container-fluid">
      <div className="post-comment-content">{comment.content}</div>
      </div>
    </div>
    
  );
}

export default Comment;
