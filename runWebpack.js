const webpack = require(`./webpack${process.env.VERSION}/node_modules/webpack`);
const config = require('./webpack.config');

const compiler = webpack([config, config]);

// similar like [webpack-dev-middleware works](https://github.com/webpack/webpack-dev-middleware/blob/master/src/utils/setupHooks.js#L115)
compiler.hooks.done.tap('stats', (stats) => {
    console.log(stats.toString('minimal'))
})

compiler.watch({}, error => {
    if (error) {
        console.error(error);
    }
})