//---------CONSTANTES-------------
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');


//  EXEMPLOS DA AULA
// function funcaoPadrao(callback) {
//     setTimeout(function() {
//         console.log("Executando via Gulp");
//         callback();
//     }, 2000)
// }

// function dizOi(callback) {
//     console.log("Olá Gulp");
//     dizTchau();
//     callback();
// }

// function dizTchau() {
//     console.log("Tchau Gulp!");
// }

// COMPRIMIR iMAGENS
function comprimeimg() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images/'));
}

// COMPRIMIR JAVASCRIPT
function comprimeJS() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

// COMPRIMIR SASS
function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

// EXECUTAR TODOS OS COMANDOS E ESPERAR POR MUDANÇAS
exports.default = function() {
    gulp.watch('./source/styles/*.scss',{ignoreInitial : false}, gulp.series(compilaSass))
    gulp.watch('./source/scripts/*.js',{ignoreInitial : false}, gulp.series(comprimeJS))
    gulp.watch('./source/images/*',{ignoreInitial : false}, gulp.series(comprimeimg))
}


// COMANDOS PARA EXECUÇÃO INDIVIDUAL
exports.sass = compilaSass;
exports.minijs = compilaSass;
exports.smlimg = compilaSass;