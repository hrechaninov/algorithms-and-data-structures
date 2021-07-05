import Queue from "../Queue.js";

test("creates empty queue", ()=> {
	expect(new Queue()).not.toBeUndefined();
});
test("should enqueue an element", () => {
	const queue = new Queue();
	queue.enqueue("1");
	expect(queue.find("1")).not.toBeNull();
});
test("should return ref to itself from queue method", () => {
	const queue = new Queue();
	expect(queue.enqueue("1")).toBe(queue);
});
test("should peek first element", () => {
	const queue = new Queue();
	const emptyQueue = new Queue();
	queue.enqueue("1")
		.enqueue("2")
		.enqueue("3");
	expect(queue.peek()).toBe("1");
	expect(emptyQueue.peek()).toBeNull();
});
test("should dequeue first element", () => {
	const queue = new Queue();

	queue.enqueue("1")
		.enqueue("2")
		.enqueue("3");
	expect(queue.dequeue()).toBe("1");
	expect(queue.dequeue()).toBe("2");
	expect(queue.toArray()).toEqual(["3"]);
});
test("should check if the queue is empty", () => {
	const queue = new Queue();
	expect(queue.isEmpty).toBe(true);
	queue.enqueue("some value");
	expect(queue.isEmpty).toBe(false);
});