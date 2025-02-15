const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

app.get("/api/instagram-messages", async (req, res) => {
    try {
        const response = await axios.get(
            `https://graph.facebook.com/v18.0/me/conversations?platform=instagram&access_token=${PAGE_ACCESS_TOKEN}`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Instagram messages" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
