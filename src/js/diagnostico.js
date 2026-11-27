import { obtenerDiagnostico, obtenerEquipo, obtenerTecnico, obtenerReparacionesDeDiagnostico } from './datos.js'
import { mostrarDetalle, mostrarLista } from './helpers.js'

async function conNombres(diagnostico) {
    const equipo = await obtenerEquipo(diagnostico.ID_equipo)
    const tecnico = await obtenerTecnico(diagnostico.ID_tecnico)
    return {
        ...diagnostico,
        equipo: equipo ? `${equipo.marcaEquipo} ${equipo.modeloEquipo} (código ${equipo.codigoInventarioEquipo})` : 'Sin equipo',
        tecnico: tecnico ? `Técnico #${tecnico.id} · ${tecnico.especialidadTecnico}` : 'Sin técnico',
    }
}

const diagnostico = await mostrarDetalle({
    obtener: obtenerDiagnostico,
    noExiste: 'No existe ese diagnóstico.',
    transformar: conNombres,
})

if (diagnostico) {
    document.querySelector('#enlace-editar').href = `diagnostico-form.html?id=${diagnostico.id}`

    // Segunda tabla: las reparaciones que salieron de este diagnóstico. Cada una lleva a su detalle.
    await mostrarLista({
        obtener: () => obtenerReparacionesDeDiagnostico(diagnostico.id),
        columnas: ['descripcionReparacion', 'fechaInicioReparacion', 'estadoReparacion'],
        detalle: 'reparacion.html',
        vacio: 'Este diagnóstico todavía no tiene reparaciones.',
        tabla: '#tabla-reparaciones',
        mensaje: '#mensaje-reparaciones',
    })
}
