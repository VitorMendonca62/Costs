import { InputArea, Input, Label } from "../layout/ProjectForm/styles";

import Button from "../Button";

export default function index({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <InputArea>
        <Label htmlFor="nameService">Nome do serviço:</Label>
        <Input
          id="nameService"
          name="nameService"
          type="text"
          placeholder="Insira o nome do serviço"
          required
        />
      </InputArea>
      <InputArea>
        <Label htmlFor="cost">Custo do serviço:</Label>
        <Input
          id="cost"
          name="cost"
          type="number"
          placeholder="Insira o valor total"
          required
        />
      </InputArea>
      <InputArea>
        <Label htmlFor="description">Descrição do projeto:</Label>
        <Input
          id="description"
          name="description"
          type="text"
          placeholder="Descreva o serviço"
          required
        />
      </InputArea>
      <Button title="Adicionar o serviço"/>
    </form>
  );
}
