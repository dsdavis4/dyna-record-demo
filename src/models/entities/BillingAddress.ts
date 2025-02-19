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

  @StringAttribute()
  public readonly state: string;

  @ForeignKeyAttribute()
  public readonly userId: ForeignKey;

  @BelongsTo(() => User, { foreignKey: "userId" })
  public readonly user: User;
}

export default BillingAddress;
