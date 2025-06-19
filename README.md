# DineroFacil Monorepo

Este repositorio es un monorepo que contiene tanto el backend (ASP.NET Core) como el frontend (React + Vite) de la aplicación DineroFácil.

## Estructura del proyecto

- `backend/` — API y lógica de negocio en .NET 8
- `frontend/` — Aplicación web en React + Vite
- `docker/` — Archivos de configuración para Docker y Docker Compose

## Comandos útiles

### Instalación de dependencias

```sh
npm install
```

### Levantar ambos proyectos en desarrollo

```sh
npm run dev
```

### Levantar solo el frontend

```sh
npm run dev:frontend
```

### Levantar solo el backend

```sh
npm run dev:backend
```

### Build de ambos proyectos

```sh
npm run build:frontend
npm run build:backend
```

## Notas

- Asegúrate de tener instalados Node.js, npm y .NET 8 SDK.
- Puedes personalizar los scripts en `package.json` según tus necesidades.
