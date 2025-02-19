import { User, Product } from "./src";

(async () => {
  // Create the user
  const user = await User.create({
    username: "testUser",
    email: "test@test.com"
  });

  // Create some products
  const pencil = await Product.create({
    sku: "abc123",
    name: "Pencil",
    price: 1.01
  });

  const paper = await Product.create({
    sku: "abc456",
    name: "Paper",
    price: 10.25
  });
})();
