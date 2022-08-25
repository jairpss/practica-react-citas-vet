import React from 'react'

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-extrabold text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Añade pacientes y
            <span className="text-indigo-600 font-bold"> Administralos</span>
        </p>

        <form className="bg-white shadow-lg rounded-xl py-10 px-5 mb-10">
            <div className="mb-5">
              <label htmlFor="mascota" className="block text-gray-700 font-semibold">Nombre mascota</label>
              <input 
                id="mascota"
                type="text"
                placeholder="Nombre de mascota"
                className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="propietario" className="block text-gray-700 font-semibold">Nombre propietario</label>
              <input 
                id="propietario"
                type="text"
                placeholder="Nombre de Propietario"
                className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
              <input 
                id="email"
                type="email"
                placeholder="Email"
                className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
              />
            </div>
            
            <div className="mb-5">
              <label htmlFor="alta" className="block text-gray-700 font-semibold">Alta</label>
              <input 
                id="alta"
                type="date"
                className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="sintomas" className="block text-gray-700 font-semibold">Sintomas</label>
              <textarea 
                id="sintomas"
                className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
                placeholder="Describe los sintomas"
              />
            </div>
            
            <input 
              type="submit"
              className="bg-indigo-600 w-full p-3 rounded-md text-white font-semibold hover:bg-indigo-500 cursor-pointer transition-all"
              value="Agregar Mascota"
            />

        </form>
    </div>
  )
}

export default Formulario