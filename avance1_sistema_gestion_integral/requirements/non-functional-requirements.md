# Requerimientos No Funcionales (RNF)

Rendimiento
- RNF1: Tiempos de respuesta de la API < 500 ms (p95) para operaciones CRUD tipicas.
- RNF2: Carga inicial de pantalla < 3 s en conexion 10 Mbps.

Seguridad
- RNF3: Contrasenas con bcrypt (>= 10 salt rounds).
- RNF4: Autenticacion mediante JWT con expiracion configurable (p. ej., 1 h).
- RNF5: Politica de autorizacion por rol en endpoints.
- RNF6: Validacion y sanitizacion de entrada en servidor (evitar XSS/Injection).
- RNF7: Almacenar secretos solo en variables de entorno (nunca en codigo).

Usabilidad y accesibilidad
- RNF8: Cumplir WCAG 2.1 AA (alto contraste, navegacion por teclado, labels).
- RNF9: Diseno con colores de alta visibilidad y soporte para descripciones de audio.

Disponibilidad y confiabilidad
- RNF10: Uptime >= 99% anual (objetivo).
- RNF11: Logs de errores y auditoria basica (login, cambios de PEI).

Mantenibilidad y calidad
- RNF12: Estandares ESLint + Prettier; estructura modular por capas.
- RNF13: Pruebas minimas de rutas criticas (auth, PEI) o scripts manuales documentados.
- RNF14: CI opcional (GitHub Actions) para lint/test.

Compatibilidad
- RNF15: Soporte para Chrome, Edge, Firefox (versiones estables actuales).
