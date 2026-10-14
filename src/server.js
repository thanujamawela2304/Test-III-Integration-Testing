const express = require("express");
const hexToRgb = require("./hexToRgb");

const app = express();
const port = 3000;

app.get("/hex-to-rgb", (req, res) => {
    try {
        const hex = req.query.hex;
        const rgb = hexToRgb(hex);

        res.json(rgb);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

module.exports = app;
