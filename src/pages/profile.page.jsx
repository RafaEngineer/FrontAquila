import { CapsuleTabs, NavBar } from "antd-mobile";
import { useNavigate } from "react-router";
import EditProfile from "../components/edit-profile.component";

const Profile = () => {
  const navigate = useNavigate();

    return (
    <>
    {/* <NavBar onBack={() => navigate(-1)}>Perfil</NavBar> */}
    <header class="cabecalho">
    <img src="img/Aquila_preto.png"/>
        <nav  class = " cabecalho-menu ">        
            {/* <a class ="menu-Cabeçalho-item" href="" >Comunidade </a>
            <a class ="menu-Cabeçalho-item" href=""> Tutorial </a>
            <a class ="menu-Cabeçalho-item"  href="">Open Source</a>
            <a class ="menu-Cabeçalho-item" href="">Comandos</a> */}
        </nav> 
   
    </header>
    <CapsuleTabs>
      <CapsuleTabs.Tab title='Editar perfil' key='edit-profile' destroyOnClose={true}>
          <EditProfile/>
      </CapsuleTabs.Tab>

      <CapsuleTabs.Tab title='Meios de pagamento' key='meios-pagamento' destroyOnClose={true}>
        Meios de Pagamento
      </CapsuleTabs.Tab>
    </CapsuleTabs>
    </>
    );
}

export default Profile;
