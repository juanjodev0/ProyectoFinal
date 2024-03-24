import React from 'react';
import '../styles/reservation-details.css';
import Teams from './teams-inputs.jsx';
import nombreGoat from '../../public/nombre-goat.png';
import logotipoBlanco from '../../public/imagotipo-blanco.png';
import logotipoBlancoRev from '../../public/imagotipo-blanco-rev.png';

const ResDetails = () =>{

    const centrado = 'w-full flex justify-center content-center';

    return(
        <div className={`${centrado} main-container`}>
            <div className='w-full my-5'>
                <div className={`${centrado} mb-8`}>
                    <img className='h-24 flex justify-center content-center' src={nombreGoat} alt='nombre Goat' />
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

                    <div className='w-full flex justify-between content-center'>
                        <div>
                            <img className='img-logo h-64' src={logotipoBlancoRev} alt='logotipo blanco' />
                        </div>
                        <div className='mb-2 bg-white p-5 rounded-2xl'>
                            <h4 className='text-center text-4xl font-medium mb-4'>Detalles de reserva</h4>
                            <div className='container-form flex flex-col lg:flex-row'>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row ms-4'>
                                        <label for="nombre">Reserva:</label>
                                        <input className='w-60 rounded-xl px-1 me-4' type="text" id="nombre" name="nombre" value={'PRUEBA'} readonly/>
                                    </div>
                                    <div className='mt-2 flex flex-row ms-4'>
                                        <label for="hora">Hora:</label>
                                        <input className='w-60 rounded-xl px-1 me-4' type="text" id="hora" name="hora" value={'PRUEBA'} readonly/>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row ms-4'>
                                        <label for="dia">Día:</label>
                                        <input className='w-60 rounded-xl px-1 me-4' type="text" id="dia" name="dia" value={'PRUEBA'} readonly/>
                                    </div>
                                    <div className='mt-2 flex flex-row ms-4'>
                                        <label for="direccion">Dirección:</label>
                                        <input className='w-60 rounded-xl px-1 me-4' type="text" id="direccion" name="direccion" value={'PRUEBA'} readonly/>
                                    </div>
                                </div>
                            </div>
                            <div className={`${centrado} mt-4`}>
                                <button className='rounded-xl text-white bg-gradient-to-r from-secundary to-primary mt-3.5 p-0.5 text-white text-2xl w-64' type='submit'>Compartir</button>
                            </div>
                        </div>
                        <div>
                            <img className='img-logo h-64' src={logotipoBlanco} alt='logotipo blanco' /> 
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResDetails;