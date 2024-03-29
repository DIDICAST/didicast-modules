import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import filesize from "rollup-plugin-filesize";
import includePaths from "rollup-plugin-includepaths";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import autoprefixer from "autoprefixer";
import stylelint from "rollup-plugin-stylelint";
import postcssPresetEnv from "postcss-preset-env";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import copy from "rollup-plugin-copy";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";

import pkg from "./package.json";

const outputs = [
  {
    file: process.env.REACT_APP_PKG_MAIN || pkg.main,
    format: "umd",
  },
  {
    file: process.env.REACT_APP_PKG_MODULE || pkg.module,
    format: "es",
  },
];

const postcssPlugins = [
  postcssPresetEnv({
    browsers: pkg.browserslist.production,
    stage: 3,
  }),
  autoprefixer(),
];

// const config = outputs.map(({file, format}) => ({
const config = {
  input: "src/components/index.ts",
  output: {
    dir: "lib/components",
    format: "esm",
    // name: 'ReactCalendarToolkit',
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
    exports: "named",
  },
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    includePaths({
      include: {},
      paths: ["src/components"],
      external: Object.keys(pkg.dependencies),
      extensions: [".ts", ".tsx", ".js", ".json", ".html"],
    }),
    stylelint({
      // throwOnError: true,
    }),
    postcss({
      // inject: true,
      // modules: [],
      extract: true, //process.env.REACT_APP_PKG_STYLE || pkg.style,
      // inline: false,
      plugins: postcssPlugins,
      // modules: true,
      autoModules: true,
      // use: ['sass'],
      // extensions: ['scss'],
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      configFile: "./babel.config.rollup.js",
    }),
    resolve({
      browser: true,
      moduleDirectories: ["didicast-modules"],
    }),
    commonjs({
      include: /node_modules/,
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      exclude: "**/*.stories.tsx",
      clean: true,
    }),
    terser(),
    url(),
    svgr(),
    filesize(),
    copy({
      targets: [{ src: "src/styles", dest: "lib" }],
      copyOnce: true,
    }),
  ],
};

export default config;
