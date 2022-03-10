import Node from "./Node";

export default class LinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	append(value){
		const nodeToAppend = new Node(value);

		if(!this.head){
			this.head = nodeToAppend;
			this.tail = nodeToAppend;
		}
		else{
			this.tail.next = nodeToAppend;
			this.tail = nodeToAppend;
		}

		this.length++;
		return this;
	}
	prepend(value){
		const nodeToPrepend = new Node(value);
		if(!this.head){
			this.head = nodeToPrepend;
			this.tail = nodeToPrepend;
		}
		else{
			nodeToPrepend.next = this.head;
			this.head = nodeToPrepend;
		}

		this.length++;
		return this;
	}
	toArray(){
		const arrayToReturn = [];
		let currentNode = this.head;
		while(currentNode){
			arrayToReturn.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return arrayToReturn;
	}
	find(input){
		return typeof input === "function" ? this.findByCallback(input) : this.findByValue(input);
	}
	findByValue(value){
		let foundNode = null;
		let currentNode = this.head;

		while(currentNode){
			if(currentNode.value === value){
				foundNode = currentNode;
				break;
			}
			currentNode = currentNode.next;
		}
		return foundNode;
	}
	findByCallback(callback){
		let foundNode = null;
		let currentNode = this.head;

		while(currentNode){
			if(callback(currentNode.value)){
				foundNode = currentNode;
				break;
			}
			currentNode = currentNode.next;
		}
		return foundNode;
	}
	delete(value){
		let previousNode = null;
		let currentNode = this.head;
		let nodeToDelete = null;

		while(currentNode){
			if(currentNode.value === value){
				this.length--;
				nodeToDelete = currentNode;
				if(currentNode === this.head){
					this.head = currentNode.next;
					break;
				}
				if(currentNode === this.tail){
					this.tail = previousNode;
					this.tail.next = null;
					break;
				}
				previousNode.next = currentNode.next;
				break;
			}
			previousNode = currentNode;
			currentNode = currentNode.next;
		}
		return nodeToDelete;
	}
	forEach(callback){
		let currentNode = this.head;

		while(currentNode){
			callback(currentNode);
			currentNode = currentNode.next;
		}
	}
}