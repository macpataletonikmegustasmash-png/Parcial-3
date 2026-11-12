import { obtenerDonadores } from './datos.js'
import { mostrarLista } from './helpers.js'

await mostrarLista({
    obtener: obtenerDonadores,
    columnas: ['nombre', 'apellido', 'tipo_donador', 'telefono', 'correo'],
    detalle: 'donador.html',
    vacio: 'Todavía no hay donadores registrados.',
})