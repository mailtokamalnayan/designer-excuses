
var gulp         = require('gulp'),
    rename       = require('gulp-rename'),
    sass         = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');
    cleanCSS     = require('gulp-clean-css');
    ghPages      = require('gulp-gh-pages');
    uglify       = require('gulp-uglify');
    browserSync  = require('browser-sync').create();

// SASS -> CSS, Autoprefix & Minification
gulp.task('sass', function () {
  return gulp.src('./app/assets/css/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./build'))
.pipe(browserSync.stream());
});

gulp.task('js', ['sass'], function () {
  return gulp.src('./app/assets/js/main.js')
    .pipe(uglify())
    .pipe(rename("main.js"))
    .pipe(gulp.dest('./build'));
});

gulp.task('html', ['js'], function () {
     return gulp.src('./app/index.html')
     .pipe(gulp.dest('./build'));
});


// Once SASS JS and HTML is done, call dev
gulp.task('dev', ['html'], function() {
    browserSync.init({
        server: "./build"
    });
    gulp.watch("./app/**/*.html", ['html'])
    gulp.watch("./app/assets/js/**/*.js", ['js'])
    gulp.watch("./app/assets/css/*.scss", ['sass']).on('change', browserSync.reload);
});


// Push to gh-pages
gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages({
        'remoteUrl' : 'git@github.com:mailtokamalnayan/designer-excuses.git'
    }));
});