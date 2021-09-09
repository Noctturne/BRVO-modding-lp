const { src, dest, watch } = require('gulp')
const sass = require('gulp-sass')(require('dart-sass'));

function compileSASS(){
    return src("./src/sass/style.scss").pipe(sass()).pipe( dest("./src/css"));
}

function watchFiles(){
    watch("./src/sass/style.scss", compileSASS);
}
exports.compileSASS = compileSASS;
exports.watchFiles = watchFiles;