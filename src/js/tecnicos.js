import { obtenerTecnicos } from './datos.js'
import { mostrarLista } from './helpers.js'

await mostrarLista({
    obtener: obtenerTecnicos,
    columnas: ['nombre', 'apellido', 'especialidad', 'telefono', 'disponibilidad'],
    detalle: 'tecnico.html',
    vacio: 'Todavía no hay técnicos registrados.',
})
