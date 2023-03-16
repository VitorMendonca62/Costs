import styled from "styled-components";

export const MessegeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  margin-bottom: 2rem;

  background-color: ${(props) =>
    props.type === "sucess" ? "#d4edda" : "#f8d7da"};
  border: 2px solid
    ${(props) => (props.type === "sucess" ? "#c3e6cb" : "#f5c6cb")};
  color: ${(props) => (props.type === "sucess" ? "#155724" : "#721c24")};
`;
