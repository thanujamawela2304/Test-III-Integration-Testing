const hexToRgb = require("../src/hexToRgb");
const { expect } = require("chai");

describe("hexToRgb", () => {
    it("converts a hex color to RGB values", () => {
        const result = hexToRgb("#3A7BD5");

        expect(result).to.deep.equal({
            r: 58,
            g: 123,
            b: 213
        });
    });

    it("works without the # symbol", () => {
        const result = hexToRgb("3A7BD5");

        expect(result).to.deep.equal({
            r: 58,
            g: 123,
            b: 213
        });
    });

    it("rejects an invalid hex color", () => {
        expect(() => hexToRgb("#XYZ123")).to.throw("Invalid hex color");
    });
});
