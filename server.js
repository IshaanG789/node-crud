const express = require("express");
const { default: mongoose } = require("mongoose");
const Product = require("./models/ProductSchema");
const app = express();
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello CRUD");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog");
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://ishaangtpss:Password!23@crud.z67iadm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3000, () => {
      console.log(`Node API app is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
