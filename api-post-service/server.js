const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 4002;
const DB_URL = "http://localhost:5000/db/customers";

app.use(cors());
app.use(express.json());

app.post("/computerstore/customer", async (req, res) => {
    try {
        const response = await fetch(DB_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT);
