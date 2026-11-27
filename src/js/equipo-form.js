import { obtenerEquipo, obtenerDonaciones, obtenerCategorias } from './datos.js'
import { leerId, llenarSelect, prepararFormulario } from './helpers.js'

// Primero se llenan los selects, para que en modo editar ya existan las opciones a marcar.
llenarSelect('#ID_donacion', await obtenerDonaciones(), (donacion) => `Donación #${donacion.id} · ${donacion.fechaDonacion}`)
llenarSelect('#ID_categoria', await obtenerCategorias(), (categoria) => categoria.nombreCategoria)

if (leerId()) {
    document.querySelector('#titulo-formulario').textContent = 'Editar equipo'
}

await prepararFormulario({
    obtener: obtenerEquipo,
    destino: 'equipos.html',
})
