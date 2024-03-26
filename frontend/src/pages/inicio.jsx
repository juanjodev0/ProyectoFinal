import FieldsCards from '../components/fields_card.jsx';
import { useEffect, useState } from "react";
import axios from '../axios/axios.js';

const Inicio = () => {

  // hock
  const [lista, setLista] = useState([]);
  const consultaApi = async () => {
    const respuesta = await axios.get("http://localhost:4000/api/fields");  
    setLista(respuesta.data);
    console.log(respuesta.data);
  }

  useEffect(() => {
    consultaApi();
  }, []);

  return (
    <div>
      <section className="bg-[url('background-principal.png')] bg-contain text-white body-font">
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-5xl text-7xl font-medium title-font mt-4 mb-4 poppins-bold text-white">Juega Como Profesional</h1>
      <p className="lg:w-2/3 text-2xl	 mx-auto poppins-regular leading-relaxed">En cualquier parte de Colombia</p>
      <button className="flex mx-auto mt-2 text-white bg-gradient-to-r rounded-3xl from-primary to-secundary border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg poppins-regular">Reserva ahora</button>
    </div>
    <div className="bg flex flex-wrap bg-black rounded-3xl bg-opacity-40">
      <div className="xl:w-1/3 lg:w-1/2 md:w-full 3x-8 py-4 pl-14 ml-00 border-gray-200 border-opacity-60">
      <a className="inline-flex items-center">
          <img alt="blog" src="caracteristicas1.png" className="w-24 h-12 rounded-full flex-shrink-0 object-cover object-center"></img>
          <span className="flex-grow flex flex-col">
            <p className="text-xl -mb-1 title-font text-left font-medium text-white poppins-regular">Rapidez</p>
            <p className="text-base	mt-1 text-white text-left t poppins-regular">Reserva tu cancha en segundos,<br></br>
sin llamadas ni filas.  </p>
          </span>
        </a>
      </div>
      <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-4 border-l-2 border-gray-200 border-opacity-60">
      <a className="inline-flex items-center">
          <img alt="blog" src="caracteristicas2.png" className="w-24 h-12 rounded-full flex-shrink-0 object-cover object-center"></img>
          <span className="flex-grow flex flex-col">
            <p className="text-xl -mb-1 title-font text-left font-medium text-white poppins-regular">Comodidad</p>
            <p className="text-base	mt-1 text-white text-left t poppins-regular">Accede a la app desde cualquier lugar y a cualquier hora.</p>
          </span>
        </a>
      </div>
      <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-4 border-l-2 border-gray-200 border-opacity-60">
      <a className="inline-flex items-center">
          <img alt="blog" src="caracteristicas3.png" className="w-24 h-12 rounded-full flex-shrink-0 object-cover object-center"></img>
          <span className="flex-grow flex flex-col">
            <p className="text-xl -mb-1 title-font text-left font-medium text-white poppins-regular">Seguridad</p>
            <p className="text-base	mt-1 text-white text-left t poppins-regular">Paga con tarjeta de forma segura y sin efectivo.</p>
          </span>
        </a>
      </div>
    </div>
  </div>
</section>

<section className="m-20 ext-gray-600 body-font">
<h1 class="sm:text-5xl text-7xl font-medium title-font mt-4 text-center poppins-bold text-dark-color">Canchas disponibles</h1>
<div className="containe py-12">
              <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              {lista.map((elemento, index) => (
                <FieldsCards key={index} fieldInformation={elemento} />
              ))}
              </div>
            </div>
</section>
    </div>
  )
}

export default Inicio
