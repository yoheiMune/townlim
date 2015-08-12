#
#
# gulpfile.coffee
#
#

sources =
  lib    : 'bower.json'
  scss   : './src/scss/**/*.scss'


gulp           = require 'gulp'
concat         = require 'gulp-concat'
filter         = require 'gulp-filter'
mainBowerFiles = require 'main-bower-files'
plumber        = require 'gulp-plumber'
scss           = require 'gulp-sass'
autoprefixer   = require 'gulp-autoprefixer'


#
# task
#

# default
gulp.task 'default', ['lib', 'scss', 'watch']


# watch
gulp.task 'watch', ->
  gulp.watch sources.lib,  ['lib']
  gulp.watch sources.scss, ['scss']


# bower
gulp.task 'lib', ->
  jsFilter  = filter '**/*.js'
  cssFilter = filter '**/*.css'

  gulp.src mainBowerFiles()
      .pipe jsFilter
      .pipe concat 'lib.js'
      .pipe gulp.dest './public/lib/'

  gulp.src mainBowerFiles()
      .pipe cssFilter
      .pipe concat 'lib.css'
      .pipe gulp.dest './public/lib/'


# css
gulp.task 'scss', ->
  gulp.src sources.scss
      .pipe plumber()
      .pipe scss()
      .pipe autoprefixer()
      .pipe concat 'style.css'
      .pipe gulp.dest './public/css/'