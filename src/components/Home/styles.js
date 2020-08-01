import styled from 'styled-components';


export const Input = styled.input`
  width: 500px;
  height: 32px;
  font-size: 24px;
  background: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 2px solid black;
  border-radius: 5px;
  @media (max-width: 499px) {
    width: 90%;
  }
`;
