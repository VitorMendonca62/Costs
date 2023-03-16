import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 1rem 1rem;
  border: 1px solid #7a7a7a;
  border-radius: 5px;
`;

export const ProjectTitle = styled.h3`
  color: #ffbb33;
  background-color: #222222;
  padding: 0.5rem 0.75rem;
  font-size: 1.3rem;
  word-wrap: break-word;
  font-weight: bold;
`;

export const Budget = styled.p`
  color: #7b7b7b;
  padding: 1.5rem 0;
`;
export const Strong = styled.strong`
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const Category = styled.p`
  color: #7b7b7b;
  display: flex;
  align-items: center;

  &::before {
    background-color: ${(props) =>
      props.colorBall ? props.colorBall : "black"};
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;

export const Buttons = styled.div`
  padding-top: 1.5rem;
  display: flex;
  gap: 18%;
`;
export const Button = styled.button`
  cursor: pointer;
  background-color: #efefef;
  border: 1px solid #7b7b7b;
  display: flex;
  align-items: center;
  padding: 0.4rem 0.5rem;
  gap: 0.4rem;
  border-radius: 1rem;

  &:hover {
    background-color: #222;
    color: #ffbb33;
    border-color: transparent;
  }
`;
