import HashTable from "../HashTable.js";

test("Creates a hashtable object", () => {
    const table = new HashTable();
    expect(table).not.toBeUndefined();
});
test("Creates a hashtable of defined size", () => {
    const table = new HashTable(32);
    const tinyTable = new HashTable(2);
    const hugeTable = new HashTable(512);
    expect(table.buckets.length).toBe(32);
    expect(tinyTable.buckets.length).toBe(2);
    expect(hugeTable.buckets.length).toBe(512);
});
test("Generates hash for a key", () => {
    const table = new HashTable();

    expect(table.hash("a")).not.toBeUndefined();
    expect(table.hash("b")).not.toBeUndefined();
    expect(table.hash("abc")).not.toBeUndefined();
});
test("Throws if key is not a string", () => {
    const table = new HashTable();
    expect(() => table.hash(1)).toThrow();
    expect(() => table.hash(["abc"])).toThrow();
});
test("Finds newly added value", () => {
    const table = new HashTable();
    table.set("key", 10);
    expect(table.get("key")).toBe(10);
});
test("Removes a value by its key", () => {
    const tableSize = 24;
    const table = new HashTable(tableSize);
    table.set("key", 10);
    table.set("key2", 10);
    table.set("key3", 10);
    table.remove("key");
    table.remove("key2");
    table.remove("key42");

    const emptyBuckets = table.buckets.filter(bucket => bucket.length === 0);
    const emptyBucketsAmount = emptyBuckets.length;
    expect(emptyBucketsAmount).toBe(tableSize - 1);
});
test("Counts load factor", () => {
    const table = new HashTable(24);
    table.set("key1", 10);
    table.set("key2", 20);
    table.set("key3", 30);
    expect(table.loadFactor).toBe(3/24);
});
test("Rehashes when exceeding a load factor threshold", () => {
    const tableSize = 24;
    const exceedingAmount = Math.floor(tableSize * HashTable.maxLoadFactor + 1) + 1;
    const table = new HashTable(tableSize);

    for(let i = 0; i < exceedingAmount; i++){
        table.set(i.toString(), i);
    }
    expect(table.loadFactor).toBeLessThan(HashTable.maxLoadFactor);
    expect(table.buckets.length).toBeGreaterThan(tableSize);
});