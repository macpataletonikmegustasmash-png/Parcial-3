const reportes = [
    { id: 1, titulo: 'Fuga en calle 5 de Mayo', colonia: 'Centro', estado: 'Pendiente', fecha: '2026-10-28' },
    { id: 2, titulo: 'Sin agua desde ayer', colonia: 'Las Flores', estado: 'En proceso', fecha: '2026-10-30' },
    { id: 3, titulo: 'Agua turbia', colonia: 'San José', estado: 'Atendido', fecha: '2026-11-02' },
]

export async function obtenerReportes() {
    return reportes
}

export async function obtenerReporte(id) {
    return reportes.find((reporte) => reporte.id === id)
}

const roles = [
    { id: 1, nombre_rol: 'Administrador', descripcion: 'Administra usuarios, catálogos y la operación de la plataforma.', estado: 'Activo' },
    { id: 2, nombre_rol: 'Técnico', descripcion: 'Registra diagnósticos y reparaciones de los equipos.', estado: 'Activo' },
    { id: 3, nombre_rol: 'Donador', descripcion: 'Registra los equipos que entrega en donación.', estado: 'Activo' },
    { id: 4, nombre_rol: 'Beneficiario', descripcion: 'Solicita equipos y da seguimiento a su entrega.', estado: 'Activo' },
]

export async function obtenerRoles() {
    return roles
}

export async function obtenerRol(id) {
    return roles.find((rol) => rol.id === id)
}

const usuarios = [
    { id: 1, nombre_usuario: 'admin', correo: 'admin@reparatec.mx', contrasena_hash: '$2b$10$Xk9pQ2', telefono: '2221002000', fecha_registro: '2026-09-01', estado: 'Activo', id_rol: 1 },
    { id: 2, nombre_usuario: 'laura.perez', correo: 'laura.perez@reparatec.mx', contrasena_hash: '$2b$10$Lp4rT8', telefono: '2221234567', fecha_registro: '2026-09-10', estado: 'Activo', id_rol: 2 },
    { id: 3, nombre_usuario: 'techsolutions', correo: 'contacto@techsolutions.mx', contrasena_hash: '$2b$10$Ts7mW1', telefono: '2223456789', fecha_registro: '2026-10-02', estado: 'Activo', id_rol: 3 },
    { id: 4, nombre_usuario: 'ana.lopez', correo: 'ana.lopez@correo.mx', contrasena_hash: '$2b$10$Al3nZ6', telefono: '2225678901', fecha_registro: '2026-10-20', estado: 'Inactivo', id_rol: 4 },
]

export async function obtenerUsuarios() {
    return usuarios
}

export async function obtenerUsuario(id) {
    return usuarios.find((usuario) => usuario.id === id)
}

const donadores = [
    { id: 1, nombre: 'Carlos', apellido: 'Méndez', tipo_donador: 'Persona', telefono: '2221112233', correo: 'carlos.mendez@correo.mx', direccion: 'Calle 5 de Mayo 120, Centro' },
    { id: 2, nombre: 'Tech Solutions', apellido: 'S.A. de C.V.', tipo_donador: 'Empresa', telefono: '2223456789', correo: 'contacto@techsolutions.mx', direccion: 'Av. Juárez 2500, La Paz' },
    { id: 3, nombre: 'María', apellido: 'González', tipo_donador: 'Persona', telefono: '2224445566', correo: 'maria.gonzalez@correo.mx', direccion: 'Privada Las Flores 18, San José' },
    { id: 4, nombre: 'Colegio Atlántico', apellido: 'A.C.', tipo_donador: 'Institución', telefono: '2227778899', correo: 'sistemas@colegioatlantico.edu.mx', direccion: 'Blvd. Norte 900, Las Ánimas' },
]

export async function obtenerDonadores() {
    return donadores
}

export async function obtenerDonador(id) {
    return donadores.find((donador) => donador.id === id)
}