import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer, StyledLink, Text } from './styles';
const Navigation = ({ user }) => (
  <NavigationContainer>
    {user ? (
      <Text>LOGOUT</Text>
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
export default connect(mapStateToProps)(Navigation);
