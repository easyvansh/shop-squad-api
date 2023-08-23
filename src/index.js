const express = require("express");
const productRoutes = require("./router/productRoutes");
const orderRoutes = require("./router/orderRoutes");
const userRoutes = require("./router/userRoutes");
const paymentRoutes = require("./router/paymentRoutes");
const bodyParser = require("body-parser");
const app = express();
const PORT =  process.env.PORT  || 3000;
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
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        h1 {
          color: #333;
          padding: 20px;
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
      </style>
    </head>
    <body>
      <h1>Welcome to the Shop-Squad App Server</h1>
      <p>This server serves as the backend for the Shop-Squad App, an ecommerce platform with a group buy feature. Below are the available routes:</p>
      <ul>
        <li><a href="/products">Products</a> - Manage available products</li>
        <li><a href="/orders">Orders</a> - Handle user orders</li>
        <li><a href="/users">Users</a> - Manage user accounts</li>
        <li><a href="/payments">Payments</a> - Process payments</li>
      </ul>
    </body>
    </html>
  `;
  res.send(mainPageHtml);
});

app.listen(PORT, () => {
  console.log("API is listening on port ", PORT);
});
