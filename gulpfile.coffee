#
#
# gulpfile.coffee
#
#

sources =
  lib    : 'bower.json'


gulp           = require 'gulp'
concat         = require 'gulp-concat'
filter         = require 'gulp-filter'
mainBowerFiles = require 'main-bower-files'


#
# task
#

# default
gulp.task 'default', ['lib', 'watch']


# watch
gulp.task 'watch', ->
  gulp.watch sources.lib, ['lib']


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
