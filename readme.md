
```
    __      __                    __            __                                __           __                            _    __     __                                 __     _     ____         
   / /_    / /  ____ _   ____    / /__         / /_  ___    ____ ___     ____    / /  ____ _  / /_  ___         _      __   (_)  / /_   / /_         _   __  __  __  ___   / /_   (_)   / __/   __  __
  / __ \  / /  / __ `/  / __ \  / //_/ ______ / __/ / _ \  / __ `__ \   / __ \  / /  / __ `/ / __/ / _ \ ______| | /| / /  / /  / __/  / __ \ ______| | / / / / / / / _ \ / __/  / /   / /_    / / / /
 / /_/ / / /  / /_/ /  / / / / / ,<   /_____// /_  /  __/ / / / / / /  / /_/ / / /  / /_/ / / /_  /  __//_____/| |/ |/ /  / /  / /_   / / / //_____/| |/ / / /_/ / /  __// /_   / /   / __/   / /_/ / 
/_.___/ /_/   \__,_/  /_/ /_/ /_/|_|         \__/  \___/ /_/ /_/ /_/  / .___/ /_/   \__,_/  \__/  \___/        |__/|__/  /_/   \__/  /_/ /_/        |___/  \__,_/  \___/ \__/  /_/   /_/      \__, /  
                                                                     /_/                                                                                                                     /____/                                                                                                                                                      /_/    \____//_/ /_/\__/        /_____/  /_/ /_/\__,_/ 

```

# blank-template-with-vuetify

**blank template with vuetify:** es un proyecto que puedes usar como arranque para construir cliente front-end tipo admin. Esta construido sobre las siguientes tenologías :

**Vuejs:** es un framework progresivo basado en javascript para la construcción para la construcción de interfaces de usuario y aplicaciones de una sola página. Para mas detalle te invito a visitar su [página oficial](https://vuejs.org/).

**Vuetify:** es un framework que combina la potencia del popular VueJs con la estética de Material Design. Permite acelerar el desarrollo de aplicaciones web complejas, incorporando una gran cantidad de componentes "listos para usar". Para mas detalle te invito a visitar su [página ofinal](https://vuetifyjs.com/).

**Vuex:** es un patrón de gestión de estado + biblioteca para aplicaciones Vue.js. Tiene como objetivo la centralización de la data para todos los componentes de una aplicación, con reglas que aseguran que el estado solo pueda mutarse de manera predecible. Para mas detalle te invito a visitar su [documentación oficial](https://vuex.vuejs.org/).


## Tabla de contenido


* [Configuración del ambiente de desarrollo](#Configuración-del-ambiente-de-desarrollo)

* [Estructura de archivos](#estructura-de-archivos)

* [Modos de ejecución y variables de entornos](#Modos-de-ejecución-y-variables-de-entornos)




# Configuración del ambiente de desarrollo
- Descarga e instala nodejs desde la págiana oficial  [Página oficial de nodejs](https://nodejs.org/en/)
- Descarga e instala git desde la págiana oficial  [Página oficial de git ](https://git-scm.com/)
- Abre tu shell preferido y navega hasta el directorio raiz de tu proyecto
- Instala dependencias del proyecto
    ```
    yarn install
    ```
- Compila y recarga en caliente para el desarrollo
    ```
    yarn serve
    ```
- Limpia y corrige archivos
    ```
    yarn lint
    ```
  


# Estructura de archivos

Dentro del directorio raiz del proyecto encontrás los siguientes directorios y archvios:

```
blank-template-with-vuetify
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
|   |   ├── logo.png
│   │   └── logo.svg 
│   ├── components
│   │   └── base
│   │       ├── Card.vue
│   │       ├── Item.vue
│   │       ├── ItemGroup.vue
│   │       ├── ItemSubGroup.vue
│   │       ├── MaterialAlert.vue
│   │       ├── MaterialCard.vue
│   │       ├── MaterialChartCard.vue
│   │       ├── MaterialSnackbar.vue
│   │       ├── MaterialStatsCard.vue
│   │       ├── MaterialTabs.vue
│   │       ├── MaterialTestimony.vue
│   │       ├── Subheading.vue
│   │       └── VComponent.vue
│   ├── locales
│   │   └── en.json
│   ├── main.js
│   ├── plugins
│   │   ├── base.js
│   │   ├── chartist.js
│   │   ├── vee-validate.js
│   │   └── vuetify.js
│   ├── router
│   |   ├──index.js
│   ├── sass
│   │   ├── vuetify-material
|   |   |   ├── _appbar.sass 
│   │   |   └── _buttons.sass
│   │   |   └── _card.sass
│   │   |   └── _chip.sass
│   │   |   └── _footer.sass
│   │   |   └── _map.sass
│   │   |   └── _modal.sass
│   │   |   └── _notification.sass
│   │   |   └── _pagination.sass
│   │   |   └── _settings.sass
│   │   |   └── _sidebar.sass
│   │   |   └── _tab.sass
│   │   |   └── _table.sass
│   │   |   └── _vierw.sass
│   │   |   └── _ .sass
│   │   ├── overrides.sass
│   │   ├── variables.sass
│   ├── state
|   |   ├── index.js
│   └── views
│   |   ├── dashoard
│   │   └── home
│   │   └── login
│   │   └── modulo1
│   │   └── modulo2
│   │   └── modulo3
│   │   └── password-rest
│   └── App.vue
│   └── 18n.js
│   └── main.js
├── tests
│   ├── e2e
│   │   ├── custom-assertions
│   │   │   └── index.js
│   │   ├── custom-commands
│   │   │   └── test.js
│   │   └── page-objects
│   │       ├── commands.js
│   │       └── index.js
│   └── unit
│       └── example.spec.js
├──.env
├──.env.production
├──.env.test
├── .gitignore
├── babel.config.js
├── .env.development
├── README.md
├── vue.config.js
├── yarn.lock
├── yarn-error.log
```

# Modos de ejecución y variables de entornos

Con el fin compartir parametros o variables en los entornos de producción, pruebas o desarrollo se crearón los
siguientes archivos en la carpeta raiz del proyecto: .env.development, .env.test, .env.production.

 