import DemoTable from "../DemoTable";
import {
  Entity,
  HasMany,
  HasOne,
  IdAttribute,
  StringAttribute
} from "dyna-record";
import Order from "./Order";
import BillingAddress from "./BillingAddress";

@Entity
class User extends DemoTable {
  @IdAttribute
  @StringAttribute()
  public readonly username: string;

  @StringAttribute({ nullable: true })
  public readonly fullName?: string;

  @StringAttribute()
  public readonly email: string;

  @HasMany(() => Order, { foreignKey: "userId" })
  public readonly orders: Order[];

  @HasOne(() => BillingAddress, { foreignKey: "userId" })
  public readonly billingAddress: BillingAddress;
}

export default User;
