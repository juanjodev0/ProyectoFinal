import React from 'react';
import '../styles/teams-forms.css';
import Teams from './teams-inputs.jsx';
import logoGoat from '../../public/logo-goat.png';

const TeamsForm = () =>{

    const centrado = 'w-full flex justify-center content-center';

    return(
        <div className={centrado}>
            <div className='w-4/5 mb-10 p-4 rounded-3xl shadow-xl bg-gray-400'>
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
                                    <input className='reservation-details__input w-60 rounded-xl px-1 me-4' type="text" id="dia" name="dia"/>
                                </div>
                                <div className='flex flex-col ms-4'>
                                    <label for="cancha">Cancha</label>
                                    <input className='reservation-details__input w-60 rounded-xl px-1' type="text" id="cancha" name="cancha" value={''} readonly/>
                                </div>
                            </div>
                            <div className='container-form flex mt-2'>
                                <div className='flex flex-col ms-4'>
                                    <label for="horaInicio">Hora inicio</label>
                                    <input className='reservation-details__input w-60 rounded-xl px-1 me-4' type="text" id="horaInicio" name="horaInicio" value={''} readonly/>
                                </div>
                                <div className='flex flex-col ms-4'>
                                    <label for="horaFin">Hora fin</label>
                                    <input className='reservation-details__input w-60 rounded-xl px-1' type="text" id="horaFin" name="horaFin" value={''} readonly/>
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