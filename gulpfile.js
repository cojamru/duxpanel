const gulp = require('gulp');

const pipe = require('gulp-pipe');
const clean = require('gulp-clean');

const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const ts = require('gulp-typescript');
const sourceMaps = require('gulp-sourcemaps');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean-dist', () => pipe([gulp.src('lib', { read: false, allowEmpty: true }), clean()]));

gulp.task('build-js', () =>
    pipe([
        gulp.src(['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx']),
        sourceMaps.init(),
        tsProject(),
        terser(),
        sourceMaps.write('.', { sourceRoot: 'src', includeContent: false }),
        gulp.dest('lib'),
    ])
);

gulp.task('build-css', () => pipe([gulp.src('src/**/*.css'), cleanCSS(), gulp.dest('lib')]));

gulp.task('default', gulp.series('clean-dist', 'build-js', 'build-css'));
