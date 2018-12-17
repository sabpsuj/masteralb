var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
  gulp.watch('src/scss/*.scss', gulp.series(sass));
});