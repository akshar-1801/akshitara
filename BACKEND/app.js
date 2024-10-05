const express = require("express");
const productRoute = require("./routes/product.route");
const userRoute = require("./routes/user.route");
const orderRoute = require("./routes/order.route");
const cartRoute = require("./routes/cart.route");
const wishlistRoute = require("./routes/wishlist.route");
const categoryRoute = require("./routes/category.route");
const authRoute = require("./routes/auth.router");
const paymentRoute = require("./routes/payment.route");
const consultingRoute = require("./routes/consultation.router");
const app = express();
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 3001;

require("dotenv").config();
require("./utils/dbconnection");
/*MIDDLEWARE*/
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

/*  */
app.get("/", (req, res) => {
  res.send("Hello from node API. This is home page");
});

/*ROUTES*/
app.use("/api/auth", authRoute);

app.use("/api/products", productRoute);

app.use("/api/users", userRoute);

app.use("/api/orders", orderRoute);

app.use("/api/cart", cartRoute);

app.use("/api/wishlist", wishlistRoute);

app.use("/api/category", categoryRoute);

app.use("/api/payments", paymentRoute);

app.use("/api/consulting", consultingRoute);

app.listen(PORT, () => {
  console.log("Server is running on port 3001");
});
