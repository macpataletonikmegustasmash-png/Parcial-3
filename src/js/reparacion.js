import {
    obtenerReparacion,
    obtenerTecnico,
    obtenerDiagnostico,
    obtenerComponente,
    obtenerDetallesDeReparacion,
} from './datos.js'
import { mostrarDetalle, mostrarLista } from './helpers.js'


async function conNombres(reparacion) {
    const tecnico = await obtenerTecnico(reparacion.id_tecnico)
    const diagnostico = await obtenerDiagnostico(reparacion.id_diagnostico)
    return {
        ...reparacion,
        tecnico: tecnico ? `${tecnico.nombre} ${tecnico.apellido}` : 'Sin asignar',
        diagnostico: diagnostico ? diagnostico.problema_detectado : 'Sin diagnóstico',
        fecha_termino: reparacion.fecha_termino ?? 'Sin terminar',
        costo_estimado: `$${reparacion.costo_estimado}`,
        costo_final: reparacion.costo_final === null ? 'Pendiente' : `$${reparacion.costo_final}`,
    }
}

async function conComponente(detalle) {
    const componente = await obtenerComponente(detalle.id_componente)
    return {
        ...detalle,
        componente: componente ? componente.nombre_componente : 'Componente eliminado',
        subtotal: detalle.cantidad_utilizada * detalle.costo_unitario,
    }
}

const reparacion = await mostrarDetalle({
    obtener: obtenerReparacion,
    noExiste: 'No existe esa reparación.',
    transformar: conNombres,
})

if (reparacion) {
    document.querySelector('#enlace-editar').href = `reparacion-form.html?id=${reparacion.id}`

    await mostrarLista({
        obtener: () => obtenerDetallesDeReparacion(reparacion.id),
        columnas: ['componente', 'cantidad_utilizada', 'costo_unitario', 'subtotal'],
        vacio: 'Esta reparación no usó componentes.',
        transformar: conComponente,
        tabla: '#tabla-componentes',
        mensaje: '#mensaje-componentes',
    })
}
