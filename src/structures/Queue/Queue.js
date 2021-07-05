import LinkedList from "../LinkedList/LinkedList.js";

export default class Queue extends LinkedList{
	constructor(){
		super();
	}
	enqueue(value){
		this.append(value);
		return this;
	}
	peek(){
		return this.head ? this.head.value : null;
	}
	dequeue(){
		if(!this.head){
			return null;
		}
		const value = this.head.value;
		this.head = this.head.next;
		return value;
	}
	get isEmpty(){
		return this.head === null;
	}
}