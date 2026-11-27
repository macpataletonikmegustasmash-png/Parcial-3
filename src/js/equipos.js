import { obtenerEquipos, obtenerCategoria } from './datos.js'
import { mostrarLista } from './helpers.js'

// El equipo guarda ID_categoria; para la tabla se agrega el nombre de la categoría.
async function conCategoria(equipo) {
    const categoria = await obtenerCategoria(equipo.ID_categoria)
    return { ...equipo, categoria: categoria ? categoria.nombreCategoria : 'Sin categoría' }
}

await mostrarLista({
    obtener: obtenerEquipos,
    columnas: ['codigoInventarioEquipo', 'marcaEquipo', 'modeloEquipo', 'categoria', 'estadoEquipo'],
    detalle: 'equipo.html',
    vacio: 'Todavía no hay equipos registrados.',
    transformar: conCategoria,
})
