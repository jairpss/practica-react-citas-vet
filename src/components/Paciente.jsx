
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const hadleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?')
    
    if(respuesta) {
        eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 my-3 bg-white shadow-lg px-5 py-10 rounded-xl">
            <p className="text-gray-700 font-bold">Nombre mascota:
                <span className="font-medium text-gray-500"> {nombre}</span>
            </p>
            <p className="text-gray-700 font-bold">Propietario:
                <span className="font-medium text-gray-500"> {propietario}</span>
            </p>
            <p className="text-gray-700 font-bold">Email:
                <span className="font-medium text-gray-500"> {email}</span>
            </p>
            <p className="text-gray-700 font-bold">Fecha de Alta:
                <span className="font-medium text-gray-500"> {fecha}</span>
            </p>
            <p className="text-gray-700 font-bold">Sintomas:
                <span className="font-medium text-gray-500"> {sintomas}</span>
            </p>
            <div className="flex justify-end mt-10">
                <button 
                    type="button" 
                    className="py-2 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-md"
                    onClick={() => setPaciente(paciente)}
                >Editar
                </button>
                <button 
                    type="button" 
                    className="py-2 px-6 ml-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-md"
                    onClick={hadleEliminar}
                >Eliminar
                </button>
            </div>
    </div>
  )
}

export default Paciente