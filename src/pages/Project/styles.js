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
  & > form {
    padding: 2rem 0;
  }
`;

export const Title = styled.h2`
  background-color: #222;
  color: #ffbb33;
  font-size: 2.5rem;
  padding: 1rem;
  font-weight: bold;
`;

export const ContainerInfos = styled.div`
  padding: 0.5rem 0;
`;

export const Infos = styled.p`
  &:nth-child(1) {
    margin-top: 0.75rem;
  }
  &:nth-child(2) {
    margin: 0.75rem 0;
  }
  &:nth-child(3) {
    margin-bottom: 0.75rem;
  }
`;

export const Strong = styled.strong`
  font-weight: bold;
`;

export const ContainerService = styled.div`
  border: 1px solid black;
  border-left: transparent;
  border-right: transparent;
  padding: 2rem 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleService = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;

  &:nth-child(even) {
    margin-top: 2rem;
  }
`;

export const Button = styled.button`
  background-color: #222;
  border: none;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    color: #ffbb33;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(2) {
    padding: 2rem 0;
  }
  &:nth-child(3) {
    padding: 0 0 2rem 0;
  }

  select {
    border: 1px solid transparent;
    outline: none;
    padding: 0.75rem;
    cursor: pointer;
    border-radius: 1rem;

    &:hover {
      border-color: #7b7b7b;
    }

    &:focus {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-color: #000;
    }
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  border: 1px solid transparent;
  outline: none;
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    border-color: #7b7b7b;
  }

  &:focus {
    border-color: #000;
  }
`;

export const ContainerServices = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 24.75%);
  column-gap: 1%;
  row-gap: 4%;
  padding: 2rem 0 4rem;
`;

export const ContainerServiceCard = styled.div`
  background-color: #fff;
  padding: 1rem 1rem;
  border: 1px solid #7a7a7a;
  border-radius: 5px;
`;

export const ServiceTitle = styled.h3`
  color: #ffbb33;
  background-color: #222222;
  padding: 0.5rem 0.75rem;
  font-size: 1.3rem;
  word-wrap: break-word;
  font-weight: bold;
`;

export const Cost = styled.p`
  color: #7b7b7b;
  padding: 1.5rem 0;
`;
export const ServiceStrong = styled.strong`
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const Description = styled.p`
  color: #7b7b7b;
  word-wrap: break-word;
`;
export const ButtonDelete = styled.button`
  cursor: pointer;
  background-color: #efefef;
  border: 1px solid #7b7b7b;
  display: flex;
  align-items: center;
  padding: 0.4rem 0.5rem;
  gap: 0.4rem;
  border-radius: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #222;
    color: #ffbb33;
    border-color: transparent;
  }
`;
