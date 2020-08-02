import React, { useState } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { filterUser } from './utils';
import { Container, UserItem } from './styles';

const UserItems = ({ users }) => {
  const [viewUsers, setViewUsers] = useState(10);
  //Simulate fetch data API
  const fetchMoreData = () => {
    setTimeout(() => {
      setViewUsers(viewUsers + 10);
    }, 1500);
  };
  return (
    <Container>
      <InfiniteScroll
        dataLength={viewUsers}
        next={fetchMoreData}
        hasMore={users.length - 1 >= viewUsers ? true : false}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {users.slice(0, viewUsers).map((user) => (
          <UserItem key={user.id}>
            <h3>
              id : {user.id} username: {user.username}
            </h3>
          </UserItem>
        ))}
      </InfiniteScroll>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  users: filterUser(state),
});
export default connect(mapStateToProps)(UserItems);
