import styled from 'styled-components';
export const Container = styled.div`
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  @media (max-width: 499px) {
    width: 90%;
  }
`;
export const UserItem = styled.div`
  border: 2px solid black;
  width: 100%;
  height: 80px;
  margin-top: 24px;
  color: white;
`;
