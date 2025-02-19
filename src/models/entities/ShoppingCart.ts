import DemoTable from "../DemoTable";
import { Entity, HasMany, IdAttribute, StringAttribute } from "dyna-record";
import Order from "./Order";

@Entity
class ShoppingCart extends DemoTable {}

export default ShoppingCart;
