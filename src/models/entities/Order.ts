import DemoTable from "../DemoTable";
import {
  DateAttribute,
  Entity,
  EnumAttribute,
  ForeignKeyAttribute,
  IdAttribute,
  StringAttribute,
  ForeignKey,
  BelongsTo,
  HasOne,
  HasAndBelongsToMany
} from "dyna-record";
import User from "./User";
import Payment from "./Payment";
import Product from "./Product";
import OrderProduct from "./OrderProduct";

type OrderStatuses = "PLACED" | "SHIPPED";

@Entity
class Order extends DemoTable {
  @IdAttribute
  @StringAttribute()
  public readonly orderId: string;

  @EnumAttribute({ values: ["PLACED", "SHIPPED"] })
  public readonly fullName: OrderStatuses;

  @DateAttribute()
  public readonly orderDate: Date;

  @ForeignKeyAttribute()
  public readonly userId: ForeignKey;

  @BelongsTo(() => User, { foreignKey: "userId" })
  public readonly user: User;

  @HasOne(() => Payment, { foreignKey: "orderId" })
  public readonly payment: Payment;

  @HasAndBelongsToMany(() => Product, {
    targetKey: "orders",
    through: () => ({ joinTable: OrderProduct, foreignKey: "orderId" })
  })
  public readonly products: Product[];
}

export default Order;
