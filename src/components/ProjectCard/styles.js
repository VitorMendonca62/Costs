import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 16px;
  border: 1px solid #7a7a7a;
  border-radius: 5px;
`;

export const ProjectTitle = styled.h3`
  color: #ffbb33;
  background-color: #222222;
  padding: 8px 12px;
  font-size: 1.3rem;
  word-wrap: break-word;
  font-weight: bold;
`;

export const Budget = styled.p`
  color: #7b7b7b;
  padding: 24px 0;
`;
export const Strong = styled.strong`
  font-weight: bold;
  margin-right: 8px;
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
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

export const Buttons = styled.div`
  padding-top: 24px;
  display: flex;
  gap: 18%;
`;
export const Button = styled.button`
  cursor: pointer;
  background-color: #efefef;
  border: 1px solid #7b7b7b;
  display: flex;
  align-items: center;
  padding: 0.4rem 8px;
  gap: 6px;
  border-radius: 16px;

  &:hover {
    background-color: #222;
    color: #ffbb33;
    border-color: transparent;
  }
`;
