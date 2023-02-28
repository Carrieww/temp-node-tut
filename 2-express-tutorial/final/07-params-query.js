const express = require("express");
const app = express();
// this for setting the format of json file in web broswer
app.set("json spaces", 2);
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>HomePage</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  // usually we don't return everything in json object using res.json(products);
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// route parameter
app.get("/api/products/:productID", (req, res) => {
  console.log(req.params);
  const { productID } = req.params;

  // usually we don't return everything in json object using res.json(products);
  const singleProduct = products.find(
    (product) => product.id === Number(productID) // passed parameter must be a string
  );
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }
  return res.json(singleProduct);
});

// route parameter can be more complex
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Hello World!");
});

//query string parameters/url parameters
app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products]; // ... means to spread the properties of products assortedProducts

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    
    // the following two ways of sending empty json can be used.
    // Always use `return` otherwise will get error when more requests are sending but without ending

    // 1. intuitive approach
    // return res.status(200).send("no products matched your search");
    
    // 2. a common approach
    return res.status(200).json({success:true,data:[]})
  }
  return res.status(404).json(sortedProducts);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000....");
});
