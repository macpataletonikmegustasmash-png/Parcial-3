import { obtenerDonadores } from './datos.js'
import { mostrarLista } from './helpers.js'

function conDireccion(donador) {
    return { ...donador, direccion: `${donador.calleDonador} ${donador.numeroDonador}` }
}

await mostrarLista({
    obtener: obtenerDonadores,
    columnas: ['id', 'tipoDonador', 'direccion', 'cpDonador'],
    detalle: 'donador.html',
    vacio: 'Todavía no hay donadores registrados.',
    transformar: conDireccion,
})