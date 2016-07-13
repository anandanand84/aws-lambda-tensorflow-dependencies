/**
 * Created by AAravindan on 7/13/16.
 */
const zip    = require('gulp-zip');
const gulp   = require('gulp');
var fs       = require('fs'),
    path     = require('path');

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

getDirectories(__dirname).filter(function(name) {
  var stats = ((!(name.indexOf('.')===0)) && (!(name.indexOf('node')===0)));
  console.log(stats);
  return stats;
}).forEach(function(directory) {
  console.log('ziping '+path.resolve(__dirname, directory) + "/**/*")
    gulp.src([path.resolve(__dirname, directory) + "/**/*"] , { dot : true })
        .pipe(zip(directory+'.zip'))
        .pipe(gulp.dest('.'));
})

//gulp.src(['simple_add.py'])