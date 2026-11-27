import { obtenerEquipo, obtenerCategoria, obtenerDonacion, obtenerHistorialesDeEquipo } from './datos.js'
import { mostrarDetalle, mostrarLista } from './helpers.js'

// El equipo guarda ID_categoria e ID_donacion; se agregan sus textos para mostrarlos.
async function conNombres(equipo) {
    const categoria = await obtenerCategoria(equipo.ID_categoria)
    const donacion = await obtenerDonacion(equipo.ID_donacion)
    return {
        ...equipo,
        categoria: categoria ? categoria.nombreCategoria : 'Sin categoría',
        donacion: donacion ? `Donación #${donacion.id} del ${donacion.fechaDonacion}` : 'Sin donación',
    }
}

const equipo = await mostrarDetalle({
    obtener: obtenerEquipo,
    noExiste: 'No existe ese equipo.',
    transformar: conNombres,
})

if (equipo) {
    document.querySelector('#enlace-editar').href = `equipo-form.html?id=${equipo.id}`

    // Segunda tabla: los movimientos de este equipo, con sus propios ids.
    await mostrarLista({
        obtener: () => obtenerHistorialesDeEquipo(equipo.id),
        columnas: ['fechaMovimiento', 'tipoMovimiento', 'descripcionMovimiento', 'ubicacionAnterior', 'ubicacionNueva'],
        vacio: 'Este equipo todavía no tiene movimientos.',
        tabla: '#tabla-historial',
        mensaje: '#mensaje-historial',
    })
}
