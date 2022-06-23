const express = require("express");

const app = express();

const cookieParser = require("cookie-parser");


const errorMiddleware = require("./middleware/error")

app.use(express.json());
app.use(cookieParser());

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

// app.use("/", product);
app.use("/api", product);
app.use("/api", user); 
app.use("/api", order);


app.use(errorMiddleware);


module.exports = app;