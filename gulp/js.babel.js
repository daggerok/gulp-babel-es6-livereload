import {gulp, browserify, srcDir, mainJs, bundleJs, debug, babelify, sources, handle, buildDir} from './common.babel'

gulp.task('js', () => {
  return browserify({
      debug,
      extensions: ['.es6']
    })
    .add(`${srcDir}/${mainJs}`)
    .transform(babelify, {sourceMaps: debug})
    .bundle()
    .on('error', handle)
    .pipe(sources(bundleJs))
    .pipe(gulp.dest(buildDir))
})