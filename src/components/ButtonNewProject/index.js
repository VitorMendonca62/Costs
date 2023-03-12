import { Link } from "react-router-dom";
import { Button } from "./styles";

export default function ButtonNewProject({ link }) {
  return (
    <Link to={link}>
      <Button>Criar Projeto</Button>
    </Link>
  );
}
