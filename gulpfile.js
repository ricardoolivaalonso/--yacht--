// ***** Módulos *****
const { src, dest, watch, series, parallel } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
// ***** Path *****
const htmlFile = './dev/html/index.html';
const scssFile = './dev/scss/styles.scss';
const jsFile = './dev/js/main.js';
const dist = './public/';
// ***** Tareas *****
function html() {
  return src( htmlFile )
    .pipe( plumber() )
    .pipe( htmlmin({ collapseWhitespace: true }) )
    .pipe( dest( dist ) )
    .pipe( browserSync.reload({ stream: true }) )
}
function css() {
  return src( scssFile )
    .pipe( plumber() )
    .pipe( sass({ outputStyle: 'compressed' }).on( 'error', sass.logError ))
    .pipe(autoprefixer({
        browsers: ['last 5 versions'],
        cascade: false
    }))
    .pipe(dest( dist + 'css' ))
    .pipe( browserSync.reload({ stream: true }) )
}
function js(){
  return src( jsFile )
    .pipe( plumber() )
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(dest( dist + 'js' ))
    .pipe(browserSync.reload({ stream: true }))
}
function browser(done) {
    browserSync.init({  server: { baseDir: dist } });
    done();
}
function watcher() {
    watch( './dev/html/index.html' , { events: 'all' } , parallel( html ));
    watch( './dev/scss/**/*.scss' , { events: 'all' } , parallel( css ));
    watch( jsFile, { events: 'all' } , parallel( js ));
}
// Exports
exports.html = html;
exports.css = css;
exports.js = js;
exports.watch = watcher;
exports.default = parallel(browser, watcher);
