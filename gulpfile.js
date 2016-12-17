// Include gulp
var gulp = require('gulp')

// Include plugins
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});

var dest = 'static/'

gulp.task('js', function() {
  return gulp.src(plugins.mainBowerFiles({
    overrides: {
		bootstrap: {
    		main: [
        		'./dist/js/bootstrap.js',
    		]
		}
	}
  }))
  	.pipe(plugins.filter('**/*.js'))
	.pipe(gulp.dest(dest + 'js'));
});

gulp.task('css', function() {
  return gulp.src(plugins.mainBowerFiles({
    overrides: {
		bootstrap: {
    		main: [
        		'./dist/css/*.min.*',
    		]
		}
	}
  }))
  	.pipe(plugins.filter('**/*.css'))
	.pipe(gulp.dest(dest + 'css'));
});

// Default Task
gulp.task('default', ['js', 'css']);