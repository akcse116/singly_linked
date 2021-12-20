# Singly-Linked List #
***Notice: this code is still in development***

### Author: akcse116 ###
<br/>

## Description ##
This is a singly-linked list implementation in Javascript
intended as educational material which I composed for practice.<br/>
Below is a visualization of what is occuring in the layout of this data structure. You can see the list properties and how they relate to the individual nodes of the list. With a purely singley lined list you can only move forward through the list starting from the beginning, since only the next node reference pointer is stored.<br/><br/>
![singly-linked list diagram](/Images/sll.jpg)<br/><br/>
Further modification is possible to add more behavior to this data structure by extending this class or creating an expanded class.<br/><br/>
As of now this list can function as a Stack but if reference to the tail is kept in the list properties, nodes may be added/removed at the end allowing for Queue funtionality LIFO in constant time. Notice that in the current implementation Queue functionality is possible by inserting at the last position and popping the head but the insertion time is a linear operation since no reference to the tail node is maintained.<br/><br/>
Furthermore, the doubly linked list can be created by extending or rewriting this class which will allow for movement back and forth. This allow for bidirectional traversal, simpler node deletion providing list reversal capability and faster sorting.
<br/><br/>


## Components ##

### Singly-Linked List ###
A list class, SLinkedList, with properties for length and head of list. Property access and interaction with the list is done using class methods.<br/>
#### Properties ####
- [x] len
- [x] head
#### Methods ####
- [x] getLen()
- [x] top()
- [x] remove()
- [x] push()
- [x] pop()
<br/><br/>

### List Node ###
A node class, Node, to be used with the Singly-Linked list. Property access and interaction with the node is done using class methods and is handled by the SLinkedList class methods which interact with the Node class.<br/>
<br/><br/>


##### License #####

*The code herein is MIT licensed. You are free to use it under
the conditions that I be given credit for this implementation and
the same license is extended to this portion of your code. 
