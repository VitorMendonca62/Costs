import { Link, useLocation } from "react-router-dom";
import ButtonNewProject from "../../components/ButtonNewProject";
import loading from "../../assets/imgs/loading.svg";
import ProjectCard from "../../components/ProjectCard";
import Messege from "../../components/Messege";

import { Container, ContainerProjects, Header, Main, Title } from "./styles";

import { paths } from "../../constants/paths";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [messege, setMessege] = useState({});
  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5001/projects");
        const data = await response.json();
        setProjects(data);
        setRemoveLoading(true);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

    if (location.state) {
      setMessege({ name: location.state.message, type: location.state.type });
    }
  }, []);

  function deleteProject(id) {
    try {
      fetch(`http://localhost:5001/projects/${id}`, {
        method: "DELETE",
      });
      setProjects(projects.filter((project) => project.id !== id));
      setMessege({
        name: "O projeto foi excluido com sucesso",
        type: "sucess",
      });
      setVisible(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Main>
      <Container>
        {messege && (
          <Messege visible={visible} setVisible={setVisible} msg={messege} />
        )}
        <Header>
          <Title>Projetos</Title>
          <Link to={paths.newProject}>
            <ButtonNewProject />
          </Link>
        </Header>
        <ContainerProjects>
          {projects.length > 0 &&
            projects.map((item) => (
              <ProjectCard
                key={item.id}
                budget={item.budget}
                category={item.category}
                name={item.name}
                handleDelete={deleteProject}
                id={item.id}
              />
            ))}
        </ContainerProjects>

        {!removeLoading && <img src={loading} alt="" />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </Main>
  );
}
