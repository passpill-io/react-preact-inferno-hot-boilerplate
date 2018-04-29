var config = require('./webpack');

config.resolve.alias['react'] = 'inferno-compat';
config.resolve.alias['react-dom'] = 'inferno-compat';

var babel = config.module.rules[0].use[0].options;

babel.plugins = [
  ["babel-plugin-inferno", {"imports": true}]
];
babel.presets.pop();

module.exports = config;
