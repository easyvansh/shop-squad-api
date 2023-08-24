const express = require("express");
const productRoutes = require("./router/productRoutes");
const orderRoutes = require("./router/orderRoutes");
const userRoutes = require("./router/userRoutes");
const paymentRoutes = require("./router/paymentRoutes");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
let cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/users", userRoutes);
app.use("/payments", paymentRoutes);

// Define the main route with modern styling and a short description
app.get("/", (req, res) => {
  const mainPageHtml = `
    <html>
    <head>
    <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #222;
      color: #fff;
      margin: 100;
      display: flex;
      height: 100vh;
      
    }
    h1 {
      font-size: 36px;
      margin: 10px;
      color: #007bff;
    }
    h2 {
      font-size: 36px;
      margin: 10px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 10px;
    }
    li {
      margin: 10px;
    }
    a {
      text-decoration: none;
      color: #007bff;
      font-weight: bold;
    }
  </style>
    </head>
    <body>
    <center>
      <h1>Server is Now Online . . .</h1>
      <h2>Welcome to the Shop-Squad App Server</h2>
      <p>This server serves as the backend for the Shop-Squad App, an ecommerce platform with a group buy feature. Below are the available routes:</p>
      <ul>
        <li><a href="/products">Products</a> - Manage Available Products</li>
        <li><a href="/users">Users</a> - Manage User Account(add unique user Id to get access)</li>
        <li><a href="/orders">Orders</a> - Handle User Orders(add unique user Id to get access)</li>
      </ul>
      </center>
    </body>
    </html>
  `;
  res.send(mainPageHtml);
});

app.listen(PORT, () => {
  console.log("API is listening on port ", PORT);
});
