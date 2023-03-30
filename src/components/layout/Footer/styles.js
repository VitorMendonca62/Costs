import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 176px;
  padding: 40px 0;
  background-color: #222222;
  position: absolute;
  bottom: 0;

  @media (max-height: 768px), (max-width: 720px) {
    position: relative;
  }
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
  gap: 24px;
  padding-bottom: 32px;
`;

export const Item = styled.li`
  svg {
    fill: #fff;
    width: 24px;
    height: 24px;
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
