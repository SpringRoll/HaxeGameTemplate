module.exports = function(grunt)
{
	grunt.registerTask('_pre-build', [
		'clean:haxe', 
		'haxe:release',
		'uglify:haxe'
	]);
	
	grunt.registerTask('_pre-build-debug', [
		'haxe:debug'
	]);
};