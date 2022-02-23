const gulp = require("gulp");
//const sass = require("gulp-sass");
var sass = require("gulp-sass")(require("sass"));
const minify = require("gulp-minify");

// mix.sass('src/App.scss', css, {
//   implementation : require('node-sass')
// });

gulp.task("styles", () => {
  return gulp
    .src("src/styling-files/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/styling-files/css"));
});
