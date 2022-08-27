
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
            <p className="text-slate-700 font-bold mb-1">Nombre mascota:
                <span className="font-medium text-gray-500"> {nombre}</span>
            </p>
            <p className="text-slate-700 font-bold mb-1">Propietario:
                <span className="font-medium text-gray-500"> {propietario}</span>
            </p>
            <p className="text-slate-700 font-bold mb-1">Email:
                <span className="font-medium text-gray-500"> {email}</span>
            </p>
            <p className="text-slate-700 font-bold mb-1">Fecha de Alta:
                <span className="font-medium text-gray-500"> {fecha}</span>
            </p>
            <p className="text-slate-700 font-bold">Sintomas:
                <span className="font-medium text-gray-500"> {sintomas}</span>
            </p>
            <div className="flex justify-end mt-10">
                <button 
                    type="button" 
                    className="py-2 px-6 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-md transition-all"
                    onClick={() => setPaciente(paciente)}
                >Editar
                </button>
                <button 
                    type="button" 
                    className="py-2 px-6 ml-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-md transition-all"
                    onClick={hadleEliminar}
                >Eliminar
                </button>
            </div>
    </div>
  )
}

export default Paciente