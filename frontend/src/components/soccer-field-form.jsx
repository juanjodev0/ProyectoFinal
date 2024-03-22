import React from 'react';
import '../styles/soccer-field-form.css';
import logoGoat from '../../public/logo-goat.png';

const SoccerFieldForm = () =>{

    const centrado = 'w-full flex justify-center content-center';

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
                                    <input className='reservation-details__input max-w-screen-2xl w-60 rounded-xl px-1' type="text" id="ciudad" name="ciudad" readonly/>
                                </div>
                            </div>
                            <div className='container-form flex mt-2'>
                                <div className='flex flex-col me-4'>
                                    <label for="precio-hora">Precio por hora:</label>
                                    <input className='reservation-details__input max-w-screen-2xl w-60 rounded-xl px-1' type="text" id="precio-hora" name="precio-hora" readonly/>
                                </div>
                                <div className='flex flex-col'>
                                    <label for="tipo-superficie">Tipo de superficie:</label>
                                    <input className='reservation-details__input max-w-screen-2xl w-60 rounded-xl px-1' type="text" id="tipo-superficie" name="tipo-superficie" readonly/>
                                </div>
                            </div>
                            <div className='container-form flex mt-2'>
                                <div className='flex flex-col me-4'>
                                    <label for="horas-disponibles">Horas dispoibles:</label>
                                    <input className='reservation-details__input max-w-screen-2xl w-60 rounded-xl px-1' type="text" id="horas-disponibles" name="horas-disponibles" readonly/>
                                </div>
                                <div className='flex flex-col'>
                                    <label for="cantidad-jugadores">Cantidad de jugadores:</label>
                                    <input className='reservation-details__input max-w-screen w-60 rounded-xl px-1' type="text" id="cantidad-jugadores" name="cantidad-jugadores" readonly/>
                                </div>
                            </div>
                            <div className='container-form-img flex mt-2 w-full'>
                                <div className='flex flex-col w-full'>
                                    <label for="fotos-cancha">Cargar fotos de canchas:</label>
                                    <input className='input-img w-full reservation-details__input max-w-screen w-60 rounded-xl px-1' type="text" id="fotos-cancha" name="fotos-cancha" readonly/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-rev flex flex-col-reverse lg:flex-col'>
                        <img className='h-24 flex justify-center content-center my-12' src={logoGoat} alt='logo Goat' />
                        <button className='rounded-xl text-white bg-gradient-to-r from-secundary to-primary mt-3.5 p-0.5 text-white text-2xl w-64' type='submit'>Agregar cancha</button>
                    </div>  
                </div>
            </form>
        </div>
    );
};

export default SoccerFieldForm;