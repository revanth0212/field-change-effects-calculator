"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This is a generic Queue class.
 * We will be using this for calculating field changes.
 */

var Queue = function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.queue = [];
  }

  _createClass(Queue, [{
    key: "push",
    value: function push(item) {
      this.queue.push(item);
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.queue.shift();
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.queue[0];
    }
  }, {
    key: "clear",
    value: function clear() {
      this.queue = [];
    }
  }, {
    key: "hasKeys",
    value: function hasKeys() {
      return this.queue.length > 0;
    }
  }]);

  return Queue;
}();

exports.default = Queue;
module.exports = exports["default"];