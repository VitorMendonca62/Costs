import ButtonNewProject from "../../components/ButtonNewProject";

import { Main, Title, InputArea, Description, Label, Input } from "./styles";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../contants/paths";

export default function NewProjects() {
  const history = useNavigate();

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [budget, setBudget] = useState(0);
  const [project, setProject] = useState({});

  const handleName = (e) => {
    setName(e.target.value);
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleBudget = (e) => {
    setBudget(e.target.value);
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSelect = (e) => {
    setProject({
      ...project,
      category: {
        id: e.target.options.selectedIndex,
        name: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    project.cost = 0
    project.services = []
    try {
      await fetch("http://localhost:5001/projects", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(project),
      });
      history(paths.projects, {
        state: { message: "Projeto criado com sucesso", type: "sucess" },
      });
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <Main>
      <div>
        <Title>Criar Projeto</Title>
        <Description>
          Crie seu projeto para depois adicionar os serviços
        </Description>
        <form onSubmit={handleSubmit}>
          <InputArea>
            <Label htmlFor="name">Nome do Projeto:</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Insira o nome do projeto"
              required
              onChange={handleName}
              value={name}
            />
          </InputArea>
          <InputArea>
            <Label htmlFor="budget">Orçamento do projeto:</Label>
            <Input
              required
              id="budget"
              name="budget"
              type="number"
              min={0}
              placeholder="Insira o orçamento total"
              onChange={handleBudget}
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
            >
              <option>Selecione uma opção</option>
              {categories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </InputArea>
          <ButtonNewProject type="submit" />
        </form>
      </div>
    </Main>
  );
}
