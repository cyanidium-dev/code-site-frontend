/**
 * Converts a hex color to RGB values
 * @param hex - Hex color string (e.g., "#FF0000" or "FF0000")
 * @returns RGB values as [r, g, b] or null if invalid
 */
function hexToRgb(hex: string): [number, number, number] | null {
  // Remove # if present
  const cleanHex = hex.replace("#", "");
  
  // Handle 3-digit hex
  if (cleanHex.length === 3) {
    const r = parseInt(cleanHex[0] + cleanHex[0], 16);
    const g = parseInt(cleanHex[1] + cleanHex[1], 16);
    const b = parseInt(cleanHex[2] + cleanHex[2], 16);
    return [r, g, b];
  }
  
  // Handle 6-digit hex
  if (cleanHex.length === 6) {
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return [r, g, b];
  }
  
  return null;
}

/**
 * Converts an RGB color string to RGB values
 * @param rgb - RGB string (e.g., "rgb(255, 0, 0)" or "rgba(255, 0, 0, 0.5)")
 * @returns RGB values as [r, g, b] or null if invalid
 */
function rgbStringToRgb(rgb: string): [number, number, number] | null {
  const match = rgb.match(/\d+/g);
  if (match && match.length >= 3) {
    return [
      parseInt(match[0], 10),
      parseInt(match[1], 10),
      parseInt(match[2], 10),
    ];
  }
  return null;
}

/**
 * Calculates the relative luminance of a color using WCAG formula
 * @param color - Color string in hex (#FF0000), rgb (rgb(255,0,0)), or rgba format
 * @returns Relative luminance value between 0 (dark) and 1 (light)
 */
export function getLuminance(color: string): number {
  let rgb: [number, number, number] | null = null;
  
  // Try to parse as hex
  if (color.startsWith("#") || /^[0-9A-Fa-f]{3,6}$/.test(color)) {
    rgb = hexToRgb(color);
  }
  // Try to parse as rgb/rgba
  else if (color.startsWith("rgb")) {
    rgb = rgbStringToRgb(color);
  }
  
  if (!rgb) {
    // Default to dark if color is invalid
    return 0;
  }
  
  const [r, g, b] = rgb;
  
  // Convert to relative luminance using WCAG formula
  // Normalize RGB values to 0-1 range
  const normalize = (value: number) => {
    value = value / 255;
    return value <= 0.03928
      ? value / 12.92
      : Math.pow((value + 0.055) / 1.055, 2.4);
  };
  
  const rNorm = normalize(r);
  const gNorm = normalize(g);
  const bNorm = normalize(b);
  
  // Calculate relative luminance
  return 0.2126 * rNorm + 0.7152 * gNorm + 0.0722 * bNorm;
}

/**
 * Determines if a color is light or dark
 * @param color - Color string in hex, rgb, or rgba format
 * @param threshold - Luminance threshold (default 0.5). Colors above this are considered light
 * @returns true if color is light, false if dark
 */
export function isLightColor(color: string, threshold: number = 0.5): boolean {
  return getLuminance(color) > threshold;
}

/**
 * Gets the appropriate text color class based on background color
 * @param backgroundColor - Background color string
 * @param lightTextClass - CSS class for light text (default: "text-white")
 * @param darkTextClass - CSS class for dark text (default: "text-black")
 * @param threshold - Luminance threshold (default 0.5)
 * @returns CSS class name for appropriate text color
 */
export function getTextColorClass(
  backgroundColor: string,
  lightTextClass: string = "text-white",
  darkTextClass: string = "text-black",
  threshold: number = 0.5
): string {
  return isLightColor(backgroundColor, threshold)
    ? darkTextClass
    : lightTextClass;
}

/**
 * Gets the appropriate text color value (hex) based on background color
 * @param backgroundColor - Background color string
 * @param lightTextColor - Hex color for light text (default: "#FFFFFF")
 * @param darkTextColor - Hex color for dark text (default: "#000000")
 * @param threshold - Luminance threshold (default 0.5)
 * @returns Hex color string for appropriate text color
 */
export function getTextColor(
  backgroundColor: string,
  lightTextColor: string = "#FFFFFF",
  darkTextColor: string = "#000000",
  threshold: number = 0.5
): string {
  return isLightColor(backgroundColor, threshold)
    ? darkTextColor
    : lightTextColor;
}

