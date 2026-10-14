const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/server");

describe("Hex-to-RGB API", () => {
    it("converts a hex color and returns RGB values", async () => {
        const response = await request(app)
            .get("/hex-to-rgb?hex=3A7BD5");

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal({
            r: 58,
            g: 123,
            b: 213
        });
    });

    it("returns an error for an invalid hex color", async () => {
        const response = await request(app)
            .get("/hex-to-rgb?hex=XYZ123");

        expect(response.status).to.equal(400);
        expect(response.body.error).to.equal("Invalid hex color");
    });
});