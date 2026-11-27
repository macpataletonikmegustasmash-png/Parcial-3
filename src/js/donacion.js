import { obtenerDonacion, obtenerDonador, obtenerEquiposDeDonacion } from './datos.js'
import { mostrarDetalle, mostrarLista } from './helpers.js'

async function conDonador(donacion) {
    const donador = await obtenerDonador(donacion.ID_donador)
    return {
        ...donacion,
        donador: donador ? `Donador #${donador.id} · ${donador.tipoDonador} · ${donador.calleDonador} ${donador.numeroDonador}` : 'Sin donador',
    }
}

const donacion = await mostrarDetalle({
    obtener: obtenerDonacion,
    noExiste: 'No existe esa donación.',
    transformar: conDonador,
})

if (donacion) {
    document.querySelector('#enlace-editar').href = `donacion-form.html?id=${donacion.id}`

    // Segunda tabla: los equipos que llegaron en esta donación. Cada código lleva al detalle del equipo.
    await mostrarLista({
        obtener: () => obtenerEquiposDeDonacion(donacion.id),
        columnas: ['codigoInventarioEquipo', 'marcaEquipo', 'modeloEquipo', 'estadoEquipo'],
        detalle: 'equipo.html',
        vacio: 'Todavía no se registran equipos de esta donación.',
        tabla: '#tabla-equipos',
        mensaje: '#mensaje-equipos',
    })
}
