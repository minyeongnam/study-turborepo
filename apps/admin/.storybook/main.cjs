const { mergeConfig, loadConfigFromFile } = require("vite");
const svgr = require("vite-plugin-svgr");
const { resolve } = require("path");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../../../packages/ui/src/**/*.stories.mdx",
    "../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
        backgrounds: false,
        controls: false,
        docs: true,
        viewport: false,
        toolbars: false,
        measure: false,
        outline: false,
      },
    },
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: async (config) => {
    const { config: userConfig } = await loadConfigFromFile(
      "serve",
      resolve(__dirname, "../vite.config.ts"),
      "./"
    );
    return mergeConfig(config, {
      ...userConfig,
      plugins: [svgr()],
    });
  },
};
