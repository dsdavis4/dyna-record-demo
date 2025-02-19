import DemoTable from "../DemoTable";
import { Entity, HasMany, IdAttribute, StringAttribute } from "dyna-record";
import Order from "./Order";

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
}

export default User;
