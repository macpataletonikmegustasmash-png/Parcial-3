import { obtenerComponente } from './datos.js'
import { leerId, prepararFormulario } from './helpers.js'

if (leerId()) {
    document.querySelector('#titulo-formulario').textContent = 'Editar componente'
}

await prepararFormulario({
    obtener: obtenerComponente,
    destino: 'componentes.html',
})
