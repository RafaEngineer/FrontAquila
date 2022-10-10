import { NavBar, SearchBar, } from "antd-mobile";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PrestadorCard from "../components/prestador-card.component";
import './search.css'


const Search = () => {
    const navigate = useNavigate();
    const [prestadores, setPrestadores] = useState([]);
    
    useEffect(() => {
        const getPrestadores = async () => {
            const res = await axios('https://projeto-aquila.herokuapp.com/api/prestadores/');
            setPrestadores(res.data);
        }

        getPrestadores();
    }, []);

    const handlePrestadorClick = (id) => {
        navigate(`/prestador/${id}`);
    }

    return (
    <div className="principal">
        <header class="cabecalho">
        <img src="img/Aquila_preto.png"/>      
         <nav  class = " cabecalho-menu ">        
                {/* <a class ="menu-Cabeçalho-item" href="" >Comunidade </a>
                <a class ="menu-Cabeçalho-item" href=""> Tutorial </a>
                <a class ="menu-Cabeçalho-item"  href="">Open Source</a>
                <a class ="menu-Cabeçalho-item" href="">Comandos</a> */}
         </nav> 
   
    </header>
      {/* <div className="pesquisa"> */}
         {/* <NavBar onBack={() => navigate(-1)}>Pesquisa</NavBar> */}
         <SearchBar className="pesquisa" placeholder='Pesquisar' />
      {/* </div>  */}
        <div className="servico">
        {prestadores.map((prestador) => {
            return (
                <PrestadorCard key={prestador.id} prestador={prestador} onClick={handlePrestadorClick}/>
            );
        })}
        </div>
        
       

    </div>

          
    );
}

export default Search;
