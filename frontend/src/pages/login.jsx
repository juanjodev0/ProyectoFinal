import { useEffect } from "react";
import axios from 'axios';

const Login = () => {

  //hock
  useEffect(() => {
    const handleEvent = (event)=>{
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));
        let valores = Object.values(data);
        console.log(valores);

        try{
            const envioApi = async () => {
                const response = await axios.post('http://localhost:4000/api/users/login', {
                "username" : valores[0],
                "password" : valores[1],
                })
                console.log(response);
            }
            envioApi();
        } catch (err){
            console.error('ocurrio un error enviando los datos');
        }


    };

    const formulario = document.querySelector("#login-form");

    formulario.addEventListener("submit", handleEvent);

    return () => {
        formulario.removeEventListener('submit', handleEvent);
    };
    },[]);

    return (
      <div>
        <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap items-center">
   
        <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg  md:ml-auto mt-10 md:mt-0">
        
          <div className=" flex flex-col lg:m-24 h-220 w-100 shadow-lg rounded-b-2xl">
            <img className="w-80 object-cover object-center place-items-center flex mx-auto" src="logo-negro.png" alt="logo Goat"></img>
            <form id='login-form'>
            <div className="relative mb-4 lg:mx-40">
              <label for="full-name" className="leading-7 text-sm text-gray-600">Usuario</label>
              <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
            </div>
            <div className="relative mb-4 lg:mx-40 sm:mx20">
              <label for="pass" className="leading-7 text-sm text-gray-600">Contraseña</label>
              <input type="password" id="pass" name="pass" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
            </div>
            <button type="submit" className="flex mx-auto mt-2 text-white bg-gradient-to-r rounded-3xl from-primary to-secundary border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg poppins-regular">Iniciar Sesion</button>
            </form>
            <h3 className="flex mx-auto mt-2 leading-relaxed text-base text-primary poppins-medium mb-2">Registrarse</h3>
          </div>
        </div>
        <div className="bg-gradient-to-r pt-10 from-secundary to-primary flex justify-center lg:w-3/3 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <img className="w-full" src="goat-login.png" alt="logo Goat"></img>
        </div>
        </div>
        </section>
      </div>
    )
  }
  
  export default Login