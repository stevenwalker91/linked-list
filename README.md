# Linked List

## Overview

This is a JavaScript implementation of a linked list that can be imported by applications. It comes with a number of methods to read and mutate the list.

#### What is a linked list?

A linked list is a data structure, similar to an array. One downside of arrays is that when something changes (e.g. an item is added at the start or somewhere in the middle), all of the following items in the array need to be reallocated because their index changes. For large arrays, this could be quite an expensive operation.

On the flip side, linked lists do not have an index, each item just points to the next item in the list. The advantage over arrays is also a weakness, when trying to edit the last item in a list for example, you can't just get the list item at the last index; instead you need to iterate through every item to get to the last one.

Each has their advantages for different scenarios.

#### Get Started

#### Install

`npm install @woftis/linked-list --save`

#### Usage

1. Import it in your app
2. Create the first node (head) of your list by calling `newNode.Node(value);` with relevant value
3. Create the list which takes the first node as a value with `list.LinkedList(node);`
4. You can then add to the list or call other methods listed below e.g. `myList.appendNode('i'm a new list item);`

#### Example:

```js
import { list, newNode } from "@woftis/linked-list";

const headNode = newNode.Node('whatever the first value should be');
const newList = list.LinkedList(headNode);
```

## Methods


| Methods | Description |
| ------- | ---------- |
| `size` | Return the current list size |
| `head` | Return the current head object |
| `tail` | Return the tail (last) object |
| `toString` | Return list of objects as a string in format `( value ) -> ( value ) -> ( value ) -> null` |
| `at(index)` | Return the object at a given index of the list|
| `appendNode(value)` | Add a new item at the end of the list. Accepts the value of the node you want to add |
| `prependNode(value)` | Add a new item at the start of the list (replacing the head). Accepts the value of the node you want to add|
| `pop` | Remove the last item from the list|
| `contains(value)` | Returns `true` if the list contains the passed value, else returns `false` |
| `find(value)` | Returns the index number of the value if the list contains the passed value, else returns `null` |
| `insertAt(index, value)` | Adds value to the specified index position of the list. If `0` is provided, it will prepend to the head, if `index` is greater than list size it will append to the tail |
| `removeAt(index)` | Removes value from the specified index position of the list. If `0` is provided, it will remove the head, if `index` is greater than list size it will return `null` |


