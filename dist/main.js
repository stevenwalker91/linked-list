/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/linked-list.js":
/*!****************************!*\
  !*** ./src/linked-list.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedList": () => (/* binding */ LinkedList)
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ "./src/node.js");


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
    const node = _node_js__WEBPACK_IMPORTED_MODULE_0__.Node(value);
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
    const node = node.Node(value, head);
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
        const newNode = newNode.Node(value, childNode);
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




/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node)
/* harmony export */ });
const Node = (value = null, next = null) => {
  return {
    value,
    next,
    updateValue: (updatedValue) => {
      undefined.value = updatedValue;
    },
  };
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": () => (/* reexport module object */ _linked_list_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "newNode": () => (/* reexport module object */ _node_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _linked_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list.js */ "./src/linked-list.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node.js */ "./src/node.js");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQiwwQ0FBWTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0EseUJBQXlCLG1CQUFtQjtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7OztBQ3hMdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sU0FBSTtBQUNWLEtBQUs7QUFDTDtBQUNBOztBQUVnQjs7Ozs7OztVQ1ZoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDSjs7QUFFWiIsInNvdXJjZXMiOlsid2VicGFjazovL0B3b2Z0aXMvbGlua2VkLWxpc3QvLi9zcmMvbGlua2VkLWxpc3QuanMiLCJ3ZWJwYWNrOi8vQHdvZnRpcy9saW5rZWQtbGlzdC8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL0B3b2Z0aXMvbGlua2VkLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHdvZnRpcy9saW5rZWQtbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHdvZnRpcy9saW5rZWQtbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0B3b2Z0aXMvbGlua2VkLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ad29mdGlzL2xpbmtlZC1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG5ld05vZGUgZnJvbSAnLi9ub2RlLmpzJztcblxuY29uc3QgTGlua2VkTGlzdCA9IChoZWFkT2JqZWN0KSA9PiB7XG4gIC8vIGluaXRpYWxpc2Ugc2l6ZSB3aXRoIDEgdG8gYWNjb3VudCBmb3IgdGhlIGhlYWQgYmVpbmcgYWRkZWQgd2hlbiBsaXN0IGlzIGNyZWF0ZWRcbiAgbGV0IHNpemUgPSAxO1xuICBsZXQgaGVhZCA9IGhlYWRPYmplY3Q7XG5cbiAgY29uc3QgZ2V0SGVhZCA9ICgpID0+IHtcbiAgICByZXR1cm4gaGVhZDtcbiAgfTtcblxuICBjb25zdCBnZXRUYWlsID0gKCkgPT4ge1xuICAgIGxldCBub2RlVG9DaGVjayA9IGhlYWQ7XG5cbiAgICAvLyBjaGVjayB0aGF0IG5leHQgaXMgbm90IG51bGwgYW5kIGl0ZXJhdGUgdW50aWwgZW5kIG9mIHRoZSBsaXN0XG4gICAgd2hpbGUgKG5vZGVUb0NoZWNrLm5leHQgIT09IG51bGwpIHtcbiAgICAgIG5vZGVUb0NoZWNrID0gbm9kZVRvQ2hlY2submV4dDtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVUb0NoZWNrO1xuICB9O1xuXG4gIGNvbnN0IGF0ID0gKGluZGV4KSA9PiB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBub2RlVG9DaGVjayA9IGhlYWQ7XG5cbiAgICAvLyBlbmQgaWYgdGhlcmUgYXJlIG5vIG90aGVyIGxpc3QgaXRlbXNcbiAgICBpZiAoIW5vZGVUb0NoZWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy9pdGVyYXRlIHRocm91Z2ggbGlzdCB0byByZWxldmFudCBvYmplY3RcbiAgICB3aGlsZSAoY291bnRlciA8IGluZGV4KSB7XG4gICAgICBjb3VudGVyKys7XG4gICAgICBub2RlVG9DaGVjayA9IG5vZGVUb0NoZWNrLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBub2RlVG9DaGVjaztcbiAgfTtcblxuICAvLyBBZGQgYSBuZXcgbm9kZSBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gIGNvbnN0IGFwcGVuZE5vZGUgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBub2RlID0gbmV3Tm9kZS5Ob2RlKHZhbHVlKTtcbiAgICBsZXQgbm9kZUV4aXN0cyA9IGhlYWQ7XG5cbiAgICAvLyBjaGVjayB0aGF0IG5leHQgaXMgbm90IG51bGwgYW5kIGl0ZXJhdGUgdW50aWwgZW5kIG9mIHRoZSBsaXN0XG4gICAgd2hpbGUgKG5vZGVFeGlzdHMubmV4dCAhPT0gbnVsbCkge1xuICAgICAgbm9kZUV4aXN0cyA9IG5vZGVFeGlzdHMubmV4dDtcbiAgICB9XG4gICAgbm9kZUV4aXN0cy5uZXh0ID0gbm9kZTtcbiAgICBzaXplKys7XG4gIH07XG5cbiAgLy8gQWRkIGEgbmV3IGhlYWRcbiAgY29uc3QgcHJlcGVuZE5vZGUgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBub2RlID0gbm9kZS5Ob2RlKHZhbHVlLCBoZWFkKTtcbiAgICBoZWFkID0gbm9kZTtcbiAgICBzaXplKys7XG4gIH07XG5cbiAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZDtcbiAgICBsZXQgcmV0dXJuU3RyaW5nID0gJyc7XG5cbiAgICB3aGlsZSAoY3VycmVudE5vZGUubmV4dCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuU3RyaW5nICs9IGAoICR7Y3VycmVudE5vZGUudmFsdWV9ICkgLT4gYDtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuU3RyaW5nICs9IGAoICR7Y3VycmVudE5vZGUudmFsdWV9ICkgLT4gbnVsbGA7XG4gICAgcmV0dXJuIHJldHVyblN0cmluZztcbiAgfTtcblxuICBjb25zdCBwb3BMYXN0Tm9kZSA9ICgpID0+IHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZDtcbiAgICB3aGlsZSAoY291bnRlciA8IHNpemUgLSAyKSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHQ7XG4gICAgICBjb3VudGVyKys7XG4gICAgfVxuICAgIGN1cnJlbnROb2RlLm5leHQgPSBudWxsO1xuICAgIHNpemUtLTtcbiAgfTtcblxuICBjb25zdCBjb250YWlucyA9ICh2YWx1ZSkgPT4ge1xuICAgIGxldCBub2RlVG9DaGVjayA9IGhlYWQ7XG5cbiAgICB3aGlsZSAobm9kZVRvQ2hlY2submV4dCAhPT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGVUb0NoZWNrLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIG5vZGVUb0NoZWNrID0gbm9kZVRvQ2hlY2submV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGZpbmQgPSAodmFsdWUpID0+IHtcbiAgICBsZXQgbm9kZVRvQ2hlY2sgPSBoZWFkO1xuICAgIGxldCBjb3VudGVyID0gMDtcblxuICAgIHdoaWxlIChjb3VudGVyIDwgc2l6ZSkge1xuICAgICAgaWYgKG5vZGVUb0NoZWNrLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gY291bnRlcjtcbiAgICAgIH1cbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIG5vZGVUb0NoZWNrID0gbm9kZVRvQ2hlY2submV4dDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgY29uc3QgaW5zZXJ0QXQgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgbGV0IG5vZGVUb0NoZWNrID0gaGVhZDtcbiAgICBsZXQgY291bnRlciA9IDA7XG5cbiAgICBpZiAoY291bnRlciA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiBwcmVwZW5kTm9kZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID4gc2l6ZSkge1xuICAgICAgcmV0dXJuIGFwcGVuZE5vZGUodmFsdWUpO1xuICAgIH1cblxuICAgIHdoaWxlIChjb3VudGVyIDwgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCAtIGNvdW50ZXIgPT09IDEpIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gbm9kZVRvQ2hlY2submV4dDtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ld05vZGUuTm9kZSh2YWx1ZSwgY2hpbGROb2RlKTtcbiAgICAgICAgbm9kZVRvQ2hlY2submV4dCA9IG5ld05vZGU7XG4gICAgICB9XG4gICAgICBub2RlVG9DaGVjayA9IG5vZGVUb0NoZWNrLm5leHQ7XG4gICAgICBjb3VudGVyKys7XG4gICAgfVxuICAgIHNpemUrKztcbiAgfTtcblxuICBjb25zdCByZW1vdmVBdCA9IChpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA+IHNpemUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gc2l6ZSkge1xuICAgICAgcmV0dXJuIHBvcExhc3ROb2RlKCk7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgIH1cblxuICAgIGxldCBub2RlVG9DaGVjayA9IGhlYWQ7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gICAgd2hpbGUgKGNvdW50ZXIgPCBpbmRleCkge1xuICAgICAgaWYgKGluZGV4IC0gY291bnRlciA9PT0gMSkge1xuICAgICAgICBjb25zdCBuZXdDaGlsZE5vZGUgPSBub2RlVG9DaGVjay5uZXh0Lm5leHQ7XG4gICAgICAgIG5vZGVUb0NoZWNrLm5leHQgPSBuZXdDaGlsZE5vZGU7XG4gICAgICB9XG4gICAgICBub2RlVG9DaGVjayA9IG5vZGVUb0NoZWNrLm5leHQ7XG4gICAgICBjb3VudGVyKys7XG4gICAgfVxuICAgIHNpemUtLTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBoZWFkKCkge1xuICAgICAgcmV0dXJuIGdldEhlYWQoKTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemU7XG4gICAgfSxcbiAgICBnZXQgdGFpbCgpIHtcbiAgICAgIHJldHVybiBnZXRUYWlsKCk7XG4gICAgfSxcbiAgICBnZXQgcG9wKCkge1xuICAgICAgcmV0dXJuIHBvcExhc3ROb2RlKCk7XG4gICAgfSxcbiAgICBnZXQgdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gdG9TdHJpbmcoKTtcbiAgICB9LFxuICAgIGF0LFxuICAgIGFwcGVuZE5vZGUsXG4gICAgcHJlcGVuZE5vZGUsXG4gICAgY29udGFpbnMsXG4gICAgZmluZCxcbiAgICBpbnNlcnRBdCxcbiAgICByZW1vdmVBdCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IExpbmtlZExpc3QgfTtcbiIsImNvbnN0IE5vZGUgPSAodmFsdWUgPSBudWxsLCBuZXh0ID0gbnVsbCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHZhbHVlLFxuICAgIG5leHQsXG4gICAgdXBkYXRlVmFsdWU6ICh1cGRhdGVkVmFsdWUpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSB1cGRhdGVkVmFsdWU7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IE5vZGUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgbGlzdCBmcm9tICcuL2xpbmtlZC1saXN0LmpzJztcbmltcG9ydCAqIGFzIG5ld05vZGUgZnJvbSAnLi9ub2RlLmpzJztcblxuZXhwb3J0IHsgbGlzdCwgbmV3Tm9kZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9