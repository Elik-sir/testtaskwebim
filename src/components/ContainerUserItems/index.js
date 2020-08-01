import React from 'react';
import { connect } from 'react-redux';
import { filterUser } from './utils';
import { Container, UserItem } from './styles';

const UserItems = ({ users }) => {
  return (
    <Container>
      {users.map((user) => (
        <UserItem key={user.id}>
          <h3>
            id : {user.id} username: {user.username}
          </h3>
        </UserItem>
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  users: filterUser(state),
});
export default connect(mapStateToProps)(UserItems);
