//list dependecies
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const imagewebp = require('gulp-webp');
const { version } = require('os');

//create function

// scss
function compliescss() {
	return src('src/scss/*.scss') // change to your source directory
		.pipe(sass())
		.pipe(prefix('last 2 version'))
		.pipe(minify())
		.pipe(dest('dist/css')); // change to your source directory
}

// js
function jsmin() {
	return src('src/js/*js').pipe(terser()).pipe(dest('dist/js/')); // change to your source directory
}

// image
function optimizeimg() {
	return src('src/images/*.{jpg,jpeg,png}') // change to your source directory
		.pipe(
			imagemin([
				imagemin.mozjpeg({ quality: 80, progressive: true }), // optimize image
				imagemin.optipng({ optimizationLevel: 2 }),
			])
		)
		.pipe(dest('dist/images')); // change to your source directory
}

// webp images (convert in webp format)
function webpImage() {
	return src('dist/images/*.{jpg,jpeg,png}') // change to your source directory
		.pipe(imagewebp())
		.pipe(dest('dist/images')); // change to your source directory
}

//create watchtask
function watchTask() {
	watch('src/scss/**/*.scss', compliescss); // change to your source directory
	watch('src/js/*.js', jsmin); // change to your source directory
	watch('src/images/*', optimizeimg); // change to your source directory
	watch('dist/images/*.{jpg,jpeg,png}', webpImage); // change to your source directory
}

//default gulp command
exports.default = series(compliescss, jsmin, optimizeimg, webpImage, watchTask); // run command only: `gulp`
