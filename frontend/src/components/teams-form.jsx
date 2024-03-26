import React from 'react';
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"
import axios from '../axios/axios.js';
import '../styles/teams-forms.css';
import Teams from './teams-inputs.jsx';
import logoGoat from '../../public/logo-goat.png';

const TeamsForm = ({fieldId, fieldName}) =>{

    const centrado = 'w-full flex justify-center content-center';

    // Obtener el token de acceso del localStorage (o de donde esté almacenado)
    const token = localStorage.getItem('authToken');

    // Decodificar el token para obtener la información contenida en él
    var userId = '';
    if (token) {
        try {
        const decodedToken = jwtDecode(token);
        userId = decodedToken.userId; // Suponiendo que el token contiene el ID del usuario
        // console.log(decodedToken); // Mostrar el ID del usuario
        } catch (error) {
        console.error('Error al decodificar el token:', error.message);
        }
    } else {
        console.error('No se encontró el token de acceso.');
    }
    // console.log(userId);


    //hock
    useEffect(() => {
        const handleEvent = (event)=>{
            event.preventDefault();
            const data = Object.fromEntries(new FormData(event.target));
            let valores = Object.values(data);
            console.log(valores);

            try{
                const envioApi = async () => {
                    const response = await axios.post('http://localhost:4000/api/reservation', {
                    "user_id": userId,
                    "field_id" : fieldId,
                    "date" : valores[7],
                    "start_time" : valores[9],
                    "end_time" : valores[10],
                    } )
                    console.log(response);
                }            
                envioApi();
            } catch (err){
                console.error('ocurrio un error enviando los datos');
            }


        };

        const formulario = document.querySelector("#team-form");

        formulario.addEventListener("submit", handleEvent);

        return () => {
            formulario.removeEventListener('submit', handleEvent);
        };
    },[]);

    return(
        <div className={centrado}>
            <div className='w-4/5 mb-10 p-4 rounded-3xl shadow-xl'>
                <div className={`${centrado} mb-8`}>
                    <img className='h-16 flex justify-center content-center' src={logoGoat} alt='logo Goat' />
                </div>
                <form id='team-form'>
                    <div className='flex flex-col justify-center content-center mb-4 lg:flex-row'>
                        <div>
                            <Teams className='titulo' titulo = {'Equipo 1'} cantidad = {7} />
                        </div>
                        <div className='vs py-4 px-4 font-bold text-7xl lg:py-40 lg:text-4xl'>
                            <h2>VS</h2>
                        </div>
                        <div>
                            <Teams className='titulo' titulo = {'Equipo 2'} cantidad = {7} />
                        </div>
                    </div>

                    <div className={centrado}>
                        <div className='mb-2'>
                            <h4 className='text-center text-4xl font-medium mb-4'>Detalles de reserva</h4>
                            <div className='container-form flex'>
                                <div className='flex flex-col ms-4'>
                                    <label for="dia">Día</label>
                                    <input className='reservation-details__input w-60 rounded-xl px-1 me-4' type="date" id="dia" name="dia"/>
                                </div>
                                <div className='flex flex-col ms-4'>
                                    <label for="cancha">Cancha</label>
                                    <input className='reservation-details__input w-60 rounded-xl px-1' type="text" id="cancha" name="cancha" value={fieldId} readonly/>
                                </div>
                            </div>
                            <div className='container-form flex mt-2'>
                                <div className='flex flex-col ms-4'>
                                    <label for="horaInicio">Hora inicio</label>
                                    <input className='reservation-details__input w-60 rounded-xl px-1 me-4' type="text" id="horaInicio" name="horaInicio"/>
                                </div>
                                <div className='flex flex-col ms-4'>
                                    <label for="horaFin">Hora fin</label>
                                    <input className='reservation-details__input w-60 rounded-xl px-1' type="text" id="horaFin" name="horaFin"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={centrado}>
                        <button className='rounded-xl text-white bg-gradient-to-r from-secundary to-primary mt-3.5 p-0.5 text-white text-2xl w-64' type='submit'>Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TeamsForm;