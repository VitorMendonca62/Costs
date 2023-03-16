import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Container,
  ContainerInfos,
  ContainerService,
  ContainerServiceCard,
  ContainerServices,
  Cost,
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
  ButtonDelete,
} from "./styles";
import loading from "../../assets/imgs/loading.svg";
import Messege from "../../components/Messege";
import { FaTrash } from "react-icons/fa";

export default function Project() {
  const [project, setProject] = useState({});
  const [services, setServices] = useState([]);
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);
  const [description, setDescription] = useState("");
  const [messegeVisible, setMessegeVisible] = useState(false);
  const [messege, setMessege] = useState({});
  const [serviceVisible, setServiceVisible] = useState(false);
  let [idService, setIdService] = useState(0);

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

  const patchProject = async () => {
    try {
      await fetch(`http://localhost:5001/projects/${id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(project),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e, msg) => {
    if (e) e.preventDefault();

    if (project.cost + cost > project.budget) {
      setMessege({
        name: "Orçamento ultrapassado, verifique o valor do serviço!",
        type: "error",
      });
      return;
    }

    const lastElementId = services[services.length - 1]?.id;
    idService += lastElementId ? lastElementId + 1 : 1;

    project.cost += cost;
    project.services.push({ name, cost, description, id: idService });

    patchProject();
    setMessegeVisible(true);
    setMessege({ name: "Serviço adicionado com sucesso", type: "sucess" });
    setCost(0);
    setName("");
    setDescription("");
    setServiceVisible(false);
  };

  const deleteService = async (_idService) => {
    services.splice(_idService - 1, 1);
    setServices(services)
    patchProject();
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
              <Button onClick={() => setServiceVisible(!serviceVisible)}>
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
                    onChange={(e) => setCost(Number(e.target.value))}
                    value={cost}
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
          <TitleService>Serviços:</TitleService>
          <ContainerServices>
            {services.length === 0 ? (
              <p>Não há serviços cadastrados</p>
            ) : (
              services.map((service, index) => (
                <ContainerServiceCard key={index + 1} id={service.id}>
                  <ServiceTitle>{service.name}</ServiceTitle>
                  <Cost>
                    <ServiceStrong>Custo total:</ServiceStrong>R$ {service.cost}
                  </Cost>
                  <Description>{service.description}</Description>
                  <ButtonDelete onClick={() => deleteService(service.id)}>
                    {<FaTrash />} Excluir
                  </ButtonDelete>
                </ContainerServiceCard>
              ))
            )}
          </ContainerServices>
        </Container>
      )}
    </Main>
  );
}
