const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done) {
    
    src('src/scss/app.scss') // Identificar el archivo principal
        .pipe( sass() ) // Compilar SASS
        .pipe( dest('build/css') ) // Exportarlo o guardarlo en una ubicación
    
    done();
}

function dev() {
    watch('src/scss/**/*.scss', css); // Vigilar cambios en los archivos
}

exports.css = css;
exports.dev = dev;