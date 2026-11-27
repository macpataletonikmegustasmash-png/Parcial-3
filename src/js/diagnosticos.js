import { obtenerDiagnosticos, obtenerEquipo, obtenerTecnico } from './datos.js'
import { mostrarLista } from './helpers.js'

// El diagnóstico guarda ID_equipo e ID_tecnico; se agregan sus textos para la tabla.
async function conNombres(diagnostico) {
    const equipo = await obtenerEquipo(diagnostico.ID_equipo)
    const tecnico = await obtenerTecnico(diagnostico.ID_tecnico)
    return {
        ...diagnostico,
        equipo: equipo ? `${equipo.marcaEquipo} ${equipo.modeloEquipo}` : 'Sin equipo',
        tecnico: tecnico ? tecnico.especialidadTecnico : 'Sin técnico',
    }
}

await mostrarLista({
    obtener: obtenerDiagnosticos,
    columnas: ['id', 'equipo', 'tecnico', 'fechaDiagnostico', 'estadoDiagnostico'],
    detalle: 'diagnostico.html',
    vacio: 'Todavía no hay diagnósticos registrados.',
    transformar: conNombres,
})
