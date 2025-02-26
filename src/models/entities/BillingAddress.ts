import DemoTable from "../DemoTable";
import {
  Entity,
  ForeignKeyAttribute,
  StringAttribute,
  ForeignKey,
  BelongsTo
} from "dyna-record";
import User from "./User";
import Product from "./Product";
import OrderProduct from "./OrderProduct";

@Entity
class BillingAddress extends DemoTable {
  @StringAttribute()
  public readonly addressLine1: string;

  @StringAttribute({ nullable: true })
  public readonly addressLine2?: string;

  @StringAttribute()
  public readonly city: string;

  @ForeignKeyAttribute()
  public readonly userId: ForeignKey;

  @BelongsTo(() => User, { foreignKey: "userId" })
  public readonly user: User;
}

export default BillingAddress;
