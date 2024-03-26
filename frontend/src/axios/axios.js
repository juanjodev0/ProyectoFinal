import axios from 'axios';

// Agregar un interceptor para todas las solicitudes salientes
axios.interceptors.request.use(
  (config) => {
    // Obtener el token de autenticación del localStorage
    const token = localStorage.getItem('authToken');

    // Si hay un token, agregarlo a las cabeceras de la solicitud
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Si ocurre un error al agregar el token, simplemente pasarlo sin modificar
    return Promise.reject(error);
  }
);

export default axios;
