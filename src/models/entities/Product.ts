import DemoTable from "../DemoTable";
import {
  Entity,
  HasAndBelongsToMany,
  NumberAttribute,
  StringAttribute
} from "dyna-record";
import Order from "./Order";
import OrderProduct from "./OrderProduct";

@Entity
class Product extends DemoTable {
  @StringAttribute()
  public readonly sku: string;

  @StringAttribute()
  public readonly name: string;

  @NumberAttribute()
  public readonly price: number;

  @HasAndBelongsToMany(() => Order, {
    targetKey: "products",
    through: () => ({ joinTable: OrderProduct, foreignKey: "productId" })
  })
  public readonly orders: Order[];
}

export default Product;
