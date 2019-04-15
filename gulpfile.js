var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var jsvalidate = require('gulp-jsvalidate');
var concat = require('gulp-concat');
var typescript = require('gulp-tsc');

var paths = {
    css: {
        src: [
            'node_modules/angular-material/angular-material.css',
            'custom_components/css/styles.css'
        ],
        dest: 'wwwroot/assets/css/',
        file: 'styles-1.0.0.min.css'
    },
    typescript: {
        src: [
            'app/_all.ts'
        ],
        dest: 'wwwroot/assets/js/',
        file: 'app-1.0.0.min.js'
    },
    scripts: {
        src: [
            'node_modules/angular/angular.js',
            'node_modules/angular/angular.js',
            'node_modules/angular-aria/angular-aria.js',
            'node_modules/angular-animate/angular-animate.js',
            'node_modules/angular-messages/angular-messages.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-material/angular-material.js'
        ],
        dest: 'wwwroot/assets/js/',
        file: 'scripts-1.0.0.min.js'
    }
};

gulp.task('ts', function() {
    gulp.src(paths.typescript.src)
        .pipe(typescript({
            module: 'amd',
            target: 'es5',
            removeComments: true,
            out: paths.typescript.file
        }))
        .pipe(gulp.dest(paths.typescript.dest))
});

gulp.task('css', function() {
    gulp.src(paths.css.src)
        .pipe(concat(paths.css.file))
        .pipe(cssmin())
        .pipe(gulp.dest(paths.css.dest));
});

gulp.task('script', function() {
    return gulp
        .src(paths.scripts.src)
        .pipe(jsvalidate())
        .pipe(concat(paths.scripts.file))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(paths.scripts.dest))
});

gulp.task('default', ['ts', 'script', 'css']);