import DemoTable from "../DemoTable";
import {
  DateAttribute,
  Entity,
  EnumAttribute,
  ForeignKeyAttribute,
  IdAttribute,
  StringAttribute,
  ForeignKey,
  BelongsTo
} from "dyna-record";
import User from "./User";

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
}

export default Order;
