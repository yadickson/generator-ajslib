// generated on <%= date %> using <%= name %> <%= version %>

const gulp = require('gulp');
const runSequence = require('run-sequence');
const karma = require('karma').Server;
const del = require('del');
const jshint = require("gulp-jshint");
const ajslib = require("gulp-ajslib");

let dev = true;
let minimal = false;
let dest = 'dist';
let addpaths = [];

gulp.task('clean', () => {
    return del(['build', 'dist', 'coverage', 'reports', '*.tgz', '*.zip', 'docs']);
});

gulp.task('compile', ['scripts', 'jshint'], () => {});

gulp.task('default', ['build'], () => {});

gulp.task('build', () => {
    return new Promise(resolve => {
        minimal = false;
        dest = 'build';
        runSequence(['clean'], ['compile'], resolve);
    });
});

gulp.task('dist', () => {
    return new Promise(resolve => {
        minimal = true;
        dest = 'dist';
        runSequence(['clean'], ['compile'], resolve);
    });
});

gulp.task('docs', () => {
    return new Promise(resolve => {
        minimal = true;
        dest = 'docs';
        runSequence(['clean'], ['js2docs'], resolve);
    });
});

gulp.task('scripts', () => {
    return ajslib.buildScripts({
            dest: dest,
            minimal: minimal,
            addpaths: addpaths,
            name: '<%= projectLib %>'
        });
});

gulp.task('jshint', () => {
    return ajslib.srcScripts()
        .pipe(jshint())
        .pipe(jshint.reporter());
});

gulp.task('js2docs', function() {
    return ajslib.buildDocs({
        dest: dest
    });
});

gulp.task('pretest', ['clean'], function() {
    return ajslib.updateKarmaFile({
        configFile: 'karma.conf.js',
        dest: '.',
        addpaths: addpaths
    });
});

gulp.task('test', ['pretest'], function() {
    return new karma({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start();
});
