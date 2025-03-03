import express from 'express';
import load_dotenv from 'dotenv';
const app = express();

load_dotenv.config();

const PORT = process.env.SERVER_PORT;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server running at https://${PORT}`);
})