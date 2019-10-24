module.exports = {
    // options...
    devServer: {
        // proxy: 'https://bearings-info.herokuapp.com/'
        publicPath: process.env.NODE_ENV === 'production'
            ? '/vue-page-test/'
            : '/'
    }
}