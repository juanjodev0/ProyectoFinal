import { Link } from "react-router-dom";
import React from 'react';

const NavBar = () => {
  
    
  return (
    <>
        <header className="text-gray-600 body-font bg-white shadow-lg rounded-b-2xl">
  <div className="drop-shadow-lg container mx-auto flex flex-wrap p-2 pt-3 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 lg:mb-4 md:mb-0">
     
      <img className="w-28 lg:ml-36 w-10" src="../../public/logo.png" alt="logo Goat"></img>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      
    </nav>
    <div className="lg:mr-36">
    <a href="/login" className="poppins-regular text-center	w-32 rounded-2xl text-white bg-gradient-to-r from-primary to-secundary m-2 inline-flex items-center bg-gray-100 border-0 py-1 px-8 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Acceder
      
    </a>
    <a href="/register" className="poppins-regular text-center	w-32 rounded-2xl text-white bg-gradient-to-r from-primary to-secundary m-2 inline-flex items-center bg-gray-100 border-0 py-1 px-6 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Registrarse
    </a>
    </div>
  </div>
</header>
    </>
  )
}

export default NavBar;

