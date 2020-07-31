import React from 'react';

import { NavigationContainer, StyledLink } from './styles';
const Navigation = () => (
  <NavigationContainer>
    <StyledLink to='/signin'>Sign in</StyledLink>
    <StyledLink to='/register'>Register</StyledLink>
  </NavigationContainer>
);

export default Navigation;
