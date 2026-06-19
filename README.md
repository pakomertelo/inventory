# Inventario Pyme Pro

Aplicación web demo de control de inventario para pequeñas empresas, construida con **Next.js App Router**, **TypeScript** y **Tailwind CSS**. Está pensada para presentaciones comerciales: incluye datos realistas, interfaz responsive, modo claro/oscuro y persistencia local sin configurar servicios externos.

## Funcionalidades

- Dashboard con métricas, valor estimado, stock bajo, agotados, categorías y últimos movimientos.
- Gestión de productos con búsqueda, filtros, ordenación, creación, edición, eliminación con confirmación y vista de detalle.
- Movimientos de entrada, salida y ajuste con actualización automática del stock.
- Alertas visuales para productos agotados o con stock bajo.
- Gestión de proveedores y categorías.
- Ajustes de demo: nombre de empresa, moneda, exportación JSON/CSV, importación JSON y restauración de datos demo.
- Datos de ejemplo de ferretería, alimentación, papelería, limpieza, electrónica y tienda local.
- Persistencia en `localStorage`; no necesita backend ni base de datos externa.

## Instalación

```bash
npm install
```

## Arranque local

```bash
npm run dev
```

Abre `http://localhost:3000` en el navegador.

## Build de producción

```bash
npm run build
npm start
```

## Deploy en Vercel

1. Sube el repositorio a GitHub, GitLab o Bitbucket.
2. Crea un nuevo proyecto en Vercel e importa el repositorio.
3. Vercel detectará Next.js automáticamente.
4. Ejecuta el deploy sin variables de entorno ni servicios adicionales.

La aplicación funciona completamente en el navegador usando `localStorage`, por lo que cada usuario mantiene su propia demo local.

## Notas para demo comercial

- Usa el botón **Restaurar datos demo** en Ajustes para volver al estado inicial.
- Exporta productos a CSV o todo el estado a JSON desde Ajustes.
- Importa un JSON exportado previamente para recuperar una demo personalizada.
