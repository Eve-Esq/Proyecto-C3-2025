# Backlog en Jira - ejemplos

Epicas
- EP01 Autenticacion y seguridad
- EP02 Gestion de usuarios
- EP03 Programas y terapias
- EP04 PEI y progreso
- EP05 Dashboards y reportes
- EP06 Accesibilidad

Historias de usuario (ejemplos)

HU-01 (EP01)
Como usuario registrado, quiero iniciar sesion con correo o cedula para acceder a mi dashboard.
Criterios de aceptacion:
- Campo de correo/cedula y contrasena obligatorios
- Validacion de credenciales con la base de datos
- Redireccion segun rol
- Mensaje de error accesible si las credenciales son invalidas

HU-02 (EP01)
Como usuario, quiero recuperar mi contrasena para restablecer el acceso.
Criterios:
- Ingreso de correo o cedula
- Envio de enlace seguro al correo
- Enlace expira en 30-60 min
- Soporte de verificacion audible

HU-05 (EP02)
Como administrador, quiero crear y editar usuarios con roles para gestionar el acceso al sistema.
Criterios:
- Formulario con validaciones
- Roles: admin, docente/terapeuta, encargado
- Listado filtrable y exportable
- Confirmacion de guardado

HU-12 (EP04)
Como terapeuta, quiero crear/editar el PEI de cada estudiante para personalizar la intervencion.
Criterios:
- Formularios con metas, objetivos, adaptaciones
- Asociacion a terapias activas
- Adjuntar recursos (PDF/audio/video)
- Registro de auditoria (quien y cuando)

HU-17 (EP05)
Como administrador, quiero ver metricas globales para tomar decisiones.
Criterios:
- Tarjetas con totales (usuarios, terapias, progreso)
- Filtros por rango de fechas
- Exportacion a PDF/CSV
