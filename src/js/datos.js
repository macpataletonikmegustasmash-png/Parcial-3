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

// ===== ROLES =====
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

// ===== USUARIOS =====
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

// ===== DONADORES =====
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

// ===== COMPONENTES =====
const componentes = [
    { id: 1, nombre_componente: 'Memoria RAM 8 GB', marca: 'Kingston', modelo: 'KVR26S19S8/8', descripcion: 'DDR4 SO-DIMM para laptop', precio: 450, existencia: 12 },
    { id: 2, nombre_componente: 'Disco SSD 240 GB', marca: 'Adata', modelo: 'SU650', descripcion: 'SSD SATA de 2.5 pulgadas', precio: 520, existencia: 3 },
    { id: 3, nombre_componente: 'Batería para laptop', marca: 'Dell', modelo: '3RNFD', descripcion: 'Batería de 4 celdas, 42 Wh', precio: 890, existencia: 2 },
    { id: 4, nombre_componente: 'Cargador USB-C 65 W', marca: 'Lenovo', modelo: 'ADLX65Y', descripcion: 'Cargador universal USB-C', precio: 380, existencia: 7 },
    { id: 5, nombre_componente: 'Pantalla 6.5 pulgadas', marca: 'Samsung', modelo: 'A20-LCD', descripcion: 'Pantalla con touch para Galaxy A20', precio: 650, existencia: 1 },
    { id: 6, nombre_componente: 'Pasta térmica', marca: 'Arctic', modelo: 'MX-4', descripcion: 'Jeringa de 4 g', precio: 120, existencia: 15 },
]

export async function obtenerComponentes() {
    return componentes
}

export async function obtenerComponente(id) {
    return componentes.find((componente) => componente.id === id)
}

// ===== DIAGNÓSTICOS =====
const diagnosticos = [
    { id: 1, fecha_diagnostico: '2026-10-05', problema_detectado: 'No enciende, batería inflada', estado_fisico: 'Bueno', reparacion_requerida: 'Cambio de batería', observaciones: 'Carcasa sin daños', id_equipo: 1, id_tecnico: 1 },
    { id: 2, fecha_diagnostico: '2026-10-12', problema_detectado: 'Lentitud extrema y disco con sectores dañados', estado_fisico: 'Regular', reparacion_requerida: 'Cambio de disco y ampliación de RAM', observaciones: 'Teclado con desgaste', id_equipo: 2, id_tecnico: 1 },
    { id: 3, fecha_diagnostico: '2026-10-20', problema_detectado: 'Pantalla estrellada', estado_fisico: 'Regular', reparacion_requerida: 'Cambio de pantalla', observaciones: 'Funciona con cargador', id_equipo: 3, id_tecnico: 2 },
    { id: 4, fecha_diagnostico: '2026-11-02', problema_detectado: 'Se sobrecalienta y se apaga', estado_fisico: 'Bueno', reparacion_requerida: 'Limpieza y cambio de pasta térmica', observaciones: '', id_equipo: 4, id_tecnico: 3 },
]

export async function obtenerDiagnosticos() {
    return diagnosticos
}

export async function obtenerDiagnostico(id) {
    return diagnosticos.find((diagnostico) => diagnostico.id === id)
}

// ===== REPARACIONES =====
const reparaciones = [
    { id: 1, fecha_inicio: '2026-10-06', fecha_termino: '2026-10-08', descripcion_trabajo: 'Cambio de batería y prueba de carga', costo_estimado: 900, costo_final: 890, estado_reparacion: 'Terminada', id_diagnostico: 1, id_tecnico: 1 },
    { id: 2, fecha_inicio: '2026-10-13', fecha_termino: '2026-10-16', descripcion_trabajo: 'Cambio de disco a SSD, RAM a 16 GB e instalación de sistema', costo_estimado: 1500, costo_final: 1420, estado_reparacion: 'Terminada', id_diagnostico: 2, id_tecnico: 1 },
    { id: 3, fecha_inicio: '2026-10-21', fecha_termino: null, descripcion_trabajo: 'Cambio de pantalla', costo_estimado: 700, costo_final: null, estado_reparacion: 'En proceso', id_diagnostico: 3, id_tecnico: 2 },
    { id: 4, fecha_inicio: '2026-11-03', fecha_termino: null, descripcion_trabajo: 'Limpieza interna y cambio de pasta térmica', costo_estimado: 200, costo_final: null, estado_reparacion: 'Pendiente', id_diagnostico: 4, id_tecnico: 3 },
]

export async function obtenerReparaciones() {
    return reparaciones
}

export async function obtenerReparacion(id) {
    return reparaciones.find((reparacion) => reparacion.id === id)
}

// ===== DETALLE DE COMPONENTES =====
const detallesComponentes = [
    { id: 1, cantidad_utilizada: 1, costo_unitario: 890, id_reparacion: 1, id_componente: 3 },
    { id: 2, cantidad_utilizada: 1, costo_unitario: 520, id_reparacion: 2, id_componente: 2 },
    { id: 3, cantidad_utilizada: 2, costo_unitario: 450, id_reparacion: 2, id_componente: 1 },
    { id: 4, cantidad_utilizada: 1, costo_unitario: 650, id_reparacion: 3, id_componente: 5 },
]


export async function obtenerDetallesDeReparacion(idReparacion) {
    return detallesComponentes.filter((detalle) => detalle.id_reparacion === idReparacion)
}

// ===== TÉCNICOS =====
const tecnicos = [
    { id: 1, nombre: 'Laura', apellido: 'Pérez', especialidad: 'Computadoras', telefono: '2221234567', correo: 'laura.perez@reparatec.mx', disponibilidad: 'Disponible' },
    { id: 2, nombre: 'Miguel', apellido: 'Hernández', especialidad: 'Teléfonos', telefono: '2227654321', correo: 'miguel.hernandez@reparatec.mx', disponibilidad: 'Ocupado' },
    { id: 3, nombre: 'Sofía', apellido: 'Ramírez', especialidad: 'Tabletas', telefono: '2229876543', correo: 'sofia.ramirez@reparatec.mx', disponibilidad: 'Disponible' },
    { id: 4, nombre: 'Jorge', apellido: 'Torres', especialidad: 'Impresoras', telefono: '2224567890', correo: 'jorge.torres@reparatec.mx', disponibilidad: 'No disponible' },
]

export async function obtenerTecnicos() {
    return tecnicos
}

export async function obtenerTecnico(id) {
    return tecnicos.find((tecnico) => tecnico.id === id)
}
