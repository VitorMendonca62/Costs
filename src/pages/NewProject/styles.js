import styled from "styled-components";

export const Main = styled.main`
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7.2rem 0;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const Description = styled.p`
  color: #7b7b7b;
  padding: 2rem 0;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(2) {
    padding: 2rem 0;
  }
  &:nth-child(3) {
    padding: 0 0 2rem 0;
  }

  select {
    border: 1px solid transparent;
    outline: none;
    padding: 0.75rem;
    cursor: pointer;
    border-radius: 1rem;

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
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  border: 1px solid transparent;
  outline: none;
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    border-color: #7b7b7b;
  }

  &:focus {
    border-color: #000;
  }
`;
