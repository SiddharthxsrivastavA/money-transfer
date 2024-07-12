// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors(
  {
    origin: ["https://deploy-mern-1whq.vercel.app"},
    methods: ["POST", "GET"],
    credentials: true
  }
));

app.use(express.json());

mongoose.connect("mongodb+srv://sidpay:sidpayy@cluster0.3dk1n.mongodb.net/paytm");

app.use("/api/v1", rootRouter);

app.listen(3000);
