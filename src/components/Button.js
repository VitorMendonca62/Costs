import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #222;
  border: none;
  color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 16px;
  &:hover {
    color: #ffbb33;
  }
`;

export default function Button({ title }) {
  return <StyledButton type="submit">{title}</StyledButton>;
}
