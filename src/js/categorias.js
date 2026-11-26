import { obtenerCategorias } from './datos.js'
import { mostrarLista } from './helpers.js'

// Categorías no tiene página de detalle: el nombre lleva directo a editarla (igual que Roles).
await mostrarLista({
    obtener: obtenerCategorias,
    columnas: ['nombreCategoria', 'descripcionCategoria', 'estadoCategoria'],
    detalle: 'categoria-form.html',
    vacio: 'Todavía no hay categorías registradas.',
})
