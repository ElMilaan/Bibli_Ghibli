import { dest, series, src, watch } from "gulp";
import gulpSass from "gulp-sass";
import * as sass from "sass";

const sassCompiler = gulpSass(sass);

const paths = {
  styles: {
    src: "./src/styles/scss/**/*.scss",
    dest: "./src/styles",
  },
};

function compileSass() {
  return src(paths.styles.src)
    .pipe(sassCompiler().on("error", sassCompiler.logError))
    .pipe(dest(paths.styles.dest));
}

function watchFiles() {
  watch(paths.styles.src, compileSass);
}

const defaultTask = series(compileSass, watchFiles);

export { compileSass, watchFiles };
export default defaultTask;
