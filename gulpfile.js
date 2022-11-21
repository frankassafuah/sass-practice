const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')


//function to compile our sass
function buildStyles() {
    return src('scss/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({content: ['*.html']}))
        .pipe(dest('css'))
}

//watcher function to watch sass file for chnages and automatically update css file when saved
function watchTask() {
    watch(['scss/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)