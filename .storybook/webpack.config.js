const path = require('path');

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.js$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    // enforce: 'pre', // 原因：vue文件要先编译
  });

  return defaultConfig;
};