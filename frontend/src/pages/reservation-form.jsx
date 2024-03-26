import React from 'react';
import { jwtDecode } from "jwt-decode"
import TeamsForm from '../components/teams-form.jsx';

const ReservationForm = () => {

  // Obtener el token de acceso del localStorage (o de donde esté almacenado)
  const token = localStorage.getItem('authToken');

  // Decodificar el token para obtener la información contenida en él
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.user_id; // Suponiendo que el token contiene el ID del usuario
      console.log(userId); // Mostrar el ID del usuario
    } catch (error) {
      console.error('Error al decodificar el token:', error.message);
    }
  } else {
    console.error('No se encontró el token de acceso.');
  }

    return (
      <div>
        <TeamsForm />
      </div>
    )
  }
  
  export default ReservationForm