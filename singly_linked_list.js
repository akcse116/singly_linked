/**
 * Singly_linked_list.js
 * Author: akcse116
 * 
 * This is a singly-linked list implementation in Javascript
 * intended as educational material which I composed for practice.
 * 
 * 
 * License:
 * This is an MIT licensed file. You are free to use it under
 * the conditions that I be given credit for this implementation and
 * the same license is extended to this portion of your code. 
 */


/**
 * Node
 * 
 * Input:
 * An initializing value can be provided at time of creation.
 * Value defaults to none when no instantiating value arguement is provided.
 * 
 * Methods:
 * getVal - returns node value
 * setVal - takes 1 arguement, sets node value
 * getNext - returns next node
 * setNext - takes 1 arguement, set next node
 */
class Node{
    constructor(value = null){
        this.value = value,
        this.next = null
    }

    getVal(){return this.value}

    setVal(val){this.value = val}

    getNext(){return this.next}

    setNext(node){this.next = node}
}


/**
 * SLinkedList
 * 
 * Singly-linked list. Can be used as stack since ordering is LIFO by design. 
 * 
 * Methods:
 * getLen - return amount of items in list
 * top - return value at beginning of list
 * push - insert a value to end
 * pop - remove last value from the list
 */
class SLinkedList{
    constructor(){
        this.head,
        this.len
    }

    getLen(){return this.len}

    top(){
        try{return this.head.getVal}
        catch(error){console.error(error)}
    }

    getVal(value){
        let prev = this.head;
        if (prev == val){
            this.head = prev.getNext();
            this.len -= 1;
            return prev.getVal();
        }
        while (prev != null){
            current = prev.getNext();
            if (current.getVal() == value){
                prev.setNext(current.getNext());
                this.len -= 1;
                return current.getVal();
            }
            prev = current;
        }
    }

    push(node){
        node.setNext(this.head);
        this.head = node;
        this.len += 1;
    }

    pop(){
        const removed = this.head;
        this.head = removed.getNext();
        removed.setNext(null);
        this.len -= 1;
        return removed;
    }
}
