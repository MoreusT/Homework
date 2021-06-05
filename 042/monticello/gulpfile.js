const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const del = require('del');
const image = require('gulp-image');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('src/css'));
});
   
gulp.task('sass:watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
});



gulp.task('server', (done) => {
    browserSync.init({
        server: "src/",
		notify: false
    });

    gulp.watch("src/scss/**/*.scss", gulp.series('sass'));
    gulp.watch("src/*.html").on('change', () => {
      browserSync.reload();
      done();
    });
    gulp.watch("src/js/**/*.js").on('change', () => {
      browserSync.reload();
      done();
    });

    gulp.watch("src/css/**/*.css").on('change', () => {
        browserSync.reload();
        done();
      });

    done();
});

gulp.task('css', function () {
    let plugins = [
        autoprefixer(),
        cssnano()
    ];
    return gulp.src('src/css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('image', function (done) {
    gulp.src('./src/images/**/*')
      .pipe(image())
      .pipe(gulp.dest('./dist/images'));
      done();
});

gulp.task('fonts', function (done) {
  gulp.src('./src/fonts/**/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/fonts'));
    done();
});

gulp.task('favicon', function (done) {
  gulp.src('./src/favicon/**/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/favicon'));
    done();
});

gulp.task('clean', (done) => {
	del(['./dist/*']);
	done();
});

gulp.task('move', (done)=>{
	// const buildFonts = gulp.src('src/fonts/**/*')
	// 	.pipe(gulp.dest('dist/fonts'));

	const buildJS = gulp.src('src/js/**/*')
		.pipe(gulp.dest('dist/js'));

	const buildHTML = gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
	done();
});

gulp.task('build', gulp.series('clean', 'sass', gulp.parallel('css', 'image', 'fonts', 'favicon'),'move'), function(done) {
	done();
});