const Footer = () => {
  return (
    <div>
        <footer className="text-gray-600 body-font bg-gradient-to-r from-secundary to-primary">
        <div className="container px-5  mx-auto">
    <div class="text-center justify-center flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3 flex justify-center">
      <img className="w-80 w-10" src="../../public/imagotipo-blanco.png" alt="logo Goat"></img>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-opacity-75 px-8 pt-20 pb-24 rounded-lg overflow-hidden text-center relative">
        <a className="inline-flex items-center">
          <img alt="blog" src="../../public/caracteristicas1.png" className="w-24 h-12 rounded-full flex-shrink-0 object-cover object-center"></img>
          <span className="flex-grow flex flex-col">
            <p className="text-xl title-font text-left font-medium text-white">Rapidez</p>
            <p className="text-base	text-white text-left t">Reserva tu cancha en segundos,<br></br>
sin llamadas ni filas.  </p>
          </span>
        </a>
        </div>
      </div>
      <div className="p-4 lg:w-1/3  content-evenly">
        <div className=" px-8 pt-28 pb-24 rounded-lg overflow-hidden text-center relative">
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-dark-color content-center	">
    <div className="text-center container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-sm text-center sm:text-center">Goat © All Rights Reserved 
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1" target="_blank">- 2024</a>
      </p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
