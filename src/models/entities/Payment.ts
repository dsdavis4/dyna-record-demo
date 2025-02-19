import DemoTable from "../DemoTable";
import {
  Entity,
  BelongsTo,
  IdAttribute,
  ForeignKeyAttribute,
  ForeignKey,
  NumberAttribute
} from "dyna-record";
import Order from "./Order";

@Entity
class Payment extends DemoTable {
  @NumberAttribute()
  public readonly paymentAmount: number;

  @ForeignKeyAttribute()
  public readonly orderId: ForeignKey;

  @BelongsTo(() => Order, { foreignKey: "orderId" })
  public readonly user: Order;
}

export default Payment;
