const webpack = require( 'webpack' );
const StatsPlugin = require( 'stats-webpack-plugin' );

module.exports = {
	plugins: [
		new StatsPlugin( 'stats.json' ),
	],
};
