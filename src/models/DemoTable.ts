import DynaRecord, {
  PartitionKey,
  PartitionKeyAttribute,
  SortKey,
  SortKeyAttribute,
  Table
} from "dyna-record";

@Table({ name: "my-table", delimiter: "#" })
abstract class DemoTable extends DynaRecord {
  @PartitionKeyAttribute({ alias: "PK" })
  public readonly pk: PartitionKey;

  @SortKeyAttribute({ alias: "SK" })
  public readonly sk: SortKey;
}

export default DemoTable;
