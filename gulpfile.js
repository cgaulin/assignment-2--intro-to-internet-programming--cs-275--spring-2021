const { src } = require(`gulp`);
const htmlValidator = require(`gulp-html`);

let validateHTML = () => {
    return src([
        `html/*.html`,
        `html/**/*.html`])
        .pipe(htmlValidator());
};

exports.validateHTML = validateHTML;
