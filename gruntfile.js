module.exports = function( grunt ) {
	grunt.initConfig( {			
		pkg: grunt.file.readJSON( 'package.json' ),
			
		jshint: {			
			files: [ 'project/src/<%= pkg.name %>.js' ],
			options: {
				"-W099": true, // disable: Mixed spaces and tabs.
				"-W014": true, // disable: Bag line breaking
			}
		},
		
		uglify : {				
			dist : {
				files : {
					'project/build/<%= pkg.name %>.min.js' : ['project/src/<%= pkg.name %>.js'],
					'project/example/js/<%= pkg.name %>.min.js' : ['project/src/<%= pkg.name %>.js']
				}
			}
		},

		'gh-pages': {
			options: {
				base: 'project/example'
			},
			src: [ '**' ]
		}				   		  	   	  	   
	} );
		
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );		
	grunt.loadNpmTasks( 'grunt-gh-pages' );

	grunt.registerTask( 'default', [ 'jshint', 'uglify']);	
	grunt.registerTask( 'doc', ['gh-pages']);		
};
