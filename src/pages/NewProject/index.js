import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectForm from "../../components/layout/ProjectForm";
import { Main, Title, Description } from "./styles";

import { paths } from "../../contants/paths";

export default function NewProjects() {
  const navigate = useNavigate();

  const [project, setProject] = useState({});

  const storeProject = async (e) => {
    e.preventDefault();

    const response = new FormData(e.currentTarget);
    const data = { name: response.get("name"), budget: response.get("budget") };

    for (const atributte in data) {
      project[atributte] = data[atributte];
    }

    project.cost = 0;
    project.services = [];
    
    try {
      fetch("http://localhost:5001/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });
      navigate(paths.projects, {
        state: { message: "Projeto criado com sucesso", type: "sucess" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      <div>
        <Title>Criar Projeto</Title>
        <Description>
          Crie seu projeto para depois adicionar os serviços
        </Description>
        <ProjectForm
          handleSubmit={storeProject}
          setProject={setProject}
          project={project}
        />
      </div>
    </Main>
  );
}
