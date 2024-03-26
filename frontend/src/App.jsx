import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Inicio from "./pages/inicio";
import Login from "./pages/login";
import Register from "./pages/register";
import Portfolio from "./pages/portafolio";
import Profile from "./pages/profile";
import RegisterSoccerField from "./pages/register-soccer-field";
import ReservationDetails from "./pages/reservation-details";
import ReservationForm from "./pages/reservation-form";
import SoccerField from "./pages/soccer-field";

function App() {

  return (
    <>
      <div className="">
          <NavBar></NavBar>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Inicio></Inicio>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
                <Route path='/profile' element={<Profile></Profile>}></Route>
                <Route path='/register-soccer-field' element={<RegisterSoccerField></RegisterSoccerField>}></Route>
                <Route path='/reservation-details' element={<ReservationDetails></ReservationDetails>}></Route>
                <Route path='/reservation-form/:fieldId/:fielName' element={<ReservationForm></ReservationForm>}></Route>
                <Route path='/soccer-field/:field' element={<SoccerField></SoccerField>}></Route>
              </Routes>
            </BrowserRouter>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App
