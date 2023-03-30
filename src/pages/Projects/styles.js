import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 32px 0;
  background-color: #efefef;
   
  @media (max-width: 720px) {
    padding-bottom: 100px;
  }
`;

export const Container = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Header = styled.div`
  padding-bottom: 32px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 0rem;
  font-weight: bold;
`;

export const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax( 210px,24.25%));
  grid-column-gap: 1%;
  grid-row-gap: 3%;
  justify-content: center;
  width: 100%;
`;
