import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 11rem;
  padding: 2.5rem 0;
  background-color: #222222;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 2rem;
`;

export const Item = styled.li`
  svg {
    fill: #fff;
    width: 1.5rem;
    height: 1.5rem;
  }

  svg:hover {
    fill: #ffbb33;
  }
`;

export const Copyright = styled.p`
  color: #fff;
  letter-spacing: 2px;
`;

export const Mark = styled.span`
  color: #ffbb33;
  font-weight: 700;
`;
