import { AutoCenter, NavBar } from 'antd-mobile';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import AgendamentoCard from '../components/agendamento-card.component';
import { UserContext } from '../contexts/user.context';

const Agendamentos = () => {
    const navigate = useNavigate();

    const {currentUser} = useContext(UserContext);
    const [agendamentos, setAgendamentos] = useState([]);

    useEffect(() => {
        const getAgendamentos = async () => {
            const res = await axios.get(`https://projeto-aquila.herokuapp.com/api/agendamentos/user/${currentUser.uid}`);

            setAgendamentos(res.data);
        }

        getAgendamentos();
    }, []);

    return (
        <div>
         <header class="cabecalho">
         <img src="img/Aquila_preto.png"/>          
            <nav  class = " cabecalho-menu ">
        
                {/* <a class ="menu-Cabeçalho-item" href="" >Comunidade </a>
                <a class ="menu-Cabeçalho-item" href=""> Tutorial </a>
                <a class ="menu-Cabeçalho-item"  href="">Open Source</a>
                <a class ="menu-Cabeçalho-item" href="">Comandos</a> */}
          </nav> 
   
    </header>
            {/* <NavBar onBack={() => navigate(-1)}>
                Agendamentos
            </NavBar> */}
            {agendamentos.length > 0 ? (
                <h1>{agendamentos.map((agendamento, index)=> {
                    return (
                        <AgendamentoCard key={index} agendamentoId={agendamento.id}/>
                    );
                })}</h1>
            ) : (
                <AutoCenter><h2 stlye={{marginTop: '20px'}}>Você não possui nenhum agendamento</h2></AutoCenter>
            )}
        </div>
    );
}

export default Agendamentos;
