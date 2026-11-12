import { obtenerRoles } from './datos.js'
import { mostrarLista } from './helpers.js'

await mostrarLista({
    obtener: obtenerRoles,
    columnas: ['nombre_rol', 'descripcion', 'estado'],
    detalle: 'rol-form.html',
    vacio: 'Todavía no hay roles registrados.',
})