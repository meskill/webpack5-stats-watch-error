# Webpack 5 test repo

Reproduction repo for [issue in webpack 5](https://github.com/webpack/webpack/issues/13330)

When using MultiCompiler, webpack node-api and compiler hook that gets stats from compilation (like webpack-dev-middleware do) - file rename leads to Error `TypeError: Cannot read property 'getTypes' of undefined`


## How to reproduce

1. Clone this repo
1. Run `cd webpack5 && npm ci && npm start`
1. Rename file `inner.js` (e.g. `inner.jsx`, `other.js`)

    You should get error
    ```js
    TypeError: Cannot read property 'getTypes' of undefined
    at NormalModule.getSourceTypes (/workspaces/js-ts/webpack5-stats-watch-error/webpack5/node_modules/webpack/lib/NormalModule.js:1059:25)
    at _ (/workspaces/js-ts/webpack5-stats-watch-error/webpack5/node_modules/webpack/lib/stats/DefaultStatsFactoryPlugin.js:1086:36)
    at /workspaces/js-ts/webpack5-stats-watch-error/webpack5/node_modules/webpack/lib/stats/DefaultStatsFactoryPlugin.js:2245:9
    at Hook.eval [as call] (eval at create (/workspaces/js-ts/webpack5-stats-watch-error/webpack5/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:16)
    at /workspaces/js-ts/webpack5-stats-watch-error/webpack5/node_modules/webpack/lib/stats/StatsFactory.js:277:7
    at StatsFactory._forEachLevel (/workspaces/js-ts/webpack5-stats-watch-error/webpack5/node_modules/webpack/lib/stats/StatsFactory.js:100:19)
    at StatsFactory._create (/workspaces/js-ts/webpack5-stats-watch-error/webpack5/node_modules/webpack/lib/stats/StatsFactory.js:276:9)
    at StatsFactory.create (/workspaces/js-ts/webpack5-stats-watch-error/webpack5/node_modules/webpack/lib/stats/StatsFactory.js:137:16)
    at /workspaces/js-ts/webpack5-stats-watch-error/webpack5/node_modules/webpack/lib/stats/StatsFactory.js:215:24
    at Array.map (<anonymous>)
    ```