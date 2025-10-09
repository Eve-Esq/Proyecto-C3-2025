# Requerimientos Funcionales (Sistema de Gestion Integral)

Roles: Administrador, Docente/Terapeuta, Encargado legal.

1. Autenticacion y acceso
- RF1.1: Iniciar sesion con correo o cedula y contrasena.
- RF1.2: Redirigir al dashboard segun rol.
- RF1.3: Cerrar sesion de forma segura.
- RF1.4: Recuperar contrasena ingresando correo o cedula; envia enlace seguro por correo.

2. Gestion de usuarios (Administrador)
- RF2.1: Crear/editar/desactivar usuarios y asignar roles.
- RF2.2: Ver listado filtrable y exportable de usuarios.
- RF2.3: Registrar datos minimos: nombre, correo, cedula, rol, estado.

3. Programas, terapias y especialidades (Administrador)
- RF3.1: Registrar programas educativos, terapias y especialidades.
- RF3.2: Asociar descripciones, objetivos y estado (activo/inactivo).

4. Planes Educativos Individualizados (Docente/Terapeuta)
- RF4.1: Crear y editar PEI por estudiante (meta, objetivos, adaptaciones).
- RF4.2: Asignar PEI a una o varias terapias activas.
- RF4.3: Adjuntar recursos (PDF, audio, video con descripciones).

5. Registro de progreso (Docente/Terapeuta)
- RF5.1: Registrar avances con fecha, observacion y evidencia.
- RF5.2: Consultar historial por estudiante y exportar a PDF.

6. Consulta para encargados legales
- RF6.1: Ver PEI y progreso del estudiante a cargo.
- RF6.2: Recibir alertas de nuevos reportes o mensajes.

7. Dashboards
- RF7.1 (Admin): Ver metricas: usuarios registrados, progreso general, terapias activas.
- RF7.2 (Doc/Ter): Ver lista de grupos/estudiantes asignados y tareas recientes.
- RF7.3 (Encargado): Ver alertas y resumen de progreso.

8. Accesibilidad especifica
- RF8.1: Interfaz de alto contraste; soporte para lectores de pantalla.
- RF8.2: Verificacion audible en recuperacion de contrasena.
