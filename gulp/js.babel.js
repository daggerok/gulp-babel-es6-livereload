import {gulp, browserify, srcDir, mainJs, bundleJs, debug, babelify, sources, handle, buildDir, livereload} from './common.babel'

gulp.task('js', () => {
  return browserify({
      debug,
      extensions: ['.es6']
    })
    .add(`${srcDir}/${mainJs}`)
    .transform(babelify, {
      sourceMaps: debug,
      presets: ['es2015'],
      plugins: ['transform-runtime']
    })
    .bundle()
    .on('error', handle)
    .pipe(sources(bundleJs))
    .pipe(gulp.dest(buildDir))
    .pipe(livereload())
})