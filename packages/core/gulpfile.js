const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');

function buildFonts() {
    return src('./patterns/**/*.ttf')
        .pipe(rename({dirname: ''}))
        .pipe(dest('./dist/fonts'));
}

exports.assets = parallel(buildFonts);
