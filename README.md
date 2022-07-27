# SCSS
Para trabajar con sass lo instalamos con **npm i -D sass**.
Ahora en el package json hacemos un script llamado sass y poner en que carpeta se construira *ver ejemplo del codigo*.
 Y para poder correrlo es con **npm run sass**

# Gulp
Para gulp lo instalamos con **nmp i -D gulp**.
Creamos un archivo llamado gulpfile.js y para correr codigo de ahi lo hacemos con **npx gulp nombreFuncion** por ejemplo **npx gulp primerTrea**.
Se puede tambien crear un script y correrlo con **npm run nombre** por ejemplo viendo el package json se hizo de esta manera **npm run primerTarea**, porque ese nombre? porque es el nombre que tiene el exports en el gulpfile

# Conector gulp-sass
```
const {src, dest} = require("gulp");
const sass = require("sass");

function css(done){
    //1.identificar el archivo de sass "src"
    //2.compilarlo
    //3. alamacernarla en el disco duro "dest"

    src('src/scss/app.scss') //identificando archivo
    .pipe(sass()) //compilando
    .pipe(dest("build/css"));//almacenando

    done(); //callback que avisa a gulp que se ha llegado al final
}

exports.css = css;
```
si corremos eso tendremos un error, asi que necesitamos un conector entre gulp y sass, por lo tanto lo instalamos de la siguiente manera. **npm i -D gulp-sass**

# Vieja forma de importar en scss
Para importar simplemente bastaba con un @import 'direccion/nombreCarpeta', pero hay una nueva forma y es la que
esta implementada en este proyecto