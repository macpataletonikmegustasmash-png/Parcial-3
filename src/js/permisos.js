
const ADMIN = 'administrador'

export const permisos = {
    usuarios: [ADMIN],
    usuario: [ADMIN],
    'usuario-form': [ADMIN],
    roles: [ADMIN],
    'rol-form': [ADMIN],
}

export function puedeEntrar(pagina, rol) {
    const roles = permisos[pagina]
    return !roles || roles.some((permitido) => permitido.toLowerCase() === rol?.toLowerCase())
}