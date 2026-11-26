import { obtenerDonaciones, obtenerDonador } from './datos.js'
import { mostrarLista } from './helpers.js'

// La donación guarda ID_donador; el donador no tiene nombre, así que se muestra su número y tipo.
async function conDonador(donacion) {
    const donador = await obtenerDonador(donacion.ID_donador)
    return { ...donacion, donador: donador ? `#${donador.id} · ${donador.tipoDonador}` : 'Sin donador' }
}

await mostrarLista({
    obtener: obtenerDonaciones,
    columnas: ['id', 'fechaDonacion', 'donador', 'tipoEntregaDonacion', 'estadoDonacion'],
    detalle: 'donacion.html',
    vacio: 'Todavía no hay donaciones registradas.',
    transformar: conDonador,
})
