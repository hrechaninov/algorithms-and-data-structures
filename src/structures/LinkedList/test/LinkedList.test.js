import LinkedList from "../LinkedList.js";
import Node from "../Node.js";

test("Creates an empty list", () => {
	const list = new LinkedList();
	expect(list).not.toBeUndefined();
});
test("Each list has a 'head' and a 'tail' properties which default to null", () => {
	const list = new LinkedList();
	expect(list).toHaveProperty("head");
	expect(list.head).toBeNull();
	expect(list).toHaveProperty("tail");
	expect(list.tail).toBeNull();
});
test("Not empty list must have a head and a tail", () => {
	const list = new LinkedList();
	const valueToAppend = {};

	list.append(valueToAppend);
	expect(list.head).not.toBeNull();
	expect(list.tail).not.toBeNull();
});

test("should append a node to the end of the list", () => {
	const list = new LinkedList();
	
	list.append("1")
		.append("2")
		.append("3");
	expect(list.toArray()).toEqual(["1", "2", "3"]);
});
test("append should return the list", () => {
	const list = new LinkedList();
	const returnedValueOfAppend = list.append("some value");

	expect(returnedValueOfAppend).toBe(list);
});

test("should convert the linked list to an array", () => {
	const list = new LinkedList();

	list.append("1")
		.append("2")
		.append("3");
	expect(list.toArray()).toEqual(["1", "2", "3"]);
});

test("prepend should return the list", () => {
	const list = new LinkedList();
	const returnedValueOfPrepend = list.prepend("some value");

	expect(returnedValueOfPrepend).toBe(list);
});
test("should prepend a node to the head of the list", () => {
	const list = new LinkedList();

	list.prepend("1")
		.prepend("2")
		.prepend("3");
	expect(list.toArray()).toEqual(["3", "2", "1"]);
});

test("should find a node by its value", () => {
	const list = new LinkedList();

	list.append("1")
		.append("2")
		.append("some value")
		.append("3");
	const foundNode = list.find("some value");
	expect(foundNode).toBeInstanceOf(Node);
	expect(foundNode.value).toBe("some value");
	expect(list.find("some other value")).toBeNull();
});
test("should find a node by a callback function", () => {
	const list = new LinkedList();
	const callback = value => value > 10;

	list.append(1)
		.append(2)
		.append(100)
		.append(4);
	const foundNode = list.find(callback);
	expect(foundNode).toBeInstanceOf(Node);
	expect(foundNode.value).toBe(100);
	expect(list.find(value => value < 0)).toBeNull();
});

test("should find a node by its value and delete it", () => {
	const list = new LinkedList();

	list.append("1")
		.append("2")
		.append("some value")
		.append("3");
	const deletedNode = list.delete("some value");
	expect(deletedNode).toBeInstanceOf(Node);
	expect(deletedNode.value).toBe("some value");
	expect(list.find("some value")).toBeNull();
	expect(list.delete("4")).toBeNull();
	expect(list.toArray()).toEqual(["1", "2", "3"]);
});

test("should call provided callback with each node", () => {
	const list = new LinkedList();
	const callback = jest.fn(node => node);

	list.append("1")
		.append("2")
		.append("3");
	list.forEach(callback);
	expect(callback).toBeCalledTimes(3);
	expect(callback.mock.results[0].value.value).toBe("1");
	expect(callback.mock.results[1].value.value).toBe("2");
	expect(callback.mock.results[2].value.value).toBe("3");
});