import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 32px 0;
  background-color: #efefef;
`;

export const Container = styled.div`
  width: 60%;
  & > form {
    padding: 32px 0;
  }
`;

export const Title = styled.h2`
  background-color: #222;
  color: #ffbb33;
  font-size: 40px;
  padding: 16px;
  font-weight: bold;
`;

export const ContainerInfos = styled.div`
  padding: 8px 0;
`;

export const Infos = styled.p`
  &:nth-child(1) {
    margin-top: 12px;
  }
  &:nth-child(2) {
    margin: 12px 0;
  }
  &:nth-child(3) {
    margin-bottom: 12px;
  }
`;

export const Strong = styled.strong`
  font-weight: bold;
`;

export const ContainerService = styled.div`
  border: 1px solid black;
  border-left: transparent;
  border-right: transparent;
  padding: 32px 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleService = styled.h3`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 24px;

  &:nth-child(even) {
    margin-top: 32px;
  }
`;

export const Button = styled.button`
  background-color: #222;
  border: none;
  color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 16px;
  &:hover {
    color: #ffbb33;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(2) {
    padding: 32px 0;
  }
  &:nth-child(3) {
    padding: 0 0 32px 0;
  }

  select {
    border: 1px solid transparent;
    outline: none;
    padding: 12px;
    cursor: pointer;
    border-radius: 16px;

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
  margin-bottom: 4px;
`;

export const Input = styled.input`
  border: 1px solid transparent;
  outline: none;
  padding: 12px;
  cursor: pointer;
  border-radius: 16px;

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
  padding: 32px 0 64px;
`;

export const ContainerServiceCard = styled.div`
  background-color: #fff;
  padding: 16px 16px;
  border: 1px solid #7a7a7a;
  border-radius: 5px;
`;

export const ServiceTitle = styled.h3`
  color: #ffbb33;
  background-color: #222222;
  padding: 8px 12px;
  font-size: 1.3rem;
  word-wrap: break-word;
  font-weight: bold;
`;

export const Cost = styled.p`
  color: #7b7b7b;
  padding: 24px 0;
`;
export const ServiceStrong = styled.strong`
  font-weight: bold;
  margin-right: 8px;
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
  padding: 6px 8px;
  gap: 6px;
  border-radius: 16px;
  margin-top: 16px;

  &:hover {
    background-color: #222;
    color: #ffbb33;
    border-color: transparent;
  }
`;
