import { Input, InputArea, Label } from "./styles";

import ButtonNewProject from "../../ButtonNewProject";
import { useEffect, useState } from "react";

export default function ProjectForm({
  handleSubmit,
  setProject,
  project,
  name,
  setName,
  budget,
  setBudget,
  category,
}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5001/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleSelect = (e) => {
    setProject({
      ...project,
      category: {
        id: e.target.options.selectedIndex,
        name: e.target.value,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputArea>
        <Label htmlFor="name">Nome do Projeto:</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Insira o nome do projeto"
          required
          onChange={(e) => (setName ? setName(e.target.value) : "")}
          value={name}
        />
      </InputArea>
      <InputArea>
        <Label htmlFor="budget">Orçamento do projeto:</Label>
        <Input
          id="budget"
          name="budget"
          type="number"
          min={0}
          placeholder="Insira o orçamento total"
          required
          onChange={(e) => (setBudget ? setBudget(e.target.value) : "")}
          value={budget}
        />
      </InputArea>
      <InputArea>
        <Label htmlFor="category">Selecione uma categoria:</Label>
        <select
          required
          name="category"
          id="category"
          onChange={handleSelect}
          value={category?.name}
        >
          <option>Selecione uma opção</option>

          {categories.map((category, index) => (
            <option key={index}>{category.name}</option>
          ))}
        </select>
      </InputArea>
      <ButtonNewProject type="submit" />
    </form>
  );
}
