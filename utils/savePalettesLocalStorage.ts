
type Palette = {
  baseColor: string;
  paletteSize: number;
  harmonyType: string;
  colors: string[];
};

export default function savePalettesLocalStorage(newPalette: Palette): void {
  // Leer las paletas existentes
  const stored = localStorage.getItem("palettes");
  const existingPalettes = stored ? JSON.parse(stored) : [];

  // Agregar la nueva paleta
  existingPalettes.push(newPalette);

  // Guardar de nuevo el array completo
  localStorage.setItem("palettes", JSON.stringify(existingPalettes));

  console.log("Palettes updated in local storage:", existingPalettes);
}
