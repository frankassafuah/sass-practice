const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))


//function to compile our sass
function buildStyles() {
    return src('index.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

//watcher function to watch sass file for chnages and automatically update css file when saved
function watchTask() {
    watch(['index.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)