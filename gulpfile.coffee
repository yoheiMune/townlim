#
#
# gulpfile.coffee
#
#

sources =
  lib    : 'bower.json'
  jade   : './src/jade/**/*.jade'
  scss   : './src/scss/**/*.scss'
  js     : './src/js/**/*.js'
  coffee : './src/coffee/**/*.coffee'


gulp           = require 'gulp'
autoprefixer   = require 'gulp-autoprefixer'
coffee         = require 'gulp-coffee'
concat         = require 'gulp-concat'
filter         = require 'gulp-filter'
jade           = require 'gulp-jade'
plumber        = require 'gulp-plumber'
scss           = require 'gulp-sass'
mainBowerFiles = require 'main-bower-files'


#
# task
#

# default
gulp.task 'default', ['lib', 'jade', 'scss', 'js', 'coffee', 'watch']

# watch
gulp.task 'watch', ->
  gulp.watch sources.lib,    ['lib']
  gulp.watch sources.jade,   ['jade']
  gulp.watch sources.scss,   ['scss']
  gulp.watch sources.js,     ['js']
  gulp.watch sources.coffee, ['coffee']


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


# html
gulp.task 'jade', ->
  gulp.src sources.jade
      .pipe plumber()
      .pipe jade { pretty: true }
      .pipe gulp.dest './public/'


# css
gulp.task 'scss', ->
  gulp.src sources.scss
      .pipe plumber()
      .pipe scss()
      .pipe autoprefixer()
      .pipe concat 'style.css'
      .pipe gulp.dest './public/css/'

# JavaScript
gulp.task 'js', ->
  gulp.src sources.js
      .pipe plumber()
      .pipe concat 'script.js'
      .pipe gulp.dest './public/js/'


# coffee
gulp.task 'coffee', ->
  gulp.src sources.coffee
      .pipe plumber()
      .pipe coffee()
      .pipe concat 'script.js'
      .pipe gulp.dest './pubic/js/'
