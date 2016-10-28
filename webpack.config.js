module.exports = {
    output: {
        library: 'get',
        libraryTarget: 'window',
        path: './dist'
    },
    entry: {
        library: './index',
        'angular-get-js': './angular'
    },
    externals: {
        'angular': 'angular'
    }
};
