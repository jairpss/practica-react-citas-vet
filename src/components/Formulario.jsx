import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente}) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      //Validacion Formulario
      if([ nombre, propietario, email, fecha, sintomas ].includes('')) {
        setError(true)
        return
      }

      setError(false)

      //Objeto Paciente
      const objetoPaciente = {
          nombre,
          propietario,
          email,
          fecha,
          sintomas,
          id: generarId()
      }

      setPacientes([...pacientes, objetoPaciente])

      //Reiniciamos el Form
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-extrabold text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Añade pacientes y
            <span className="text-indigo-600 font-bold"> Administralos</span>
        </p>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl py-10 px-5 mb-10">
            {error && <Error><p>Todos los campos son obligatorios</p></Error>
                
            }
            <div className="mb-5">
              <label htmlFor="mascota" className="block text-gray-700 font-semibold">Nombre mascota</label>
              <input 
                id="mascota"
                type="text"
                placeholder="Nombre de mascota"
                className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
                value={nombre}
                onChange={ (e) => setNombre(e.target.value) }
              />
            </div>

            <div className="mb-5">
              <label htmlFor="propietario" className="block text-gray-700 font-semibold">Nombre propietario</label>
              <input 
                id="propietario"
                type="text"
                placeholder="Nombre de Propietario"
                className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
                value={propietario}
                onChange={ (e) => setPropietario(e.target.value) }
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
              <input 
                id="email"
                type="email"
                placeholder="Email"
                className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
                value={email}
                onChange={ (e) => setEmail(e.target.value) }
              />
            </div>
            
            <div className="mb-5">
              <label htmlFor="alta" className="block text-gray-700 font-semibold">Alta</label>
              <input 
                id="alta"
                type="date"
                className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
                value={fecha}
                onChange={ (e) => setFecha(e.target.value) }
              />
            </div>

            <div className="mb-5">
              <label htmlFor="sintomas" className="block text-gray-700 font-semibold">Sintomas</label>
              <textarea 
                id="sintomas"
                className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
                placeholder="Describe los sintomas"
                value={sintomas}
                onChange={ (e) => setSintomas(e.target.value) }
              />
            </div>
            
            <input 
              type="submit"
              className="bg-indigo-600 w-full p-3 rounded-md text-white font-semibold hover:bg-indigo-500 cursor-pointer transition-all"
              value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
            />
 
        </form>
    </div>
  )
}

export default Formulario