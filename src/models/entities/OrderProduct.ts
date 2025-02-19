import { ForeignKey, JoinTable } from "dyna-record";
import type Order from "./Order";
import type Product from "./Product";

class OrderProduct extends JoinTable<Order, Product> {
  public readonly orderId: ForeignKey;
  public readonly productId: ForeignKey;
}

export default OrderProduct;
