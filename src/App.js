import { useContext } from "react";
import "./App.css";
//import {userAutContext} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import Navigation from "./components/navigation.component";
import StripeContainer from "./components/stripe-container.component";
//import { UserContext } from "./contexts/user.context";
import { useUserAuth } from "./contexts/UserAuthContext";
import Agendamentos from "./pages/agendamentos.page";
import Authenticate from "./pages/authentication.page";
import Favourites from "./pages/favourites.page";
import Map from "./pages/map.page";
import PrestadorDetail from "./pages/prestador-detail.page";
import Profile from "./pages/profile.page";
import Search from "./pages/search.page";
import ServicoDetail from "./pages/servico-detail.page";
import Signup from "./pages/Signup";

const App = () => {
  //const {currentUser} = useContext(UserContext);
  const {currentUser} =  useUserAuth(useContext);

  if (currentUser) {
    return (
      <Routes>
        <Route exact path='/' element={<Navigate to='/map'/>}></Route>
        <Route exact path='/' element={<Navigation/>}>
            <Route exact path='/map' element={<Map/>}/>
            <Route exact path='/search' element={<Search/>}/>
            <Route exact path='/appointments' element={<Agendamentos/>}/>
            <Route exact path='/favourites' element={<Favourites/>}/>
            <Route exact path='/profile' element={<Profile/>}/>
            <Route exact path='/prestador/:id' element={<PrestadorDetail/>}/>
            <Route exact path='/servico/:id' element={<ServicoDetail/>}/>
            <Route exact path='/payment' element={<StripeContainer/>}/>
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path='*' element={<Navigate to='/'/>}/>
        <Route path='/' element={<Authenticate/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    )
  }
}

export default App;
