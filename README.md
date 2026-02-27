# Portfolio Pharus Creative

Sitio web de portfolio y servicios para **Pharus Creative**: fotografía, video, contenido y marketing digital. Desarrollado con React, TypeScript y Vite.

---

## Desarrollo

### Ejecutar en local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

### Ver en el móvil (misma red Wi‑Fi)

```bash
npm run dev:lan
```

Obtén la IP de tu Mac (ej. `192.168.1.100`) y en el móvil entra a `http://<IP>:5173`.

### Build y vista previa de producción

```bash
npm run build
npm run preview
```

---

## Cómo cambiar la información del sitio

Todo el contenido editable está en archivos de **constantes** dentro de `src/`. No hace falta tocar componentes ni rutas para actualizar textos, enlaces o imágenes referenciadas.

### 1. Datos globales (nombre, redes, SEO)

**`src/core/constants/appConstants.ts`**

- `title`, `subtitle`: nombre y eslogan (barra, títulos).
- `description`, `keywords`, `url`, `image`: metadatos y Open Graph.
- `twitter`, `facebook`, `instagram`, `linkedin`: handles para redes.

**`src/core/constants/contactInfo.ts`**

- **WhatsApp:** `number`, `message` (mensaje por defecto al abrir el enlace).
- **Instagram / LinkedIn:** `username`, `url`.
- **Empresa:** `name`, `tagline`, `location`.
- **Contacto:** `email`, `phone`.

Los enlaces del footer y botones de contacto salen de aquí.

---

### 2. Página “Sobre mí”

**`src/features/about_us/constants/aboutUsContent.ts`**

- `title`: título de la sección (ej. `"ABOUT ME"`).
- `paragraphs`: array de strings; cada uno es un párrafo del texto principal.
- `imageAlt`, `imagePlaceholder`: accesibilidad y placeholder de la imagen.

---

### 3. Tarjetas de servicios (página Servicios)

**`src/features/services/constants/serviceCardData.ts`**

Cada tarjeta tiene:

- `title`: nombre del servicio.
- `previewImage`: imagen principal (import desde `src/assets/` o desde portfolio).
- `description`: texto corto debajo.
- `link`: ruta interna (ej. `/services/weddings`).
- `gallery` (opcional): array de imágenes para la galería al hacer hover; pueden ser rutas de `portfolioAssets` (ej. `PORTFOLIO_IMAGE_PATHS.weddings[21]`).

Para cambiar la imagen de portada de un servicio, cambia el `import` y `previewImage`. Para cambiar las fotos de la galería, edita el array `gallery` usando las imágenes de `PORTFOLIO_IMAGE_PATHS` (weddings, family, products, events).

---

### 4. Imágenes del home (carrusel / grid de la portada)

**Imágenes en disco:** `src/assets/home/`

- Nombres: `home1.jpg`, `home2.jpg`, … hasta `home24.jpg`.
- Si añades o quitas fotos, hay que actualizar el listado de imports y el array en:

**`src/features/home/constants/homeAssets.ts`**

- Añade o quita líneas `import homeN from '...homeN.jpg'` y actualiza el array `HOME_IMAGE_PATHS` (y por tanto `ALL_HOME_IMAGE_PATHS`).

**Títulos del portfolio en home:**  
**`src/features/home/constants/portfolioData.ts`**

- Usa `ALL_HOME_IMAGE_PATHS` y asigna `title` a cada ítem (ej. `"Portfolio 1"`, `"Portfolio 2"`). Puedes cambiar la lógica para dar títulos distintos.

---

### 5. Portfolio por categorías (Weddings, Family, Products, Events)

**Imágenes en disco:**

- `src/assets/portfolio/events/`  → `event1.jpg` … `event32.jpg`, más `main.jpg`.
- `src/assets/portfolio/family/` → `family1.jpg` … `family24.jpg`, más `main.jpg`.
- `src/assets/portfolio/products/` → `product1.jpg` … `product31.jpg`, más `main.jpg`.
- `src/assets/portfolio/weddings/` → `wedding1.jpg` … `wedding34.jpg`, más `main.jpg`.

**Archivo que enlaza todas las imágenes:**  
**`src/features/portfolio/constants/portfolioAssets.ts`**

- Ahí se importan todas las fotos y se exportan:
  - `PORTFOLIO_IMAGE_PATHS`: objetos por categoría (events, family, products, weddings).
  - `PORTFOLIO_MAIN_IMAGES`: imagen principal de cada categoría (`main.jpg`).
  - `ALL_PORTFOLIO_IMAGE_PATHS`: todas en un solo array (para preload).

Si añades o quitas imágenes en una carpeta, hay que actualizar en este archivo los imports y los arrays de esa categoría.

**Tarjetas de categoría en la página Portfolio:**  
**`src/features/portfolio/constants/portfolioCardData.ts`**

- Define título, descripción, `link`, imagen de preview (`PORTFOLIO_MAIN_IMAGES`) y galería (`PORTFOLIO_IMAGE_PATHS.*`) para cada categoría. Edita textos o enlaces aquí.

---

### 6. Paquetes y precios (Weddings, Family, Product, Events)

Cada servicio tiene su propio archivo de paquetes:

- **`src/features/services/constants/weddingPackages.ts`** — Bodas
- **`src/features/services/constants/peopleStudioPortraitsPackages.ts`** — Sesiones familiares / retratos
- **`src/features/services/constants/productPhotographyPackages.ts`** — Fotografía de producto
- **`src/features/services/constants/eventsData.ts`** o datos de eventos

En cada uno suele haber un array de objetos con:

- `title`, `description`, `descriptionItems` (lista de puntos), `price`, `imagePath` (puede venir de `PORTFOLIO_IMAGE_PATHS`).

Modifica esos arrays para cambiar textos, precios o imágenes de cada paquete.

---

### 7. Resumen rápido: qué archivo tocar

| Qué quieres cambiar        | Archivo |
|---------------------------|--------|
| Nombre del sitio, eslogan, SEO | `core/constants/appConstants.ts` |
| WhatsApp, email, teléfono, redes | `core/constants/contactInfo.ts` |
| Texto “Sobre mí”          | `features/about_us/constants/aboutUsContent.ts` |
| Tarjetas de la página Servicios | `features/services/constants/serviceCardData.ts` |
| Fotos de la portada (home) | `assets/home/` + `features/home/constants/homeAssets.ts` |
| Títulos del portfolio en home | `features/home/constants/portfolioData.ts` |
| Fotos del portfolio por categoría | `assets/portfolio/<categoría>/` + `features/portfolio/constants/portfolioAssets.ts` |
| Tarjetas de categorías en Portfolio | `features/portfolio/constants/portfolioCardData.ts` |
| Paquetes y precios (bodas, etc.) | `features/services/constants/weddingPackages.ts` (y los demás `*Packages.ts`, `eventsData.ts`) |

---

## Estructura del proyecto (resumen)

```
src/
├── assets/                 # Imágenes: home, portfolio (events, family, products, weddings)
├── core/
│   ├── constants/          # appConstants, contactInfo
│   ├── hooks/              # usePreloadImages, etc.
│   └── common/             # TopBar, Footer, hooks de UI
└── features/
    ├── home/               # Portada, portfolio preview
    ├── about_us/           # Página Sobre mí
    ├── services/           # Servicios, paquetes, tarjetas
    └── portfolio/          # Galerías por categoría
```

---

## Scripts

| Comando        | Uso                          |
|----------------|------------------------------|
| `npm run dev`  | Desarrollo local              |
| `npm run dev:lan` | Desarrollo accesible en la red (móvil) |
| `npm run build`   | Build de producción        |
| `npm run preview` | Vista previa del build    |
| `npm run lint`    | Linter (ESLint)           |
