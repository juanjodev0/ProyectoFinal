import React from 'react';
import { useEffect } from "react";
import axios from 'axios';
import '../styles/soccer-field-form.css';
import logoGoat from '../../public/logo-goat.png';

const SoccerFieldForm = () =>{

    const centrado = 'w-full flex justify-center content-center';

    //hock
    useEffect(() => {
        const handleEvent = (event)=>{
            event.preventDefault();
            const data = Object.fromEntries(new FormData(event.target));
            let valores = Object.values(data);
            console.log(valores);

            try{
                const envioApi = async () => {
                    const response = await axios.post('http://localhost:4000/api/fields', {
                    "field_id" : 0,
                    "field_name" : valores[0],
                    "surface_type" : valores[3],
                    "price_per_hour" : valores[2],
                    "available_hours" : valores[4],
                    "image_field" : valores[6],
                    })
                    console.log(response);
                }
                envioApi();
            } catch (err){
                console.error('ocurrio un error enviando los datos');
            }
    };

    const formulario = document.querySelector("#soccer-field-form");

    formulario.addEventListener("submit", handleEvent);

    return () => {
        formulario.removeEventListener('submit', handleEvent);
    };
    },[]);

    return(
        <div className='w-full flex justify-center content-center my-16'>
            <form id='soccer-field-form'>
                <div className='container-secondary w-full flex justify-center items-center'>
                    <div className='container-third w-full flex justify-center content-center mx-12 mb-12'>
                        <div className='w-full'>
                            <h1 className='font-bold text-black mb-4 text-4xl'>Información de registro</h1>
                            <div className='container-form flex'>
                                <div className='flex flex-col me-4'>
                                    <label for="nombre-cancha">Nombre Cancha:</label>
                                    <input className='reservation-details__input max-w-screen-2xl w-60 rounded-xl px-1' type="text" id="nombre-cancha" name="nombre-cancha"/>
                                </div>
                                <div className='flex flex-col'>
                                    <label for="ciudad">Ciudad:</label>
                                    <input className='reservation-details__input max-w-screen-2xl w-60 rounded-xl px-1' type="text" id="ciudad" name="ciudad"/>
                                </div>
                            </div>
                            <div className='container-form flex mt-2'>
                                <div className='flex flex-col me-4'>
                                    <label for="precio-hora">Precio por hora:</label>
                                    <input className='reservation-details__input max-w-screen-2xl w-60 rounded-xl px-1' type="text" id="precio-hora" name="precio-hora"/>
                                </div>
                                <div className='flex flex-col'>
                                    <label for="tipo-superficie">Tipo de superficie:</label>
                                    <input className='reservation-details__input max-w-screen-2xl w-60 rounded-xl px-1' type="text" id="tipo-superficie" name="tipo-superficie"/>
                                </div>
                            </div>
                            <div className='container-form flex mt-2'>
                                <div className='flex flex-col me-4'>
                                    <label for="horas-disponibles">Horas dispoibles:</label>
                                    <input className='reservation-details__input max-w-screen-2xl w-60 rounded-xl px-1' type="text" id="horas-disponibles" name="horas-disponibles"/>
                                </div>
                                <div className='flex flex-col'>
                                    <label for="cantidad-jugadores">Cantidad de jugadores:</label>
                                    <input className='reservation-details__input max-w-screen w-60 rounded-xl px-1' type="text" id="cantidad-jugadores" name="cantidad-jugadores"/>
                                </div>
                            </div>
                            <div className='container-form-img flex mt-2 w-full'>
                                <div className='flex flex-col w-full'>
                                    <label for="fotos-cancha">Cargar fotos de canchas:</label>
                                    <input className='input-img w-full reservation-details__input max-w-screen w-60 rounded-xl px-1 bg-white border-none' type="file" id="fotos-cancha" name="fotos-cancha" accept="image/*"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-rev flex flex-col-reverse lg:flex-col'>
                        <img className='h-24 flex justify-center content-center my-12' src={logoGoat} alt='logo Goat' />
                        <button type='submit' className='rounded-xl text-white bg-gradient-to-r from-secundary to-primary mt-3.5 p-0.5 text-white text-2xl w-64'>Agregar cancha</button>
                    </div>  
                </div>
            </form>
        </div>
    );
};

export default SoccerFieldForm;