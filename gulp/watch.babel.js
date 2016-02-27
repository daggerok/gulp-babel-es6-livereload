import {gulp, srcDir} from './common.babel'

gulp.task('watch', ['default', 'server'], () => {
  gulp.watch(`${srcDir}/**/*.js`, ['js'])
  gulp.watch(`${srcDir}/**/*.css`, ['css'])
})