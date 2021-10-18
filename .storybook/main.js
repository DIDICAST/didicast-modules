module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../docs/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  typescript: {
    check: true,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,

      // propFilter: (prop) =>
      //   prop.parent
      //     ? prop.parent.name !== "DOMAttributes" &&
      //       prop.parent.name !== "HTMLAttributes" &&
      //       prop.parent.name !== "AriaAttributes"
      //     : true,
      propFilter: (prop) =>
        prop.parent
          ? /@coreui/.test(prop.parent.fileName) ||
            /@material-ui/.test(prop.parent.fileName) ||
            !/node_modules/.test(prop.parent.fileName)
          : true,

      compilerOptions: {
        allowSyntheticDefaultImports: false,
      },
    },
  },
};
