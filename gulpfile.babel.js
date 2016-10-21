import gulp from 'gulp';
import clean from 'gulp-clean';

const paths = {
  build: 'build/',
  src: 'src/',
  dist: 'dist/'
};

gulp.task('clean', function(){
  return gulp.src([
    `${paths.dist}`,'!package.json'
  ]).pipe(clean());
});
