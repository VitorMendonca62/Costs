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
import ProjectForm from "../../components/layout/ProjectForm";
import ServiceForm from "../../components/ServiceForm";

export default function Project() {
  const [project, setProject] = useState({});
  const [services, setServices] = useState([]);
  const [messege, setMessege] = useState({});

  // States Visilbe
  const [serviceVisible, setServiceVisible] = useState(false);
  const [messegeVisible, setMessegeVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);

  // Forms project
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");

  let idService = 0;

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:5001/projects/${id}`);
        const data = await response.json();

        setProject(data);
        setServices(data.services);

        setName(data.name);
        setBudget(data.budget);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  const patchProject = () => {
    try {
      fetch(`http://localhost:5001/projects/${id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(project),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const storeProject = (e) => {
    e.preventDefault();

    const response = new FormData(e.currentTarget);
    const data = { name: response.get("name"), budget: response.get("budget") };
    storeService();

    for (const attribute in data) {
      project[attribute] = data[attribute];
    }

    setMessege({
      name: "Projeto editado com sucesso!",
      type: "sucess",
    });

    setEditVisible(false);
    patchProject();
  };

  const storeService = (e) => {
    if (e) e.preventDefault();

    const lastElementId = services[services.length - 1]?.id;
    idService += lastElementId ? lastElementId + 1 : 1;

    const response = new FormData(e.currentTarget);
    const cost = Number(response.get("cost"));

    if (project.cost + cost > project.budget) {
      setMessege({
        name: "Orçamento ultrapassado, verifique o valor do serviço!",
        type: "error",
      });
      return;
    }

    const data = {
      name: response.get("nameService"),
      cost,
      description: response.get("description"),
      id: idService,
    };

    project.cost += cost;
    project.services.push(data);

    setServiceVisible(false);
    setMessege({ name: "Serviço adicionado com sucesso", type: "sucess" });
    patchProject();
  };

  const deleteService = async (_idService) => {
    const service = services.splice(_idService - 1, 1)[0];
    project.cost -= service?.cost;
    setServices(services);
    patchProject();

    setMessege({
      name: "Serviço excluido com sucesso!",
      type: "sucess",
    });
  };

  return (
    <Main>
      {!project.id && <img src={loading} alt="" />}
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
            <Button onClick={() => setEditVisible(!editVisible)}>
              {editVisible ? "Fechar" : "Editar projeto"}
            </Button>
          </Header>

          {editVisible ? (
            <ProjectForm
              handleSubmit={storeProject}
              setProject={setProject}
              project={project}
              name={name}
              setName={setName}
              budget={budget}
              setBudget={setBudget}
              category={project.category}
            />
          ) : (
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
          )}

          <ContainerService>
            <Header>
              <TitleService>Adicione um serviço:</TitleService>
              <Button onClick={() => setServiceVisible(!serviceVisible)}>
                {serviceVisible ? "Fechar" : "Adicionar serviço"}
              </Button>
            </Header>
            {serviceVisible && <ServiceForm handleSubmit={storeService} />}
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
