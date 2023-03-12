import styled from "styled-components";
export const Header = styled.header`
  background-color: #222222;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.img``;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const Item = styled.li`
  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #ffbb33;
    }
  }
`;
