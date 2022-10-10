import axios from "axios";
import { useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from "react";
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGoogleRedirect, signInWithEmailAndPasswords } from "../utils/firebase/firebase.utils";
import GoogleButton from "react-google-button";
import { AutoCenter, Space } from "antd-mobile";
import './authentication.css';
import 'firebase/auth';


const Authenticate = () => {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();
    

    function logar(){

        signInWithEmailAndPasswords(email, senha).then(resultado => {
            setMsgTipo('sucesso')    
            setTimeout(() =>{
                dispatch({type: 'LOG_IN', usuarioEmail: email})       
            },2000);            
        }).catch(erro => {
            setMsgTipo('erro')
        });      
            
    }

    useEffect(() => {
        const authenticate = async () => {
            const response = await getRedirectResult(auth);

            if(response) {
                await axios.post('https://projeto-aquila.herokuapp.com/api/users/', {
                    'id': response.user.uid,
                    'name': response.user.displayName,
                    'email': response.user.email
                });
            }
        }

        authenticate();
    }, []);

    // return (

        return(
            <div>               
    
                <main>
    
                    <div className="card-post" >
                     <div className="logo">
                     <img src="img/Aquila_preto.png"/>
                     </div>
                    
                        <div className="line-post" ></div>
    
                        <div className="card-body-post" >
    
                            <form >
    
                                <div className="fields" >
                                    <label>Email</label>
                                    <input onChange={(e) => setEmail(e.target.value) } type="email" name="email" id="inputEmail" class="form-control my-2" placeholder="Email"/>                                    
                                    <input type="email" name="email" placeholder="Email"/>                                    
                                </div>
    
                                <div className="fields" >
                                    <label>senha</label>
                                    <input onChange={(e) => setSenha(e.target.value) }type="password" name="description" id="inputPassword" class="form-control my-2" placeholder="Senha"/>         
                                    <input type="password" name="description" id="inputPassword"/>                            
                                </div>   
                                
                                <div className="btn-post" >
                                    <button  onClick={logar} type="submit" >Enviar</button>
                                </div>
                                <div className="enter">
                                <GoogleButton label="Entrar com Google" onClick={signInWithGoogleRedirect}></GoogleButton>
                                </div>
    
                            </form>
    
                        </div>
    
                    </div>
    
                </main>
    
            </div>
        )
    }
    
        
        
        
        // <div className="container">
        //      <header >
        //       <img src="img/Aquila_preto.png"/>
        //     </header>          
        //     <div>
        //     <form>
        //     <label>Email</label>
        //       <input type="text" name="email" placeholder="email" />
        //       <label>Senha</label>
        //       <input type="text" name="passoword" placeholder="senha" />              
        //     </form>
        //     <button type="submit">Enviar</button>
        //     </div>
           
        //     <GoogleButton label="Entrar com Google" onClick={signInWithGoogleRedirect}></GoogleButton>
            {/* <AutoCenter>
                <Space direction="vertical">
                    <AutoCenter>
                    
                    </AutoCenter>
                    
                </Space>
            </AutoCenter> */}
//         </div>
//     );
// }

export default Authenticate;
