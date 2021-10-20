const fs = require("fs");
const path = require("path");

const sassMapToJson = require("sass-maps-to-json");

(async () => {
  const dest = path.join("src", "styles", "colors.config.json");
  sassMapToJson({
    src: path.join("src", "styles", "custom-bootstrap.scss"),
    dest,
  });

  await new Promise((resolve) => setTimeout(resolve, 500));

  try {
    const paletteFromSass = JSON.parse(fs.readFileSync(dest));

    const { colors } = paletteFromSass.context;

    // const palette = Object.values(colors).reduce((acc, cur) => {
    //   acc.push(...cur.swatches);
    //   return acc;
    // }, []);

    const palette = Object.values(colors).reduce((acc, cur) => {
      cur.swatches.forEach((swatch) => {
        acc[swatch.name] = swatch.hex;
      });
      return acc;
    }, {});

    // console.log(palette);

    const logs = [];

    logs.push(`const PALETTE = ${JSON.stringify(palette)};`);
    logs.push(`export default PALETTE;`);
    logs.push(`export type ThemeColorType = keyof typeof PALETTE;`);

    // logs.push(
    //   `export const THEME_COLOR_KEYS = ${JSON.stringify(
    //     palette.map((c) => c.name)
    //   )} as const;`
    // );

    fs.writeFileSync(
      path.join("src", "styles", "palette.ts"),
      logs.join(`

`)
    );
  } catch (error) {
    console.error("Fail");
  }
})();
