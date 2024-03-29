import {
  Container,
  Budget,
  Button,
  Buttons,
  Category,
  ProjectTitle,
  Strong,
} from "./styles";

import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({
  name,
  budget,
  category,
  handleDelete,
  id,
}) {
  const colorsCategories = ["#ffaebc", "#a0e7e5", "#b4f8c8", "#fbe7c"];

  const navigate = useNavigate();

  function deleteProject() {
    handleDelete(id);
  }

  return (
    <Container>
      <ProjectTitle>{name}</ProjectTitle>
      <Budget>
        <Strong>Orçamento:</Strong>R$ {budget}
      </Budget>
      <Category colorBall={colorsCategories[category.id - 1]}>
        {category.name}
      </Category>
      <Buttons>
        <Button onClick={() => navigate(`${id}`)}>
          {<FaPencilAlt />} Editar
        </Button>
        <Button onClick={deleteProject}>{<FaTrash />} Excluir</Button>
      </Buttons>
    </Container>
  );
}
