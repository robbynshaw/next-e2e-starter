const root = './';
const path = require('path');
const getPath = (...paths) => path.join(path.resolve(__dirname), root, ...paths);

module.exports = {
  '@src': getPath('src'),
  '@redux': getPath('src', 'redux'),
  '@layouts': getPath('src', 'layouts'),
  '@pages': getPath('src', 'pages'),
  '@components': getPath('src', 'components'),
  '@elements': getPath('src', 'components', 'elements'),
  '@icons': getPath('src', 'components', 'icons'),
  '@lib': getPath('src', 'lib'),
  '@models': getPath('src', 'models'),
};
