import { JsonValue } from "type-fest";
import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  description: string | null;
  dummy: JsonValue;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
