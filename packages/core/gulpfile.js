const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');

function processStyles() {
    return src([
        '../ladle/src/**/!(*.development).scss'
    ])
        .pipe(rename((path) => {
            return {
                basename: path.basename,
                extname: path.extname,
                dirname: path.dirname.replace("src/", "").replace("src", "")
            };
        }))
        .pipe(dest('./scss'))
}

function processFonts() {
    return src('../ladle/dist/fonts/**/*.*')
        .pipe(dest('./fonts'))
}

exports.default = parallel(processStyles, processFonts);
