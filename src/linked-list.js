const Node = (value = null, next = null) => {
  return {
    value,
    next,
    updateValue: (updatedValue) => {
      this.value = updatedValue;
    },
  };
};

const LinkedList = (headObject) => {
  // initialise size with 1 to account for the head being added when list is created
  let size = 1;
  let head = headObject;

  const getHead = () => {
    return head;
  };

  const getTail = () => {
    let nodeToCheck = head;

    // check that next is not null and iterate until end of the list
    while (nodeToCheck.next !== null) {
      nodeToCheck = nodeToCheck.next;
    }
    return nodeToCheck;
  };

  const at = (index) => {
    let counter = 0;
    let nodeToCheck = head;

    // end if there are no other list items
    if (!nodeToCheck) {
      return;
    }

    //iterate through list to relevant object
    while (counter < index) {
      counter++;
      nodeToCheck = nodeToCheck.next;
    }
    return nodeToCheck;
  };

  // Add a new node at the end of the list
  const appendNode = (value) => {
    const node = Node(value);
    let nodeExists = head;

    // check that next is not null and iterate until end of the list
    while (nodeExists.next !== null) {
      nodeExists = nodeExists.next;
    }
    nodeExists.next = node;
    size++;
  };

  // Add a new head
  const prependNode = (value) => {
    const node = Node(value, head);
    head = node;
    size++;
  };

  const toString = () => {
    let currentNode = head;
    let returnString = '';

    while (currentNode.next !== null) {
      returnString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    returnString += `( ${currentNode.value} ) -> null`;
    return returnString;
  };

  const popLastNode = () => {
    let counter = 0;
    let currentNode = head;
    while (counter < size - 2) {
      currentNode = currentNode.next;
      counter++;
    }
    currentNode.next = null;
    size--;
  };

  const contains = (value) => {
    let nodeToCheck = head;

    while (nodeToCheck.next !== null) {
      if (nodeToCheck.value === value) {
        return true;
      }
      nodeToCheck = nodeToCheck.next;
    }
    return false;
  };

  const find = (value) => {
    let nodeToCheck = head;
    let counter = 0;

    while (counter < size) {
      if (nodeToCheck.value === value) {
        return counter;
      }
      counter++;
      nodeToCheck = nodeToCheck.next;
    }
    return null;
  };

  const insertAt = (index, value) => {
    let nodeToCheck = head;
    let counter = 0;

    if (counter === index) {
      return prependNode(value);
    }

    if (index > size) {
      return appendNode(value);
    }

    while (counter < index) {
      if (index - counter === 1) {
        const childNode = nodeToCheck.next;
        const newNode = Node(value, childNode);
        nodeToCheck.next = newNode;
      }
      nodeToCheck = nodeToCheck.next;
      counter++;
    }
    size++;
  };

  const removeAt = (index) => {
    if (index > size) {
      return null;
    }

    if (index === size) {
      return popLastNode();
    }

    if (index === 0) {
      head = head.next;
    }

    let nodeToCheck = head;
    let counter = 0;

    while (counter < index) {
      if (index - counter === 1) {
        const newChildNode = nodeToCheck.next.next;
        nodeToCheck.next = newChildNode;
      }
      nodeToCheck = nodeToCheck.next;
      counter++;
    }
    size--;
  };

  return {
    get head() {
      return getHead();
    },
    get size() {
      return size;
    },
    get tail() {
      return getTail();
    },
    get pop() {
      return popLastNode();
    },
    get toString() {
      return toString();
    },
    at,
    appendNode,
    prependNode,
    contains,
    find,
    insertAt,
    removeAt,
  };
};

//console.log(newNode);
const list = LinkedList(Node('zero'));

list.appendNode('one');
list.appendNode('two');
list.appendNode('three');

console.log(list.toString);
//console.log(list.size);
list.removeAt(0);
console.log(list.toString);
console.log(list.size);
console.log(list.at(2));
