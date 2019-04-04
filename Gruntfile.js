module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-webdriver');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('api', 'mochaTest');
    grunt.registerTask('ui', 'webdriver');

    process.env.MOCHAWESOME_REPORTNAME='customReportName';

    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    reporter: 'mochawesome',
                    require: '@babel/register',
                    timeout: 7000,
                    clearRequireCache: true, // Optionally clear the require cache before running tests (defaults to false)
                    reporterOptions: {
                        reportDir: '/home/ubuntu/Documents/automation_proj_mocha/test/reports/mochawesome',
                        reporterName: 'api-report'
                    }
                },
                src: ['test/specs/api/smoke/new_product/calculator.spec.js']
            }
        },

        webdriver: {
            uiTests: {
                configFile: './test/config/ui.suite.mocha.conf.js'
            },
        }
    });

    grunt.registerTask('ui', 'webdriver');
};
