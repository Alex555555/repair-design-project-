const {src, dest} = require('gulp');
const sass = require('gulp-sass');


function transformScss(){
	
	return src("./src/scss/**/*.scss")
		.pipe(sass())
		.pipe(dest("./build"))
	
	
}


exports.trans = transformScss;
