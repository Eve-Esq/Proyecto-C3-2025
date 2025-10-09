# Sistema de Gestion Integral - Centro Hellen Keller

Aplicacion web para centralizar la gestion academica y administrativa del Centro Nacional de Educacion Hellen Keller.
Incluye autenticacion con roles (administrador, docente/terapeuta, encargado legal), gestion de programas/terapias, PEI y registro de progreso.

## Objetivo (Avance 1)
Entregar la base documental solicitada (README, acuerdos de equipo, RF/RNF) y estructurar el backlog en Jira.

---

## Convenciones de codigo y mensajes de commit
- Carpetas: kebab-case (minusculas con guiones), por ejemplo: requirements, docs.
- Variables (JS): camelCase | Clases/Componentes: PascalCase.
- Commits (en presente, espanol):
  - feat: nueva funcionalidad
  - fix: corregir bug
  - docs: cambios de documentacion
  - style: formato/estilo (no cambia logica)
  - refactor: mejora interna sin cambiar comportamiento
  - test: pruebas
  - chore: tareas varias (scripts, dependencias)
- Ejemplo: feat: agregar formulario de registro de estudiantes

## Estrategia de ramas (branches)
- main: estable (entregas verificadas)
- dev: integracion de trabajo diario
- feature/<breve-descripcion>: una por funcionalidad (ej. feature/login)

Flujo sugerido:
1. Crear issue/tarea en Jira.
2. Crear branch feature/... con el mismo nombre del issue.
3. Pull request a dev (revision por 1 companero).
4. Merge a main cuando pase QA del sprint.

---

## Stack tecnico (propuesto)
- Backend: Node.js + Express, JWT, bcrypt
- Base de datos: MongoDB Atlas
- Frontend: HTML, CSS, JS (posible React/Bootstrap a eleccion del equipo)
- Control de version: Git + GitHub
- Gestion: Jira

---

## Estructura inicial de carpetas
/docs
  - team-agreements.md
/requirements
  - functional-requirements.md
  - non-functional-requirements.md
README.md

---

## Pasos para empezar
1. Crear repositorio en GitHub (privado o publico).
2. Subir estos 4 archivos tal cual la estructura.
3. Crear proyecto en Jira y registrar epicas/historias (ver ejemplos en los .md de requirements).
4. Asignar tareas y empezar con prototipo de login (ruta /auth/login) y recuperacion (/auth/forgot-password).

---

## Autores
- Estudiante: [tu nombre]
- Curso: SOFT-11 - Introduccion a la Ingenieria del Software
- Universidad CENFOTEC
