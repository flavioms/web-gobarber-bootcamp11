import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  color: #666360;

  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: 0;
      -webkit-text-fill-color: #f4ede8;
      -webkit-box-shadow: 0;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
