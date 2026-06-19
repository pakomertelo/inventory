# Changelog

## 2026-06-19

- Creada aplicación completa de inventario para pymes con Next.js App Router, TypeScript y Tailwind CSS.
- Añadido dashboard visual con métricas, valor de inventario, alertas y últimos movimientos.
- Implementada gestión de productos con filtros, ordenación, CRUD, confirmaciones y detalle.
- Implementado registro de movimientos de inventario con actualización automática de stock.
- Añadidas vistas de alertas, proveedores, categorías y ajustes de demo.
- Añadidos datos realistas de ejemplo y persistencia en `localStorage`.
- Añadida exportación JSON/CSV, importación JSON y restauración de datos demo.
- Documentado uso local, build y despliegue en Vercel en `README.md`.

## 2026-06-19 - Documentación de deploy

- Ampliadas las instrucciones de despliegue en Vercel con pasos para interfaz web y CLI.
- Añadida configuración `vercel.json` explícita para documentar comandos de instalación, desarrollo y build.

## 2026-06-19 - Corrección de build en Vercel

- Corregido un parámetro sin tipo explícito en `app/page.tsx` que impedía pasar la validación TypeScript de `next build`.
- Actualizado Next.js a la línea parcheada `14.2.35` para evitar el aviso de seguridad mostrado por Vercel.
