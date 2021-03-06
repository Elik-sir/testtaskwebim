import styled from 'styled-components';

export const Arcticle = styled.div`
  border-radius: 0.5rem;
  padding: 24px;
  max-width: 500px;
  min-height: 320px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.3);
  font-size: 16px;
  margin: auto auto;
  margin-top: 100px;
  border: none;
  .fieldset {
    border: none;
  }
  .legend {
    font-size: 24px;
  }
`;
export const NameField = styled.span`
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`;
export const Button = styled.button`
  display: block;
  width: auto;
  padding: 8px 16px;
  margin: 16px auto;
  background: ${(props) =>
    props.disabled ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0)'};
  border: 1px solid black;
  font-size: 20px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;
export const Input = styled.input`
  background: rgba(0, 0, 0, 0);
  border: 1px solid black;
  width: 200px;
  height: 32px;
`;
export const WrapperLoader = styled.div`
  position: absolute;
  top: 50;
  bottom: 50;
  left: 0;
  right: 0;
  margin-top: 32px;
`;
