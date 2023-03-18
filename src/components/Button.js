import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #222;
  border: none;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    color: #ffbb33;
  }
`;

export default function Button({ title }) {
  return <StyledButton type="submit">{title}</StyledButton>;
}
