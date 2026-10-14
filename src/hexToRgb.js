/**
 * Converts a six-digit hexadecimal color into RGB values.
 *
 * @param {string} hex - The hexadecimal color, for example "#FF5733".
 * @returns {{r: number, g: number, b: number}} The RGB color values.
 * @throws {Error} If the color code is invalid.
 */
function hexToRgb(hex) {
    if (typeof hex !== "string") {
        throw new Error("Color must be a string");
    }

    const cleanHex = hex.startsWith("#") ? hex.slice(1) : hex;

    if (!/^[0-9A-Fa-f]{6}$/.test(cleanHex)) {
        throw new Error("Invalid hex color");
    }

    const r = parseInt(cleanHex.slice(0, 2), 16);
    const g = parseInt(cleanHex.slice(2, 4), 16);
    const b = parseInt(cleanHex.slice(4, 6), 16);

    return { r, g, b };
}

module.exports = hexToRgb;
