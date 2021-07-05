import Stack from "../Stack.js";

test("should create a stack", () => {
	const stack = new Stack();
	expect(stack).not.toBeUndefined();
	expect(stack).toBeInstanceOf(Stack);
});
test("should push an element to the stack", () => {
	const stack = new Stack();
	stack.push("1");
	stack.push("2");
	stack.push("3");
	expect(stack.toArray()).toEqual(["3", "2", "1"]);
});
test("should pop the last element from the stack", () => {
	const stack = new Stack();
	stack.push("1");
	stack.push("2");
	stack.push("3");
	expect(stack.pop()).toBe("3");
	stack.push("4");
	expect(stack.toArray()).toEqual(["4", "2", "1"]);
});
test("should check if is empty", () => {
	const stack = new Stack();
	const emptyStack = new Stack();
	stack.push("some value");
	expect(stack.isEmpty).toBe(false);
	expect(emptyStack.isEmpty).toBe(true);
});