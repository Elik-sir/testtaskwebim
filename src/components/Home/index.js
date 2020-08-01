import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Input, SortButton } from './styles';
import UserItems from '../ContainerUserItems';
import {
  fetchUsersStartAsync,
  filterUsername,
  sortUsers,
} from '../../redux/user/actions';

const Home = ({ token, getUsers, filterUsername, sortUsers }) => {
  const [order, setOrder] = useState('asc');
  useEffect(() => {
    getUsers(token);
  }, [token, getUsers]);
  return (
    <div>
      <Input
        placeholder='Enter username'
        onChange={(e) => filterUsername(e.target.value)}
      />
      <div>
        <SortButton
          onClick={() => {
            sortUsers(-1);
            setOrder('desc');
          }}
          order={order}
          disabled={order === 'desc' ? true : false}
        >
          ПО УБЫВАНИЮ
        </SortButton>
        <SortButton
          onClick={() => {
            sortUsers(1);
            setOrder('asc');
          }}
          order={order}
          disabled={order === 'asc' ? true : false}
        >
          ПО Возрастанию
        </SortButton>
      </div>
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
  sortUsers: (order) => dispatch(sortUsers(order)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
