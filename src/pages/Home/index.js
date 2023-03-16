import { Description, Image, Main, Mark, Title } from "./styles";

import ButtonNewProject from "../../components/ButtonNewProject";
import { paths } from "../../contants/paths";
import ImageMain from "../../assets/imgs/main-image.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Main>
      <Title>
        Bem vindo ao <Mark>Costs</Mark>
      </Title>
      <Description>
        Comece a gerenciar os seus projetos agora mesmo!
      </Description>
      <Link to={paths.newProject}>
        <ButtonNewProject />
      </Link>
      <Image src={ImageMain} />
    </Main>
  );
}
