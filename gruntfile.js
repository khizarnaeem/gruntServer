module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    protocol: 'http',
                    port: 9011,
                    base: 'public'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['connect:server:keepalive']);

};