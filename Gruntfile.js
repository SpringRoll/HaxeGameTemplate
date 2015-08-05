module.exports = function(grunt)
{
	require('grunt-springroll')(grunt, 
	{
		// The name of the source directory containing haxe source
		haxePath: 'hx',

		// The name of the output file
		haxeOutput: 'haxe',

		// The main source file for haxe to compile
		haxeClass: '_className_'
	});
};