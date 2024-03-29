import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  Container,
  List,
  Item,
  Copyright,
  Mark,
  FooterContainer,
} from "./styles";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const items = [
    { social: <FaFacebook />, direc: "/" },
    { social: <FaInstagram />, direc: "/" },
    { social: <FaLinkedin />, direc: "/" },
  ];

  return (
    <FooterContainer>
      <Container>
        <nav>
          <List>
            {items.map((item, index) => (
              <Item key={index}>
                <Link to={item.direc}>{item.social}</Link>
              </Item>
            ))}
          </List>
        </nav>
        <Copyright>
          <Mark>Costs</Mark> © {year}
        </Copyright>
      </Container>
    </FooterContainer>
  );
}
