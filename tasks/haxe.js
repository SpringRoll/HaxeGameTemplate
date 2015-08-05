module.exports = {
	release: {
		main: '<%= haxeClass %>',
		classpath: ['<%= haxePath %>'],
		output: '<%= jsFolder %>/<%= haxeOutput %>.js'
	},
	debug: {
		main: '<%= haxeClass %>',
		classpath: ['<%= haxePath %>'],
		output: '<%= jsFolder %>/<%= haxeOutput %>.js',
		misc: ['-debug']
	}
};