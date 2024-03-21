import express from "express";
require("dotenv").config();
import { router as summariseRoutes } from "./api/summariseRoutes";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(
    cors({
        origin: "https://www.youtube.com", // Replace with the appropriate origin
    })
);
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
app.use("/api", summariseRoutes);

app.listen(port, () => {
    console.log(`port on ${port}`);
});
