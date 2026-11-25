import {
    obtenerReparacion,
    obtenerDiagnostico,
    obtenerEquipo,
    obtenerTecnico,
    obtenerComponente,
    obtenerDetallesDeReparacion,
} from './datos.js'
import { mostrarDetalle, mostrarLista } from './helpers.js'

// La reparación solo guarda ID_diagnostico. Del diagnóstico salen el equipo y el técnico.
async function conNombres(reparacion) {
    const diagnostico = await obtenerDiagnostico(reparacion.ID_diagnostico)
    const equipo = diagnostico ? await obtenerEquipo(diagnostico.ID_equipo) : null
    const tecnico = diagnostico ? await obtenerTecnico(diagnostico.ID_tecnico) : null
    return {
        ...reparacion,
        diagnostico: diagnostico ? diagnostico.problemaDiagnostico : 'Sin diagnóstico',
        equipo: equipo ? `${equipo.marcaEquipo} ${equipo.modeloEquipo}` : 'Sin equipo',
        tecnico: tecnico ? `Técnico #${tecnico.id} · ${tecnico.especialidadTecnico}` : 'Sin técnico',
        fechaTerminoReparacion: reparacion.fechaTerminoReparacion ?? 'Sin terminar',
        costoEstimadoReparacion: `$${reparacion.costoEstimadoReparacion}`,
        costoFinalReparacion: reparacion.costoFinalReparacion === null ? 'Pendiente' : `$${reparacion.costoFinalReparacion}`,
    }
}

// Cada detalle guarda ID_componente; se agrega el nombre y el subtotal.
async function conComponente(detalle) {
    const componente = await obtenerComponente(detalle.ID_componente)
    return {
        ...detalle,
        componente: componente ? componente.nombreComponente : 'Componente eliminado',
        subtotal: detalle.cantidadUtilizadaDetalle * detalle.costoUnitarioDetalle,
    }
}

const reparacion = await mostrarDetalle({
    obtener: obtenerReparacion,
    noExiste: 'No existe esa reparación.',
    transformar: conNombres,
})

if (reparacion) {
    document.querySelector('#enlace-editar').href = `reparacion-form.html?id=${reparacion.id}`

    // Segunda tabla de la página: usa sus propios ids.
    await mostrarLista({
        obtener: () => obtenerDetallesDeReparacion(reparacion.id),
        columnas: ['componente', 'cantidadUtilizadaDetalle', 'costoUnitarioDetalle', 'subtotal'],
        vacio: 'Esta reparación no usó componentes.',
        transformar: conComponente,
        tabla: '#tabla-componentes',
        mensaje: '#mensaje-componentes',
    })
}
