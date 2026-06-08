const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 4004;
const DB_URL = "http://localhost:5000/db/customers";

app.use(cors());
app.use(express.json());

app.delete("/computerstore/customer/:id", async (req, res) => {
    try {
        const response = await fetch(`${DB_URL}/${req.params.id}`, {
            method: "DELETE"
        });
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT);
