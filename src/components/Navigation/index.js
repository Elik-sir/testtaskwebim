import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/user/actions';
import { NavigationContainer, StyledLink, Text } from './styles';
const Navigation = ({ user, logout }) => (
  <NavigationContainer>
    {user ? (
      <Text onClick={logout}>LOGOUT</Text>
    ) : (
      <>
        <StyledLink to='/signin'>SIGN IN</StyledLink>
        <StyledLink to='/register'>REGISTER</StyledLink>
      </>
    )}
  </NavigationContainer>
);
const mapStateToProps = (state) => ({
  user: state.user.token,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
