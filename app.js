const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const userRoutes = require("./routes/user.js")

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(helmet())

app.use("/api", userRoutes)

app.listen(PORT, () => console.log("Listening"));
