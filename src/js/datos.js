// Datos de prueba de ReparaTec, con la misma forma que tendrá la base de datos.
// Cada arreglo es una tabla del script ReparaTec.sql y trae los mismos registros.

function buscarPorId(tabla, id) {
    return tabla.find((registro) => registro.id === id)
}

function filtrarPor(tabla, campo, valor) {
    return tabla.filter((registro) => registro[campo] === valor)
}

// ===== ROLES =====
const roles = [
    { id: 1, nombreRol: 'Administrador', descripcionRol: 'Administra usuarios, catálogos y la operación de la plataforma.', estadoRol: 'Activo' },
    { id: 2, nombreRol: 'Tecnico', descripcionRol: 'Registra diagnósticos y reparaciones de los equipos.', estadoRol: 'Activo' },
    { id: 3, nombreRol: 'Donador', descripcionRol: 'Registra los equipos que entrega en donación.', estadoRol: 'Activo' },
    { id: 4, nombreRol: 'Beneficiario', descripcionRol: 'Solicita equipos y da seguimiento a su entrega.', estadoRol: 'Activo' },
    { id: 5, nombreRol: 'Voluntario', descripcionRol: 'Apoya en la recolección y entrega de equipos.', estadoRol: 'Activo' },
]

export async function obtenerRoles() {
    return roles
}

export async function obtenerRol(id) {
    return buscarPorId(roles, id)
}

// ===== USUARIOS =====
const usuarios = [
    { id: 1, ID_rol: 1, nombreUsuario: 'Carlos', apUsuario: 'Méndez', amUsuario: 'Ruiz', correoUsuario: 'admin@reparatec.mx', contrasenaUsuario: '$2b$10$Xk9pQ2', telefonoUsuario: '2221002000', fechaRegistroUsuario: '2026-09-01', estadoUsuario: 'Activo' },
    { id: 2, ID_rol: 2, nombreUsuario: 'Laura', apUsuario: 'Pérez', amUsuario: 'Hernández', correoUsuario: 'laura.perez@reparatec.mx', contrasenaUsuario: '$2b$10$Lp4rT8', telefonoUsuario: '2221234567', fechaRegistroUsuario: '2026-09-05', estadoUsuario: 'Activo' },
    { id: 3, ID_rol: 3, nombreUsuario: 'TechSolutions', apUsuario: '-', amUsuario: '-', correoUsuario: 'contacto@techsolutions.mx', contrasenaUsuario: '$2b$10$Ts7mW1', telefonoUsuario: '2223456789', fechaRegistroUsuario: '2026-09-10', estadoUsuario: 'Activo' },
    { id: 4, ID_rol: 4, nombreUsuario: 'Ana', apUsuario: 'López', amUsuario: 'Martínez', correoUsuario: 'ana.lopez@correo.mx', contrasenaUsuario: '$2b$10$Al3nZ6', telefonoUsuario: '2225678901', fechaRegistroUsuario: '2026-10-08', estadoUsuario: 'Activo' },
    { id: 5, ID_rol: 5, nombreUsuario: 'Raul', apUsuario: 'Paredez', amUsuario: 'Perez', correoUsuario: 'rulo@umad.mx', contrasenaUsuario: '$2b$432u1fyY', telefonoUsuario: '2228456689', fechaRegistroUsuario: '2026-10-22', estadoUsuario: 'Baja' },
]

export async function obtenerUsuarios() {
    return usuarios
}

export async function obtenerUsuario(id) {
    return buscarPorId(usuarios, id)
}

// ===== CATEGORÍAS =====
const categorias = [
    { id: 1, nombreCategoria: 'Laptop', descripcionCategoria: 'Computadoras portátiles donadas para uso escolar o administrativo', estadoCategoria: 'Activa' },
    { id: 2, nombreCategoria: 'Tableta', descripcionCategoria: 'Tabletas donadas para fines educativos', estadoCategoria: 'Activa' },
    { id: 3, nombreCategoria: 'Computadora de escritorio', descripcionCategoria: 'Equipos de escritorio (CPU) para salas de cómputo y consulta', estadoCategoria: 'Activa' },
    { id: 4, nombreCategoria: 'Monitor', descripcionCategoria: 'Pantallas para equipos de escritorio', estadoCategoria: 'Activa' },
    { id: 5, nombreCategoria: 'Smartphone', descripcionCategoria: 'Teléfonos inteligentes para comunicación y uso escolar', estadoCategoria: 'Activa' },
]

export async function obtenerCategorias() {
    return categorias
}

export async function obtenerCategoria(id) {
    return buscarPorId(categorias, id)
}

// ===== TÉCNICOS =====
const tecnicos = [
    { id: 1, especialidadTecnico: 'Hardware de laptops', disponibilidadTecnico: 'Disponible' },
    { id: 2, especialidadTecnico: 'Computadoras de escritorio', disponibilidadTecnico: 'Ocupado' },
    { id: 3, especialidadTecnico: 'Tabletas y celulares', disponibilidadTecnico: 'Disponible' },
    { id: 4, especialidadTecnico: 'Pantallas', disponibilidadTecnico: 'Disponible' },
    { id: 5, especialidadTecnico: 'Software y sistemas', disponibilidadTecnico: 'Disponible' },
]

export async function obtenerTecnicos() {
    return tecnicos
}

export async function obtenerTecnico(id) {
    return buscarPorId(tecnicos, id)
}

// ===== DONADORES =====
// numeroDonador = número exterior de la dirección
const donadores = [
    { id: 1, tipoDonador: 'Empresa', calleDonador: 'Blvd. Hermanos Serdán', numeroDonador: 2653, cpDonador: 72140 },
    { id: 2, tipoDonador: 'Persona', calleDonador: 'Calle 5 de Mayo', numeroDonador: 120, cpDonador: 72000 },
    { id: 3, tipoDonador: 'Institución', calleDonador: 'Av. 40 Pte.', numeroDonador: 3144, cpDonador: 72000 },
    { id: 4, tipoDonador: 'Empresa', calleDonador: 'Av. Juárez', numeroDonador: 2915, cpDonador: 72160 },
    { id: 5, tipoDonador: 'Persona', calleDonador: 'Av. Reforma', numeroDonador: 512, cpDonador: 72000 },
]

export async function obtenerDonadores() {
    return donadores
}

export async function obtenerDonador(id) {
    return buscarPorId(donadores, id)
}

// ===== DONACIONES =====
const donaciones = [
    { id: 1, ID_donador: 1, fechaDonacion: '2026-09-15', tipoEntregaDonacion: 'Recolección en domicilio', observacionesDonacion: 'Lote de 30 tabletas Samsung Galaxy Tab A8 con cargador', estadoDonacion: 'Recibida' },
    { id: 2, ID_donador: 4, fechaDonacion: '2026-09-20', tipoEntregaDonacion: 'Entrega en sitio', observacionesDonacion: 'Lote de 5 laptops Dell Latitude usadas con cargador', estadoDonacion: 'Recibida' },
    { id: 3, ID_donador: 2, fechaDonacion: '2026-10-01', tipoEntregaDonacion: 'Entrega en sitio', observacionesDonacion: 'Laptop personal Acer con pantalla dañada', estadoDonacion: 'Recibida' },
    { id: 4, ID_donador: 3, fechaDonacion: '2026-10-05', tipoEntregaDonacion: 'Recolección en domicilio', observacionesDonacion: 'Lote de 10 computadoras de escritorio dadas de baja', estadoDonacion: 'Recibida' },
    { id: 5, ID_donador: 5, fechaDonacion: '2026-11-15', tipoEntregaDonacion: 'Entrega en sitio', observacionesDonacion: 'Celular usado sin cargador', estadoDonacion: 'En revisión' },
]

export async function obtenerDonaciones() {
    return donaciones
}

export async function obtenerDonacion(id) {
    return buscarPorId(donaciones, id)
}

// ===== EQUIPOS =====
const equipos = [
    { id: 1, ID_donacion: 2, ID_categoria: 1, codigoInventarioEquipo: 1001, marcaEquipo: 'Dell', modeloEquipo: 'Latitude 5490', numeroSerieEquipo: '5CD8241XYZ', procesadorEquipo: 'Intel Core i5-8350U', memoriaRamEquipo: '8 GB DDR4', almacenamientoEquipo: '256GB SSD', osEquipo: 'Windows 10 Pro', fechaRegistroEquipo: '2026-09-21', estadoEquipo: 'Asignado' },
    { id: 2, ID_donacion: 1, ID_categoria: 2, codigoInventarioEquipo: 1002, marcaEquipo: 'Samsung', modeloEquipo: 'Galaxy Tab A8', numeroSerieEquipo: 'R9PT40ABC1X', procesadorEquipo: 'Unisoc T618', memoriaRamEquipo: '3 GB', almacenamientoEquipo: '32GB', osEquipo: 'Android 14', fechaRegistroEquipo: '2026-09-16', estadoEquipo: 'Asignado' },
    { id: 3, ID_donacion: 3, ID_categoria: 1, codigoInventarioEquipo: 1003, marcaEquipo: 'Acer', modeloEquipo: 'Aspire 5 A515-51', numeroSerieEquipo: 'NXGP4AL0047', procesadorEquipo: 'Intel Core i5-7200U', memoriaRamEquipo: '8 GB DDR4', almacenamientoEquipo: '1TB HDD', osEquipo: 'Windows 10 Home', fechaRegistroEquipo: '2026-10-02', estadoEquipo: 'Asignado' },
    { id: 4, ID_donacion: 4, ID_categoria: 3, codigoInventarioEquipo: 1004, marcaEquipo: 'Dell', modeloEquipo: 'OptiPlex 7050', numeroSerieEquipo: '7HGQ2K2', procesadorEquipo: 'Intel Core i5-7500', memoriaRamEquipo: '8 GB DDR4', almacenamientoEquipo: '500GB HDD', osEquipo: 'Windows 10 Pro', fechaRegistroEquipo: '2026-10-06', estadoEquipo: 'En reparación' },
    { id: 5, ID_donacion: 5, ID_categoria: 5, codigoInventarioEquipo: 1005, marcaEquipo: 'Samsung', modeloEquipo: 'Galaxy S22', numeroSerieEquipo: 'R5CT21XYZ8P', procesadorEquipo: 'Snapdragon 8 Gen 1', memoriaRamEquipo: '8 GB', almacenamientoEquipo: '128GB', osEquipo: 'Android 14', fechaRegistroEquipo: '2026-11-16', estadoEquipo: 'Pendiente de diagnóstico' },
]

export async function obtenerEquipos() {
    return equipos
}

export async function obtenerEquipo(id) {
    return buscarPorId(equipos, id)
}

// Los equipos que llegaron en una donación
export async function obtenerEquiposDeDonacion(idDonacion) {
    return filtrarPor(equipos, 'ID_donacion', idDonacion)
}

// ===== HISTORIALES =====
const historiales = [
    { id: 1, ID_equipo: 1, fechaMovimiento: '2026-09-21', tipoMovimiento: 'Ingreso', descripcionMovimiento: 'El equipo llega de la donación y se registra en el inventario', ubicacionAnterior: 'Recepción', ubicacionNueva: 'Taller' },
    { id: 2, ID_equipo: 1, fechaMovimiento: '2026-09-24', tipoMovimiento: 'Reparación terminada', descripcionMovimiento: 'Se amplió la memoria RAM y el equipo queda listo para asignarse', ubicacionAnterior: 'Taller', ubicacionNueva: 'Almacén' },
    { id: 3, ID_equipo: 2, fechaMovimiento: '2026-10-20', tipoMovimiento: 'Asignación', descripcionMovimiento: 'La tableta se entrega a la Primaria Benito Juárez', ubicacionAnterior: 'Almacén', ubicacionNueva: 'Primaria Benito Juárez' },
    { id: 4, ID_equipo: 3, fechaMovimiento: '2026-11-08', tipoMovimiento: 'Asignación', descripcionMovimiento: 'La laptop reparada se entrega al estudiante beneficiario', ubicacionAnterior: 'Almacén', ubicacionNueva: 'Domicilio del beneficiario' },
    { id: 5, ID_equipo: 5, fechaMovimiento: '2026-11-16', tipoMovimiento: 'Ingreso', descripcionMovimiento: 'El celular llega de la donación y espera diagnóstico', ubicacionAnterior: 'Recepción', ubicacionNueva: 'Taller' },
]

export async function obtenerHistoriales() {
    return historiales
}

export async function obtenerHistorial(id) {
    return buscarPorId(historiales, id)
}

// Los movimientos de un equipo
export async function obtenerHistorialesDeEquipo(idEquipo) {
    return filtrarPor(historiales, 'ID_equipo', idEquipo)
}

// ===== BENEFICIARIOS =====
const beneficiarios = [
    { id: 1, tipoBeneficiario: 'Escuela', institucionBeneficiario: 'Primaria Benito Juárez', necesidadBeneficiario: 'Tabletas para clases digitales en el salón' },
    { id: 2, tipoBeneficiario: 'Escuela', institucionBeneficiario: 'Secundaria Técnica 67', necesidadBeneficiario: 'Laptops para el taller de informática' },
    { id: 3, tipoBeneficiario: 'Organización', institucionBeneficiario: 'Fundación Pablo Armando', necesidadBeneficiario: 'Laptops para capacitación comunitaria' },
    { id: 4, tipoBeneficiario: 'Persona', institucionBeneficiario: 'Estudiante de preparatoria', necesidadBeneficiario: 'Laptop para hacer tareas escolares' },
    { id: 5, tipoBeneficiario: 'Institución', institucionBeneficiario: 'Biblioteca Municipal', necesidadBeneficiario: 'Computadoras de escritorio para consulta pública' },
]

export async function obtenerBeneficiarios() {
    return beneficiarios
}

export async function obtenerBeneficiario(id) {
    return buscarPorId(beneficiarios, id)
}

// ===== COMPONENTES =====
// existenciaComponente es texto: Disponible, Pocas piezas o Agotado
const componentes = [
    { id: 1, nombreComponente: 'Memoria RAM', marcaComponente: 'Kingston', modeloComponente: 'KVR26S19S8/8', descripcionComponente: 'Módulo SO-DIMM DDR4 de 8 GB a 2666 MHz para laptop', precioComponente: 450, existenciaComponente: 'Disponible' },
    { id: 2, nombreComponente: 'Disco SSD', marcaComponente: 'Kingston', modeloComponente: 'A400 480GB', descripcionComponente: 'Unidad de estado sólido SATA de 480 GB', precioComponente: 520, existenciaComponente: 'Disponible' },
    { id: 3, nombreComponente: 'Batería para laptop', marcaComponente: 'Acer', modeloComponente: 'AL15A32', descripcionComponente: 'Batería de ion de litio de 4 celdas para Aspire', precioComponente: 780, existenciaComponente: 'Pocas piezas' },
    { id: 4, nombreComponente: 'Pantalla LCD', marcaComponente: 'LG', modeloComponente: 'LP156WH', descripcionComponente: 'Display para laptop de 15.6 pulgadas', precioComponente: 1150, existenciaComponente: 'Disponible' },
    { id: 5, nombreComponente: 'Teclado', marcaComponente: 'Dell', modeloComponente: 'KB216', descripcionComponente: 'Teclado USB en español para equipo de escritorio', precioComponente: 350, existenciaComponente: 'Agotado' },
]

export async function obtenerComponentes() {
    return componentes
}

export async function obtenerComponente(id) {
    return buscarPorId(componentes, id)
}

// ===== SOLICITUDES =====
const solicitudes = [
    { id: 1, ID_beneficiario: 1, fechaSolicitud: '2026-09-25', motivoSolicitud: 'Los alumnos no cuentan con dispositivos para clases digitales', usoDestinadoSolicitud: 'Clases en el salón', prioridadSolicitud: 'Alta', estadoSolicitud: 'Aprobada', observacionesSolicitud: 'Requieren 30 tabletas para un grupo completo' },
    { id: 2, ID_beneficiario: 2, fechaSolicitud: '2026-09-28', motivoSolicitud: 'Los equipos del taller son obsoletos', usoDestinadoSolicitud: 'Taller de informática', prioridadSolicitud: 'Alta', estadoSolicitud: 'Aprobada', observacionesSolicitud: 'Requieren 3 laptops' },
    { id: 3, ID_beneficiario: 3, fechaSolicitud: '2026-09-30', motivoSolicitud: 'No cuentan con equipos para sus cursos', usoDestinadoSolicitud: 'Capacitación comunitaria', prioridadSolicitud: 'Media', estadoSolicitud: 'Aprobada', observacionesSolicitud: 'Requieren 2 laptops' },
    { id: 4, ID_beneficiario: 4, fechaSolicitud: '2026-10-10', motivoSolicitud: 'No tiene computadora en casa', usoDestinadoSolicitud: 'Tareas escolares', prioridadSolicitud: 'Media', estadoSolicitud: 'Aprobada', observacionesSolicitud: 'Ninguna' },
    { id: 5, ID_beneficiario: 5, fechaSolicitud: '2026-10-12', motivoSolicitud: 'Los equipos de consulta están dañados', usoDestinadoSolicitud: 'Consulta pública', prioridadSolicitud: 'Baja', estadoSolicitud: 'Aprobada', observacionesSolicitud: 'Esperan computadoras de escritorio reparadas' },
]

export async function obtenerSolicitudes() {
    return solicitudes
}

export async function obtenerSolicitud(id) {
    return buscarPorId(solicitudes, id)
}

// ===== ASIGNACIONES =====
const asignaciones = [
    { id: 1, ID_solicitud: 1, fechaAsignacion: '2026-10-15', fechaEntregaAsignacion: '2026-10-20', condicionesEntregaAsignacion: 'Entregar con cargadores y fundas', estadoAsignacion: 'Entregada' },
    { id: 2, ID_solicitud: 2, fechaAsignacion: '2026-10-28', fechaEntregaAsignacion: '2026-11-03', condicionesEntregaAsignacion: 'Entregar con cargador y Windows activado', estadoAsignacion: 'Entregada' },
    { id: 3, ID_solicitud: 3, fechaAsignacion: '2026-10-28', fechaEntregaAsignacion: '2026-11-05', condicionesEntregaAsignacion: 'Entregar con cargador y firma de recibido', estadoAsignacion: 'Entregada' },
    { id: 4, ID_solicitud: 4, fechaAsignacion: '2026-10-20', fechaEntregaAsignacion: '2026-11-08', condicionesEntregaAsignacion: 'Entregar con cargador y mochila', estadoAsignacion: 'Entregada' },
    { id: 5, ID_solicitud: 5, fechaAsignacion: '2026-11-10', fechaEntregaAsignacion: '2026-11-30', condicionesEntregaAsignacion: 'Entregar con teclado, mouse y cables', estadoAsignacion: 'Pendiente' },
]

export async function obtenerAsignaciones() {
    return asignaciones
}

export async function obtenerAsignacion(id) {
    return buscarPorId(asignaciones, id)
}

// ===== EVALUACIONES =====
// Solo evalúa quien ya recibió su equipo (la Biblioteca aún no). Calificación del 1 al 10.
const evaluaciones = [
    { id: 1, ID_donacion: 1, ID_beneficiario: 1, fechaEvaluacion: '2026-10-30', estadoFuncionamientoEvaluacion: 'Funciona correctamente', observacionesEvaluacion: 'Las tabletas encienden bien y la batería dura toda la jornada', calificacionEvaluacion: 10 },
    { id: 2, ID_donacion: 2, ID_beneficiario: 2, fechaEvaluacion: '2026-11-13', estadoFuncionamientoEvaluacion: 'Funciona correctamente', observacionesEvaluacion: 'Rendimiento adecuado para las prácticas del taller', calificacionEvaluacion: 9 },
    { id: 3, ID_donacion: 2, ID_beneficiario: 3, fechaEvaluacion: '2026-11-15', estadoFuncionamientoEvaluacion: 'Funciona con fallas menores', observacionesEvaluacion: 'Una de las laptops hace ruido en el ventilador', calificacionEvaluacion: 8 },
    { id: 4, ID_donacion: 3, ID_beneficiario: 4, fechaEvaluacion: '2026-11-18', estadoFuncionamientoEvaluacion: 'Funciona correctamente', observacionesEvaluacion: 'La pantalla y la batería nuevas funcionan bien', calificacionEvaluacion: 9 },
]

export async function obtenerEvaluaciones() {
    return evaluaciones
}

export async function obtenerEvaluacion(id) {
    return buscarPorId(evaluaciones, id)
}

// ===== DIAGNÓSTICOS =====
// El técnico corresponde al tipo de equipo o de falla
const diagnosticos = [
    { id: 1, ID_tecnico: 1, ID_equipo: 1, fechaDiagnostico: '2026-09-22', problemaDiagnostico: 'El equipo es lento y se congela al abrir varios programas', estadoDiagnostico: 'Completado', reparacionDiagnostico: 'Ampliar RAM a 16 GB', observacionesDiagnostico: 'El disco SSD está en buen estado' },
    { id: 2, ID_tecnico: 4, ID_equipo: 3, fechaDiagnostico: '2026-10-03', problemaDiagnostico: 'La pantalla muestra líneas verticales', estadoDiagnostico: 'Completado', reparacionDiagnostico: 'Cambio de pantalla LCD', observacionesDiagnostico: 'El cable flex está en buen estado' },
    { id: 3, ID_tecnico: 1, ID_equipo: 3, fechaDiagnostico: '2026-10-03', problemaDiagnostico: 'La batería no carga y el equipo solo enciende conectado', estadoDiagnostico: 'Completado', reparacionDiagnostico: 'Reemplazo de batería', observacionesDiagnostico: 'La batería original está inflada' },
    { id: 4, ID_tecnico: 2, ID_equipo: 4, fechaDiagnostico: '2026-10-07', problemaDiagnostico: 'El sistema tarda varios minutos en iniciar', estadoDiagnostico: 'Completado', reparacionDiagnostico: 'Cambiar disco duro por SSD', observacionesDiagnostico: 'Se recomienda reinstalar el sistema' },
    { id: 5, ID_tecnico: 2, ID_equipo: 4, fechaDiagnostico: '2026-10-07', problemaDiagnostico: 'Varias teclas del teclado no responden', estadoDiagnostico: 'Completado', reparacionDiagnostico: 'Reemplazo de teclado', observacionesDiagnostico: 'El teclado tiene líquido derramado' },
]

export async function obtenerDiagnosticos() {
    return diagnosticos
}

export async function obtenerDiagnostico(id) {
    return buscarPorId(diagnosticos, id)
}

// ===== REPARACIONES =====
// La última sigue en proceso: aún no tiene fecha de término ni costo final (null)
const reparaciones = [
    { id: 1, ID_diagnostico: 1, fechaInicioReparacion: '2026-09-23', fechaTerminoReparacion: '2026-09-24', descripcionReparacion: 'Se agregó un módulo de RAM de 8 GB', costoEstimadoReparacion: 500, costoFinalReparacion: 450, estadoReparacion: 'Terminada' },
    { id: 2, ID_diagnostico: 2, fechaInicioReparacion: '2026-10-05', fechaTerminoReparacion: '2026-10-06', descripcionReparacion: 'Se sustituyó la pantalla LCD de 15.6 pulgadas', costoEstimadoReparacion: 1200, costoFinalReparacion: 1150, estadoReparacion: 'Terminada' },
    { id: 3, ID_diagnostico: 3, fechaInicioReparacion: '2026-10-05', fechaTerminoReparacion: '2026-10-05', descripcionReparacion: 'Se cambió la batería por una nueva', costoEstimadoReparacion: 850, costoFinalReparacion: 780, estadoReparacion: 'Terminada' },
    { id: 4, ID_diagnostico: 4, fechaInicioReparacion: '2026-10-08', fechaTerminoReparacion: '2026-10-09', descripcionReparacion: 'Se instaló un SSD y se reinstaló Windows', costoEstimadoReparacion: 600, costoFinalReparacion: 520, estadoReparacion: 'Terminada' },
    { id: 5, ID_diagnostico: 5, fechaInicioReparacion: '2026-11-10', fechaTerminoReparacion: null, descripcionReparacion: 'Se reemplaza el teclado del equipo', costoEstimadoReparacion: 400, costoFinalReparacion: null, estadoReparacion: 'En proceso' },
]

export async function obtenerReparaciones() {
    return reparaciones
}

export async function obtenerReparacion(id) {
    return buscarPorId(reparaciones, id)
}

// Las reparaciones que salieron de un diagnóstico
export async function obtenerReparacionesDeDiagnostico(idDiagnostico) {
    return filtrarPor(reparaciones, 'ID_diagnostico', idDiagnostico)
}

// ===== DETALLE DE COMPONENTES =====
// costoUnitarioDetalle = precioComponente al momento de la reparación
const detalleComponentes = [
    { id: 1, ID_componente: 1, ID_reparacion: 1, cantidadUtilizadaDetalle: 1, costoUnitarioDetalle: 450 },
    { id: 2, ID_componente: 4, ID_reparacion: 2, cantidadUtilizadaDetalle: 1, costoUnitarioDetalle: 1150 },
    { id: 3, ID_componente: 3, ID_reparacion: 3, cantidadUtilizadaDetalle: 1, costoUnitarioDetalle: 780 },
    { id: 4, ID_componente: 2, ID_reparacion: 4, cantidadUtilizadaDetalle: 1, costoUnitarioDetalle: 520 },
    { id: 5, ID_componente: 5, ID_reparacion: 5, cantidadUtilizadaDetalle: 1, costoUnitarioDetalle: 350 },
]

// Las piezas que se usaron en una reparación
export async function obtenerDetallesDeReparacion(idReparacion) {
    return filtrarPor(detalleComponentes, 'ID_reparacion', idReparacion)
}