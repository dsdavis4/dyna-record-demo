import DynaRecord, {
  PartitionKey,
  PartitionKeyAttribute,
  SortKey,
  SortKeyAttribute,
  Table
} from "dyna-record";

@Table({ name: "dyna-record-demo", delimiter: "#" })
abstract class DemoTable extends DynaRecord {
  @PartitionKeyAttribute()
  public readonly pk: PartitionKey;

  @SortKeyAttribute()
  public readonly sk: SortKey;
}

export default DemoTable;
