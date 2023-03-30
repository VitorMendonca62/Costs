import styled from "styled-components";

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(2) {
    padding: 32px 0;
  }

  &:nth-child(3) {
    padding-bottom: 32px;
  }

  select {
    border: 1px solid transparent;
    outline: none;
    padding: 12px;
    cursor: pointer;
    border-radius: 16px;

    &:hover {
      border-color: #7b7b7b;
    }

    &:focus {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-color: #000;
    }
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  border: 1px solid transparent;
  outline: none;
  padding: 12px;
  cursor: pointer;
  border-radius: 16px;

  &:hover {
    border-color: #7b7b7b;
  }

  &:focus {
    border-color: #000;
  }
`;
