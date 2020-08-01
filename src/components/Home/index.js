import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Input } from './styles';
import UserItems from '../ContainerUserItems';
import { fetchUsersStartAsync, filterUsername } from '../../redux/user/actions';

const Home = ({ token, getUsers, filterUsername }) => {
  useEffect(() => {
    getUsers(token);
  }, [token, getUsers]);
  return (
    <div>
      <Input
        placeholder='Enter username'
        onChange={(e) => filterUsername(e.target.value)}
      />
      <UserItems />
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.user.token,
  isLoading: state.user.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  getUsers: (token) => dispatch(fetchUsersStartAsync(token)),
  filterUsername: (username) => dispatch(filterUsername(username)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
