import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/teams-inputs.css';

const FieldsCards = (props) =>{
    return(
        <div className="shadow-lg rounded-b-2xl sm:w-1/3 mb-10 box-border h120 w-32">
            <div className="rounded-lg grid place-items-center overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-96 " src="cancha.png"></img>
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 poppins-semibold">{props.fieldInformation.field_name}</h2>
            <h3 className="leading-relaxed text-base text-primary poppins-medium bg-dark-color bg-opacity-10 mb-2">Valor: $<span className="poppins-regular text-dark-color">{props.fieldInformation.price_per_hour}</span></h3>
            <a className="inline-flex items-center">
                <img alt="blog" src="ubicacion.png" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"></img>
                <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900 poppins-regular">Armenia - Quindio</span>
                </span>
            </a>
            <Link to={`/soccer-field/${props.fieldInformation.field_id}`}>
                <button className="flex mx-auto mt-2 text-white bg-gradient-to-r rounded-3xl from-primary to-secundary border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg poppins-regular">
                Reserva ahora
                </button>
            </Link>
        </div>
    );
};

export default FieldsCards;