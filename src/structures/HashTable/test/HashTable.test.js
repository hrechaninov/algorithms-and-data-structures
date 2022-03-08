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