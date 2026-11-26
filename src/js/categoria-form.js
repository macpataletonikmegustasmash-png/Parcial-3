import { obtenerCategoria } from './datos.js'
import { leerId, prepararFormulario } from './helpers.js'

if (leerId()) {
    document.querySelector('#titulo-formulario').textContent = 'Editar categoría'
}

await prepararFormulario({
    obtener: obtenerCategoria,
    destino: 'categorias.html',
})
