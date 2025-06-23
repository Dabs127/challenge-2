import tinycolor from "tinycolor2";

type Palette = {
  baseColor: string;
  paletteSize: number;
  harmonyType: string;
  colors: string[];
};

export default function generatePalette(
  baseColor: string,
  paletteSize: number,
  armonyType: string
): any {
  console.log(
    `Generating palette for base color: ${baseColor}, size: ${paletteSize}, harmony type: ${armonyType}`
  );

  const palette: Palette = {
    baseColor: baseColor,
    paletteSize: paletteSize,
    harmonyType: armonyType,
    colors: [],
  };

  if (armonyType === "monocromaticos") {
    // Generate monochromatic colors
    const colorsBefore = tinycolor(baseColor).monochromatic(paletteSize);
    palette.colors = colorsBefore.map((color) => color.toHexString());
  } else if (armonyType === "complementarios") {
    // Generate complementary colors
    let actualColor = baseColor;
    let newColor;
    for (let i = 0; i < paletteSize; i++) {
      newColor = tinycolor(actualColor).complement().toHexString();
      palette.colors.push(newColor);
      actualColor = newColor;
    }
  } else if (armonyType === "analogos") {
    // Generate analogous colors
    const colorsBefore = tinycolor(baseColor).analogous(paletteSize);
    palette.colors = colorsBefore.map((color) => color.toHexString());
  } else if (armonyType === "triadicos") {
    if (paletteSize !== 3) {
      throw new Error("Triadic harmony type requires a palette size of 3.");
    }
    // Generate triadic colors
    const colorsBefore = tinycolor(baseColor).triad();
    palette.colors = colorsBefore.map((color) => color.toHexString());
  }

  savePalettesLocalStorage(palette);

}
