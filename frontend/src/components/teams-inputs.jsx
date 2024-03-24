import React from 'react';
import '../styles/teams-inputs.css';

const TeamsInputs = ({titulo,cantidad}) =>{
    return(
        <div className='flex flex-col content-center justify-center'>
            <h2 className='font-bold text-center text-5xl mb-2'>{titulo}</h2>
            <div className='flex content-center justify-center'>
                <div className='container-team flex justify-center content-center rounded-3xl py-4 w-9/12 lg:w-96'>
                    {/* <label for="nombre">Nombre:</label> */}
                    <div className='flex flex-col justify-center content-center'>
                        {Array.from({ length: cantidad }, (_, i) => (
                            <input className='my-1 rounded-xl border-none w-full px-1 sm:w-52' key={i+1} type="text" id={`nombre${i+1}`} name={`nombre${i+1}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamsInputs;