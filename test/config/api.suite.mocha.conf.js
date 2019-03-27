exports.config = {
        reporter: 'mochawesome',
        require: '@babel/register',
        // captureFile: 'results.txt',
        timeout: 7000,
        clearRequireCache: true, // Optionally clear the require cache before running tests (defaults to false)

};
