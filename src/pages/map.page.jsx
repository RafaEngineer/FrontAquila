import { NavBar } from "antd-mobile";
import React from 'react';
import './map.css';


class Map extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
        latitude: null,
        longitude: null,
        userEndereco: null
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCordenadas = this.getCordenadas.bind(this);
 }
 getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getCordenadas, this.handleLocationError);
    }else {
        alert("Geolocalização não é suportada nesse navegador");
    }
 }
 getCordenadas(position) {
    this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    })
 }

 handleLocationError(error){

        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert("O usuário negou a solicitação de geolocalização.")
            break;
          case error.POSITION_UNAVAILABLE:
            alert("As informações de localização não estão disponíveis.")
            break;
          case error.TIMEOUT:
            alert("A solicitação para obter a localização do usuário expirou.")
            break;
          case error.UNKNOWN_ERROR:
            alert("Ocorreu um erro desconhecido.")
            break;
            default:
            alert("Ocorreu um erro desconhecido")
      }
 }
render() {
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
          <main >

              <div className="centro"><h1>Mapa</h1> </div> 
            <div className="container">             

              <div>           
                <p>latitude: {this.state.latitude}</p>
                <p>longitude: {this.state.longitude}</p>
                <p>Endereço:{this.state.userEndereco}</p>
                <button onClick={this.getLocation}>Localização atual</button>
              </div>
              {
                  this.state.latitude && this.state.longitude ?
                  <img src={''} alt=''/> : null
              }       
            

          </div>


       </main>
       </div>
    );
    }
}
export default Map;