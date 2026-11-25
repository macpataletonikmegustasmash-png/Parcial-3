import { obtenerTecnicos } from './datos.js'
import { mostrarLista } from './helpers.js'

// El técnico no tiene nombre en la base, así que su número (id) es el enlace al detalle.
await mostrarLista({
    obtener: obtenerTecnicos,
    columnas: ['id', 'especialidadTecnico', 'disponibilidadTecnico'],
    detalle: 'tecnico.html',
    vacio: 'Todavía no hay técnicos registrados.',
})
