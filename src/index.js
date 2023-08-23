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
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
    }
    h1 {
      font-size: 36px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin: 10px;
    }
    a {
      text-decoration: none;
      color: #007bff;
      font-weight: bold;
    }
    input {
      margin-top: 10px;
      padding: 5px;
    }
    button {
      padding: 5px 10px;
      background-color: #007bff;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  </style>
    </head>
    <body>
      <h1>Welcome to the Shop-Squad App Server</h1>
      <p>This server serves as the backend for the Shop-Squad App, an ecommerce platform with a group buy feature. Below are the available routes:</p>
      <ul>
        <li><a href="/products">Products</a> - Manage Available Products</li>
        <li><a href="/users">Users</a> - Manage User Account</li>
        <form action="/users/" method="get">
        <input type="text" name="userId" placeholder="Enter User ID">
        <button type="submit">Access User</button>
        </form>
        <li><a href="/orders">Orders</a> - Handle user orders</li>
        <form action="/orders/" method="get">
        <input type="text" name="userId" placeholder="Enter User ID">
        <button type="submit">Access User</button>
      </form>
      </ul>
    </body>
    </html>
  `;
  res.send(mainPageHtml);
});

app.listen(PORT, () => {
  console.log("API is listening on port ", PORT);
});
