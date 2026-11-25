import { obtenerComponentes } from './datos.js'
import { mostrarLista } from './helpers.js'

await mostrarLista({
    obtener: obtenerComponentes,
    columnas: ['nombreComponente', 'marcaComponente', 'modeloComponente', 'precioComponente', 'existenciaComponente'],
    detalle: 'componente.html',
    vacio: 'Todavía no hay componentes registrados.',
})
