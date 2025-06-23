

export function loadPalettesFromLocalStorage(): any[] {
  // Leer las paletas existentes del localStorage
  const stored = localStorage.getItem("palettes");
  
  // Si no hay paletas, retornar un array vacío
  if (!stored) {
    console.log("No palettes found in local storage.");
    return [];
  }
  
  // Parsear el JSON y retornar el array de paletas
  const palettes = JSON.parse(stored);
  console.log("Loaded palettes from local storage:", palettes);
  
  return palettes as any[];
}