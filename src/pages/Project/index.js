import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Container,
  ContainerInfos,
  ContainerService,
  ContainerServiceCard,
  ContainerServices,
  Cust,
  Description,
  Header,
  Infos,
  Input,
  InputArea,
  Label,
  Main,
  ServiceStrong,
  ServiceTitle,
  Strong,
  Title,
  TitleService,
} from "./styles";
import loading from "../../assets/imgs/loading.svg";
import Messege from "../../components/Messege";

export default function Project() {
  const [project, setProject] = useState({});
  const [services, setServices] = useState([]);
  const [name, setName] = useState("");
  const [cust, setCust] = useState("");
  const [description, setDescription] = useState("");
  const [messegeVisible, setMessegeVisible] = useState(false);
  const [messege, setMessege] = useState("");
  const [type, setType] = useState("");
  const [serviceVisible, setServiceVisible] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:5001/projects/${id}`);
        const data = await response.json();
        setProject(data);
        setServices(data.services);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    project.services.push({ name, cust, description });

    try {
      await fetch(`http://localhost:5001/projects/${id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(project),
      });
      setMessegeVisible(true);
      setType("sucess");
      setMessege("Serviço adicionado com sucesso");
      setCust("");
      setName("");
      setDescription("");
      setServiceVisible(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleServiceVisible = (e) => {
    setServiceVisible(!serviceVisible);
  };

  return (
    <Main>
      {!project.id && <img src={loading} />}
      {!!project.id && (
        <Container>
          {messege && (
            <Messege
              visible={messegeVisible}
              setVisible={setMessegeVisible}
              type={type}
              msg={messege}
            />
          )}
          <Header>
            <Title>Projeto: {project.name}</Title>
            <Button>Editar projeto</Button>
          </Header>
          <ContainerInfos>
            <Infos>
              <Strong>Categoria: </Strong>
              {project.category?.name}
            </Infos>
            <Infos>
              <Strong>Total do orçamento: </Strong>
              R$ {project.budget}
            </Infos>
            <Infos>
              <Strong>Total utilizado: </Strong>
              R$ {project.cost}
            </Infos>
          </ContainerInfos>
          <ContainerService>
            <Header>
              <TitleService>Adicione um serviço:</TitleService>
              <Button onClick={handleServiceVisible}>
                {serviceVisible ? "Fechar" : "Adicionar serviço"}
              </Button>
            </Header>
            {serviceVisible && (
              <form onSubmit={handleSubmit}>
                <InputArea>
                  <Label htmlFor="name">Nome do serviço:</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Insira o nome do serviço"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
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
                    onChange={(e) => setCust(e.target.value)}
                    value={cust}
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
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </InputArea>
                <Button type="submit">Adicionar serviço</Button>
              </form>
            )}
          </ContainerService>
          <TitleService>Adicione um serviço:</TitleService>
          <ContainerServices>
            {services.map((service) => (
              <ContainerServiceCard>
                <ServiceTitle>{service.name}</ServiceTitle>
                <Cust>
                  <ServiceStrong>Custo total:</ServiceStrong>R$ {service.cust}
                </Cust>
                <Description>{service.description}</Description>
              </ContainerServiceCard>
            ))}
          </ContainerServices>
        </Container>
      )}
    </Main>
  );
}
