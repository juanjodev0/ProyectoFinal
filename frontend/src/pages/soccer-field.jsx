const SoccerField = () => {
    return (
      <div>
         <section className="bg-[url('background-principal.png')] bg-contain text-white body-font">
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-col text-center w-full ">
      <h1 className="sm:text-5xl text-7xl font-medium title-font mt-4 mb-4 poppins-bold text-white">Nombre Cancha</h1>
    </div>
  </div>
</section>

<section className="m-20 ext-gray-600 body-font">
<h1 class="sm:text-5xl text-7xl font-medium title-font mt-4 text-center poppins-bold text-dark-color">Canchas disponibles</h1>
  <div className="containe py-12">
  
    <div className="flex flex-wrap  -mb-10 ml-50 text-center">
      <div className="shadow-lg rounded-b-2xl sm:w-1/3 mb-10 box-border h120 w-32">
        <div className="rounded-lg grid place-items-center overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-96 " src="cancha.png"></img>
        </div>
      </div>

      <div className="sm:w-1/2 mb-10 box-border h120 w-32 ml-40">
        <div className="rounded-lg grid place-items-center overflow-hidden m-10">
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 poppins-semibold">Bernabeu</h2>
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni natus, doloribus molestias repellendus consequuntur dolores porro quod quam ea, laborum nesciunt totam sapiente similique aliquam! Sit porro inventore soluta.</p>
        <h3 className="leading-relaxed text-base text-primary poppins-medium bg-dark-color bg-opacity-10 mb-2">Valor:<span className="poppins-regular text-dark-color"> $100.000</span></h3>
        <a className="inline-flex items-center">
              <img alt="blog" src="ubicacion.png" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"></img>
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900 poppins-regular">Armenia - Quindio</span>
              </span>
            </a>
        <button className="flex mx-auto mt-2 text-white bg-gradient-to-r rounded-3xl from-primary to-secundary border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg poppins-regular">Reserva ahora</button>
        </div>
        
      </div>

      
    </div>
  </div>

</section>
      </div>
    )
  }
  
  export default SoccerField