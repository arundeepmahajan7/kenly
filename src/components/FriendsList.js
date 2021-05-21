import React from 'react';
import { FriendsListItem } from './';

const FriendsList = (props) => {
  return (
    <div className="friends-list container container-fluid">
      <div className="header container container-fluid"><h4>Friends</h4></div>

      {props.friends && props.friends.length === 0 && (
        <div className="no-friends text-success container text-center">No friends</div>
      )}

      {props.friends &&
        props.friends.map((friend) => (
          <FriendsListItem friend={friend.to_user} key={friend._id} className="container container-fluid text-center" />
        ))}
    </div>
  );
};

export default FriendsList;
