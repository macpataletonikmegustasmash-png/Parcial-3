import { obtenerDonacion, obtenerDonadores } from './datos.js'
import { leerId, llenarSelect, prepararFormulario } from './helpers.js'

// Primero se llena el select, para que en modo editar ya exista la opción a marcar.
llenarSelect('#ID_donador', await obtenerDonadores(), (donador) => `Donador #${donador.id} · ${donador.tipoDonador} · ${donador.calleDonador}`)

if (leerId()) {
    document.querySelector('#titulo-formulario').textContent = 'Editar donación'
}

await prepararFormulario({
    obtener: obtenerDonacion,
    destino: 'donaciones.html',
})
