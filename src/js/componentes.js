import { obtenerComponentes } from './datos.js'
import { mostrarLista } from './helpers.js'

await mostrarLista({
    obtener: obtenerComponentes,
    columnas: ['nombre_componente', 'marca', 'modelo', 'precio', 'existencia'],
    detalle: 'componente.html',
    vacio: 'Todavía no hay componentes registrados.',
})
