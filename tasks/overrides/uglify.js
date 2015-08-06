module.exports = {
	haxe: {
		files: {
			'<%= jsFolder %>/<%= haxeOutput %>.js': '<%= jsFolder %>/<%= haxeOutput %>.js'
		},
		options: '<%= uglify.main.options %>'
	}
};