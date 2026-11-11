export function leerId() {
    const id = new URLSearchParams(location.search).get('id')
    return id ? Number(id) : null
}
 
export async function mostrarLista({ obtener, columnas, detalle, vacio, transformar, tabla = '#tabla', mensaje = '#mensaje' }) {
    const elTabla = document.querySelector(tabla)
    const cuerpo = elTabla.querySelector('tbody')
    const elMensaje = document.querySelector(mensaje)
 
    try {
        let registros = await obtener()
        if (transformar) registros = await Promise.all(registros.map(transformar))
 
        if (registros.length === 0) {
            elMensaje.textContent = vacio
            return
        }
 
        for (const registro of registros) {
            const fila = document.createElement('tr')
            for (const campo of columnas) {
                const celda = document.createElement('td')
                celda.textContent = registro[campo] ?? ''
                fila.append(celda)
            }
            if (detalle) {
                const enlace = document.createElement('a')
                enlace.href = `${detalle}?id=${registro.id}`
                enlace.textContent = fila.cells[0].textContent
                fila.cells[0].replaceChildren(enlace)
            }
            cuerpo.append(fila)
        }
 
        elMensaje.hidden = true
        elTabla.hidden = false
    } catch {
        elMensaje.textContent = 'No se pudieron cargar los datos. Intenta más tarde.'
    }
}
 
export async function mostrarDetalle({ obtener, noExiste, transformar }) {
    const mensaje = document.querySelector('#mensaje')
    const detalle = document.querySelector('#detalle')
 
    try {
        let registro = await obtener(leerId())
        if (!registro) {
            mensaje.textContent = noExiste
            return null
        }
        if (transformar) registro = await transformar(registro)
 
        for (const elemento of detalle.querySelectorAll('[data-campo]')) {
            elemento.textContent = registro[elemento.dataset.campo] ?? ''
        }
 
        mensaje.hidden = true
        detalle.hidden = false
        return registro
    } catch {
        mensaje.textContent = 'No se pudo cargar el registro. Intenta más tarde.'
        return null
    }
}

export function llenarSelect(selector, registros, texto) {
    const select = document.querySelector(selector)
    for (const registro of registros) {
        select.append(new Option(texto(registro), registro.id))
    }
}
 
export async function prepararFormulario({ obtener, destino }) {
    const formulario = document.querySelector('#formulario')
    const mensaje = document.querySelector('#mensaje')
    const id = leerId()
 
    if (id) {
        const registro = await obtener(id)
        if (registro) {
            for (const campo of formulario.elements) {
                if (campo.name in registro) campo.value = registro[campo.name]
            }
        }
    }
 
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault()
        if (!formulario.checkValidity()) {
            mensaje.textContent = 'Revisa los campos marcados.'
            mensaje.classList.add('mensaje--error')
            formulario.reportValidity()
            return
        }
        location.href = destino
    })
}