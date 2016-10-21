import gulp from 'gulp';
import clean from 'gulp-clean';

gulp.task('clean', function(){
  return gulp.src([
    'dist','!package.json'
  ]).pipe(clean());
});
