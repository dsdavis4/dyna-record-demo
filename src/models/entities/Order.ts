import DemoTable from "../DemoTable";
import {
  DateAttribute,
  Entity,
  EnumAttribute,
  ForeignKeyAttribute,
  StringAttribute,
  ForeignKey,
  BelongsTo,
  HasAndBelongsToMany
} from "dyna-record";
import User from "./User";
import Product from "./Product";
import OrderProduct from "./OrderProduct";

type OrderStatuses = "PENDING" | "PLACED" | "SHIPPED";

@Entity
class Order extends DemoTable {
  @StringAttribute()
  public readonly orderId: string;

  @EnumAttribute({ values: ["PENDING", "PLACED", "SHIPPED"] })
  public readonly status: OrderStatuses;

  @DateAttribute()
  public readonly orderDate: Date;

  @ForeignKeyAttribute()
  public readonly userId: ForeignKey;

  @BelongsTo(() => User, { foreignKey: "userId" })
  public readonly user: User;

  @HasAndBelongsToMany(() => Product, {
    targetKey: "orders",
    through: () => ({ joinTable: OrderProduct, foreignKey: "orderId" })
  })
  public readonly products: Product[];
}

export default Order;
