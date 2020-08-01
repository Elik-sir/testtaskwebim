import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 16px 32px;
  white-space: nowrap;
  height: 40px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin-left: 28px;
  font-size: 24px;
  transition: border 0.2s;
  &:hover {
    border-bottom: 2px solid white;
  }
`;
export const Text = styled.span`
  text-decoration: none;
  color: #000;
  margin-left: 28px;
  font-size: 24px;
  transition: border 0.2s;
  &:hover {
    border-bottom: 2px solid white;
  }
`;
