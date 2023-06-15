const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');


function defaultTask(cb) {
    console.log('hello gulp4');
    cb();
}

exports.do = defaultTask;


// 檔案搬家
function move() {
  return src('index.html').pipe(dest('dist/'));
}

exports.mv = move;

// 任務的順序
function taskA(cb) {
  console.log('任務A');
  cb();
}

function taskB(cb) {
  console.log('任務B');
  cb();
}

function taskC(cb) {
  console.log('任務C');
  cb();
}

function taskD(cb) {
  console.log('任務D');
  cb();
}

function taskE(cb) {
  console.log('任務E');
  cb();
}
// 在task中，操作完成時，我们必須要通過cb()或者return的方式來告知gulp 此任務已經完成。
exports.async = series(taskA, taskB);
exports.sync = parallel(taskA, taskB);
exports.all = series(taskA, taskB, parallel(taskC, taskD), taskE);


// css壓縮

const cleanCSS = require('gulp-clean-css');

function minicss() {
  return src('src/css/*.css')
  .pipe(cleanCSS())
  .pipe(dest('dist/css'));
}

exports.style = minicss;


// JS壓縮導入
const uglify = require('gulp-uglify');

function jsMini() {
  return src('src/js/*.js')
  .pipe(uglify())
  .pipe(dest('dist/js'));
}

exports.script = jsMini;


// SASS導入
const sass = require('gulp-sass')(require('sass'));
function sassStyle() {
  return src('src/sass/*.scss')
  // 先經過sass編譯
  .pipe(sass.sync().on('error', sass.logError))
  // 再壓縮檔案
  .pipe(cleanCSS())
  // 輸出到上線的資料夾
  .pipe(dest('dist/css'));
}
exports.scss = sassStyle;

// html template

const fileinclude = require('gulp-file-include');

function html() {
  return src('src/*.html')
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(dest('dist/'))
}

exports.template = html;

// 圖片搬家

function img() {
  return src('src/image/*.*')
  .pipe(dest('dist/image'))
}
exports.imgMove = img;

// 監看所有變動

function taskWatch() {
  watch('src/sass/*.scss', sassStyle);
  watch('src/image/*.*', img);
  watch('src/js/*.js', jsMini);
  watch(['src/*.html', 'src/layout/*.html'], html);
}
exports.w = taskWatch;