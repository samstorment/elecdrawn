class Node {
    constructor(previous, data, next) {
        this.previous = previous;
        this.data = data;
        this.next = next;
    }
}

export default class LinkedList {

    constructor() {
        this.head = new Node(null, null, null);
        this.tail = new Node(this.head, null, null);
        this.head.next = this.tail;
        this.length = 0;
    }
    
    insertAt(index, data) {

        let iter = this.head;
        for (let i = 0; i < index; i++) {
            iter = iter.next;
        }

        let before = iter;
        let after = iter.next;
        let insert = new Node(before, data, after);
        before.next = insert;
        after.previous = insert;

        this.length++;
    }

    insertFront(data) {
        let before = this.head;
        let after = this.head.next;
        let insert = new Node(before, data, after);
        before.next = insert;
        after.previous = insert;

        this.length++;
    }

    insertBack(data) {
        let after = this.tail;
        let before = this.tail.previous;
        let insert = new Node(before, data, after);
        before.next = insert;
        after.previous = insert;

        this.length++;
    }


    deleteAt(index) {
        let del = this.head;
        for (let i = 0; i <= index; i++) {
            del = del.next;
        }

        let before = del.previous;
        let after = del.next;
        before.next = after;
        after.previous = before;

        this.length--;
    }

    getFront() {
        return this.head.next.data;
    }

    getBack() {
        return this.tail.previous.data;
    }

    deleteFront() {
        if (this.head.next.data === null) { return; }

        let del = this.head.next;
        let after = del.next;

        this.head.next = after;
        after.previous = this.head;

        this.length--;
    }

    deleteBack() {
        if (this.tail.previous.data === null) { return; }

        let del = this.tail.previous;
        let before = del.previous;

        this.tail.previous = before;
        before.next = this.tail;

        this.length--;
    }

    printList() {
        let iter = this.head;
        while (iter.next.data !== null) {
            iter = iter.next;
            console.log(iter.data);
        }
    }
}