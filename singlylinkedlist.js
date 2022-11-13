class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    isEmpty() {
        return this.length === 0
    }

    push(value) {
        let newNode = new Node(value);

        if(this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    pop(){
        if(!this.head){
            return null;
        } 
        if(this.length === 1) {
            let removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return removedNode
        }

        let currentNode = this.head;
        let lastNode = this.tail;
        let newLastNode 

        while (currentNode) {
            if (currentNode.next == this.tail) {
                newLastNode = currentNode;
                break
            }
            currentNode = currentNode.next;
        }
        newLastNode.next = null;
        this.tail = newLastNode;
        this.length--;

        return lastNode;
    }

    shift(){
        if (!this.head) {
            return null
        }

        const nodeToRemove = this.head;
        this.head = this.head.next;
        this.length--;

        if (!this.length) {
            this.tail = null;
          }

        return nodeToRemove;
    }

    unshift(value){
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
    }
}

let list = new LinkedList();




list.push(10)
list.push(15)
list.push(20)
list.push(95)
list.push(25)
list.push(125)
// list.push(35)


list.shift();
list.shift();
list.pop();
list.pop();
list.unshift(5)
list.unshift(45)
// console.log(list.isEmpty());
console.log(list);
