var gulp      = require('gulp');
var gutil     = require('gulp-util');
var clean     = require('gulp-clean');
var coffee    = require('gulp-coffee');
var compass   = require('gulp-compass');
var concat    = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var plumber   = require('gulp-plumber');
var uglify    = require('gulp-uglify');
var sequence  = require('run-sequence');
var path      = require('path');


// Directories ////
var dirs = {

    sass:                './application/sass',
    scripts:             './application/coffeescript',
    third_party_scripts: './application/js',
    build:               './application/build',
    images:              './application/images',
    fonts:               './application/fonts'

};


// Selectors for file matching ////
var selectors = {

    js:     '/**/*.{js,map}',
    coffee: '/*.coffee',
    sass:   '/**/*.scss',
    all:    '/**'

};


// Paths ////
var paths = {

    sass:                dirs.sass + '/**/*.scss',
    sass_compiled:       dirs.build + '/styles',

    scripts:             dirs.scripts + '/**/*.coffee',
    scripts_compiled:    dirs.build + '/scripts',

    images:              dirs.images + '/**/*',
    images_compiled:     dirs.build + '/images',

    third_party_scripts: dirs.build + '/**/*.{js,map}',

    site_styles:         './site/contents/assets/css',
    site_scripts:        './site/contents/assets/js'

};


// Options ////
var opts = {

    stylesheet_name:  'seanmonahan.css',
    javascript_name:  'seanmonahan.js'

};


// Log messages
var log = function(msg) {
    gutil.log(gutil.colors.magenta(msg));
};


// Handle error messages
var onError = function(err) {
    gutil.log(gutil.colors.yellow(err));
    this.emit('end');
};


// Handle watch events
var onWatch = function(e) {
    gutil.log('Files "' + path.basename(e.path) + ' was "' + e.type + '. Running tasks...');
};


// Completion handler
var onComplete = function(callback, msg, err) {
    err = err || null;
    log(msg);
    if (callback) {
        callback(err);
    }
};


// Tasks /////


//////////////////////////////////////////////////
gulp.task('clean-scripts', function() {
    var p = [

        paths.scripts_compiled + selectors.js//,
        // paths.site_scripts + selectors.js
    ];

    return gulp.src(p, { read: false })
        .pipe(clean())
        .on('error', onError)
        .on('end', function() {
            log('"clean-scripts" complete!');
        });
});


//////////////////////////////////////////////////
gulp.task('coffee', function() {
    return gulp.src(paths.scripts)
        .pipe(coffee({ bare: true }))
        .pipe(gulp.dest(paths.scripts_compiled))
        .on('error', onError)
        .on('end', function() {
            log('"coffee" complete!');
        });
});


//////////////////////////////////////////////////
gulp.task('copy-js-map', function() {
    return gulp.src(dirs.scripts + '/**/*.map')
        .pipe(gulp.dest(paths.scripts_compiled))
        .on('error', onError)
        .on('end', function() {
            log('"copy-js-map" complete!');
        });
});


//////////////////////////////////////////////////
gulp.task('copy-js', ['copy-js-map'], function() {
    return gulp.src(dirs.third_party_scripts + '/**/*.js')
        .pipe(gulp.dest(paths.site_scripts))
        .on('error', onError)
        .on('end', function() {
            log('"copy-js" complete!');
        });
});


//////////////////////////////////////////////////
gulp.task('concat-js', function() {
    return gulp.src(paths.scripts_compiled + '/*.js')
        .pipe(concat(opts.javascript_name))
        .pipe(gulp.dest(paths.site_scripts))
        .on('error', onError)
        .on('end', function() {
            log('"concat-js" complete!');
        });
});


//////////////////////////////////////////////////
gulp.task('uglify-js', function() {
    return gulp.src(paths.site_scripts)
        .pipe(uglify())
        .pipe(gulp.dest(paths.site_scripts))
        .on('error', onError)
        .on('end', function() {
            log('"uglify-js" complete!');
        });
});


//////////////////////////////////////////////////
gulp.task('scripts', function(cb) {
    sequence('clean-scripts', 'coffee', 'copy-js', 'concat-js', function() {
        onComplete(cb, '"scripts" complete!');
    });
});


//////////////////////////////////////////////////
gulp.task('clean-styles', function() {
    return gulp.src(paths.sass_compiled)
        .pipe(clean())
        .on('error', onError)
        .on('end', function() {
            log('"clean-styles" complete!');
        });
});


//////////////////////////////////////////////////
gulp.task('styles', function() {
    var compassOpts = {

        config_file: 'config.rb',
        bundle_exec: true,
        project:     path.join(__dirname),
        sass:        'application/sass',
        css:         'application/build/styles'

    };

    log("PROJECT: " + compassOpts.project);
    log("STYLES:  " + paths.site_styles);

    return gulp.src(paths.sass)
        .pipe(plumber())
        .pipe(compass(compassOpts))
        .pipe(gulp.dest(paths.sass_compiled))
        // .pipe(gulp.dest(paths.sass_compiled))
        .pipe(minifyCSS())
        .pipe(gulp.dest(paths.site_styles))
        .on('error', onError)
        .on('end', function() {
            log('"compass" complete!');
        });
});


//////////////////////////////////////////////////
gulp.task('clean', ['clean-scripts', 'clean-styles'], function(cb) {
    onComplete(cb, '"clean" complete!');
});


//////////////////////////////////////////////////
gulp.task('watch', function(cb) {
    log('Watching');

    gulp.watch([paths.scripts, dirs.third_party_scripts + '/**/*.js'], ['scripts'])
        .on('change', onWatch);

    gulp.watch([paths.sass], ['styles'])
        .on('change', onWatch);
});


//////////////////////////////////////////////////
gulp.task('default', ['clean'], function() {
    sequence('scripts', 'uglify-js', 'styles', function() {
        onComplete(cb, '"default" complete!');
    });
});
