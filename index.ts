import { User, Product, BillingAddress, Order, OrderProduct } from "./src";

// Optionally turn on debug logging to view the operations dyna-record performs
process.env.DYNA_RECORD_LOGGING_ENABLED = "true";

// Note: This is not an exhaustive list of available operations/access patterns
(async () => {
  // Create the user.
  // This will fail the second time unless the username attribute is updated because its marked as the IdField in the model
  const user = await User.create({
    fullName: "Nemo",
    username: "nemo123444",
    email: "fish-are-friends-not-food@test.com"
  });

  // Create the users billing address
  const billingAddress = await BillingAddress.create({
    addressLine1: "42 Wallaby Way",
    city: "Sydney",
    userId: user.id
  });

  // Create some products
  const fishFood = await Product.create({
    sku: "abc123",
    name: "Fish Food",
    price: 1.01
  });

  const tankCleaner = await Product.create({
    sku: "abc456",
    name: "Fish Tank Cleaner",
    price: 10.25
  });

  // Create an Order
  const order = await Order.create({
    orderId: "order-1",
    status: "PENDING",
    orderDate: new Date("1/1/2025"),
    userId: user.id
  });

  // Add some products to the order
  await OrderProduct.create({ orderId: order.id, productId: fishFood.id });

  await OrderProduct.create({ orderId: order.id, productId: tankCleaner.id });

  // Example FindById patterns

  const userIncludes = await User.findById("nemo123", {
    include: [{ association: "orders" }, { association: "billingAddress" }]
  });
  console.dir(userIncludes);

  const orderIncludes = await Order.findById(order.id, {
    include: [{ association: "products" }, { association: "user" }]
  });
  console.dir(orderIncludes);

  const productIncludes = await Product.findById(fishFood.id, {
    include: [{ association: "orders" }]
  });
  console.dir(productIncludes);

  // Example Query

  const userPendingOrders = await User.query(user.id, {
    skCondition: { $beginsWith: "Order" },
    filter: {
      status: "PENDING"
      // or check multiple
      // status: ["PENDING", "SHIPPED"]
    }
  });
  console.dir(userPendingOrders);

  const alternativeUserPendingOrders = await User.query(
    {
      pk: User.partitionKeyValue(user.id),
      sk: { $beginsWith: "Order" }
    },
    {
      filter: { status: "PENDING" }
    }
  );
  console.dir(alternativeUserPendingOrders);
})();
