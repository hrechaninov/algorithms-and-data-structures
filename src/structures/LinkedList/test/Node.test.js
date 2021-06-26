import Node from "../Node.js"

test("Creates an empty node", () => {
	const node = new Node();
	expect(node).not.toBeUndefined();
});
test("Each node has 'value' and 'next' properties which default to null", () => {
	const node = new Node();
	expect(node).toHaveProperty("value");
	expect(node.value).toBeNull();
	expect(node).toHaveProperty("next");
	expect(node.next).toBeNull();
});
