var port = process && process.env.PORT || location.port,
  rhl = port == 3101 && require('../../src/rhl/react-hot-loader.development'),
  phl = port == 3102 && require('../../src/rhl/preact-hot-loader.development'),
  ihl = port == 3103 && require('../../src/rhl/inferno-hot-loader.development')
;

module.exports = rhl || phl || ihl;
