const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 4001;
const DB_URL = "http://localhost:5000/db/customers";

app.use(cors());
app.use(express.json());

app.get("/computerstore/customers", async (req, res) => {
    try {
        const response = await fetch(DB_URL);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/computerstore/customer/:id", async (req, res) => {
    try {
        const response = await fetch(`${DB_URL}/${req.params.id}`);
        const data = await response.json();
        if (!response.ok) return res.status(response.status).json(data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT);
