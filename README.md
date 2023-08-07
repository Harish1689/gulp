# Setup the gulp by git repo

Clone the repository into your project and execute the following command. Make sure to maintain the same directory structure at the root level. If necessary, you can modify the path in the 'gulpfile.js' `gulpfile.js` file.

Run command:-

```bash
npm install
gulp
```

Note: Ensure that Gulp.js is first installed globally on your system before proceeding with the following steps.

# For a new installation

If you wish to manually install Gulp for your project, you can follow these setup instructions:

1. Initialize Node JS
   `npm init`

2. Install Gulp globally and locally

- `npm install -g gulp`
- `npm install ——save-dev gulp`

3. Install plugins

#### \*SCSS convert, min, and autoprefixer

`npm install --save-dev gulp-sass gulp-autoprefixer gulp-clean-css`

#### \*JS minx

- `npm install ——save-dev gulp-terser`
- `npm install --save-dev gulp-imagemin gulp-webp`

4. Add `gulpfile.js` file.
5. Create functions, watchtask, and default gulp
6. Run command `gulp` to perfome gulp
