const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));

function css(done){
    //1.identificar el archivo de sass "src"
    //2.compilarlo
    //3. alamacernarla en el disco duro "dest"

    src('src/scss/app.scss') //identificando archivo
    .pipe(sass()) //compilando
    .pipe(dest("build/css"));//almacenando

    done(); //callback que avisa a gulp que se ha llegado al final
}
function dev(done){
    watch('src/scss/app.scss', css)

    done();
}

exports.css = css;
exports.dev = dev;