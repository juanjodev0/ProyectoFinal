import { useEffect, useState } from "react";
import axios from '../axios/axios.js';
import FieldsCards from '../components/fields_card.jsx';


const Portfolio = () => {

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
            <div className="flex flex-col text-center w-full ">
              <h1 className="sm:text-5xl text-7xl font-medium title-font mt-4 mb-4 poppins-bold text-white">Juega Como Profesional</h1>
              <p className="lg:w-2/3 text-2xl	 mx-auto poppins-regular leading-relaxed">En cualquier parte de Colombia</p>
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
  
  export default Portfolio