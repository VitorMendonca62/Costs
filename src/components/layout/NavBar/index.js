import ImageLogo from "../../../assets/imgs/logo.png";
import { Link } from "react-router-dom";

import { Header, Container, Logo, List, Item } from "./styles";

import { paths } from "../../../contants/paths";

export default function NavBar() {
  const items = [
    { title: "Home", link: paths.home },
    { title: "Projetos", link: paths.projects },
    { title: "Empresas", link: paths.company },
    { title: "Contato", link: paths.contact },
  ];

  return (
    <Header>
      <Container>
        <Link to="/">
          <Logo src={ImageLogo} />
        </Link>
        <nav>
          <List>
            {items.map((item, index) => (
              <Item key={index}>
                <Link to={item.link}>{item.title} </Link>
              </Item>
            ))}
          </List>
        </nav>
      </Container>
    </Header>
  );
}
