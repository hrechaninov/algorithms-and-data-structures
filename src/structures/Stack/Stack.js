import LinkedList from "../LinkedList/LinkedList.js";

export default class Stack extends LinkedList{
	constructor(){
		super();
	}
	push(value){
		this.prepend(value);
	}
	pop(){
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