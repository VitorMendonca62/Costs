import styled from "styled-components";

export const Main = styled.main`
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 96px 0;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

export const Mark = styled.span`
  color: #ffbb33;
  background-color: #222222;
  padding: 4px 8px;
`;

export const Description = styled.p`
  color: #7b7b7b;
  padding: 32px 0;
`;

export const Image = styled.img`
  width: 20%;
  min-width: 320px;
  max-width: 160px;
  padding: 32px 0;
`;
