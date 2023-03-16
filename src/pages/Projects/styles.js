import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
  background-color: #efefef;
`;

export const Container = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.header`
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 24.25%);
  grid-column-gap: 1%;
  grid-row-gap: 3%;
  width: 100%;
`;
