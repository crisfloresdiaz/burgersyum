FRAMEWORK7 - PROYECTO BASE

Estructura:
framework7_base_app/
├── index.html
├── css/app.css
├── js/app.js
└── pages/
    ├── home.html
    └── ejemplo.html

IMPORTANTE:
Framework7 carga páginas con fetch/AJAX. Ejecuta el proyecto con un servidor local.

VS CODE:
1. Instala la extensión Live Server.
2. Abre esta carpeta.
3. Clic derecho en index.html > Open with Live Server.

PYTHON:
Dentro de la carpeta ejecuta:
python -m http.server 8000
Luego abre http://localhost:8000

PARA AGREGAR UNA PÁGINA:
1. Crea pages/productos.html
2. En js/app.js agrega:
   { path: '/productos/', url: './pages/productos.html' },
3. Enlázala con:
   <a href="/productos/">Productos</a>
