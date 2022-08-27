import Paciente from './Paciente'


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-extrabold text-3xl text-center text-slate-600 font-figtree">Listado Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10 text-slate-600 font-semibold">
                Administra tus
                <span className="text-violet-600 font-bold"> Pacientes y Citas</span>
            </p>
            { pacientes.map(paciente => (
              <Paciente 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </>
        ) : (
          <>
            <h2 className="font-extrabold text-3xl text-center text-slate-600">Aun no hay pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10 text-slate-600 font-semibold">
                  Comienza a agregar pacientes en el 
                  <span className="text-violet-600 font-bold"> Formulario</span>
              </p>
          </>
        )}
        
            
            

    </div>
  )
}

export default ListadoPacientes