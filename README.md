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


## Deploy en Vercel paso a paso

La app está preparada para Vercel y no necesita servidor propio, base de datos, variables de entorno ni servicios externos. Vercel ejecutará `npm install` y `npm run build`, y servirá la aplicación Next.js automáticamente.

### Opción A: desde la interfaz web de Vercel

1. Crea una cuenta o inicia sesión en [Vercel](https://vercel.com).
2. Sube este proyecto a un repositorio Git en GitHub, GitLab o Bitbucket.
3. En Vercel, pulsa **Add New... > Project**.
4. Selecciona el repositorio de la aplicación.
5. En **Framework Preset**, Vercel debería detectar **Next.js** automáticamente.
6. Deja estos valores por defecto:
   - **Install Command:** `npm install`
   - **Build Command:** `npm run build`
   - **Output Directory:** vacío / automático para Next.js
7. No añadas variables de entorno: no hacen falta.
8. Pulsa **Deploy**.
9. Cuando termine, Vercel mostrará una URL pública tipo `https://tu-proyecto.vercel.app`.

### Opción B: desde la CLI de Vercel

Instala la CLI si no la tienes:

```bash
npm i -g vercel
```

Desde la raíz del proyecto, ejecuta:

```bash
vercel
```

Para publicar directamente en producción:

```bash
vercel --prod
```

Durante el asistente de la CLI puedes aceptar la configuración detectada para Next.js. No necesitas configurar base de datos ni variables de entorno.

### Después del deploy

- La persistencia se guarda en `localStorage`, así que cada navegador tendrá sus propios datos demo.
- Para volver al estado inicial, entra en **Ajustes** y pulsa **Restaurar datos demo**.
- Para llevar datos entre navegadores o demos, exporta JSON desde **Ajustes** e impórtalo después en otro navegador.
- Si haces cambios en el repositorio conectado a Vercel, cada push generará un nuevo deploy automáticamente.

## Notas para demo comercial

- Usa el botón **Restaurar datos demo** en Ajustes para volver al estado inicial.
- Exporta productos a CSV o todo el estado a JSON desde Ajustes.
- Importa un JSON exportado previamente para recuperar una demo personalizada.
