'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _Queue = require('./Queue');

var _Queue2 = _interopRequireDefault(_Queue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var containsField = function containsField(fieldChanges, fieldToFind) {
  return (fieldChanges.filter(function (_ref) {
    var name = _ref.name;
    return name === fieldToFind;
  }) || []).length > 0;
};

/**
 * 
 * COMPLEX FUNCTION. CONSIDER CAUTION WHILE MODIFYING.
 * 
 * This is a helper function that will used in queue iterations. This function hosts the
 * infinite loop breaking logic. When ever it calculates changes a certain field, it checks
 * inside the rules if changing that rule, will there be other fields that will have to be calcualted
 * and add them into the queue so they will be processed in next iterations.
 * 
 * @param { fieldName: Array<FieldChangeEffectRuleType> } FIELD_CHANGE_EFFECT_RULES 
 * @param queue 
 * @param {Array<FieldChangeObjectType>} fieldChanges
 * @param {string} changedFieldName
 * @param {any} newValue
 * @param state
 * 
 * @author Revanth Kumar
 */
var calculateSingleFieldChanges = function calculateSingleFieldChanges(FIELD_CHANGE_EFFECT_RULES, queue, fieldChanges) {
  return function (changedFieldName, newValue, state) {
    var fieldsConfig = FIELD_CHANGE_EFFECT_RULES[changedFieldName];
    if (fieldsConfig) {
      return fieldsConfig.map(function (_ref2) {
        var name = _ref2.name,
            path = _ref2.path,
            value = _ref2.value,
            editable = _ref2.editable,
            readable = _ref2.readable,
            required = _ref2.required,
            otherProps = _ref2.otherProps;

        if (containsField(fieldChanges, name)) {
          /**
           * This mean the field change has already been calculated.
           * Looks like an infinite loop. Dont execute this field change.
           */
          console.warn('Infinite loop found. ' + changedFieldName + ' is about to change ' + name + ' which has been changed due to other field. Not executing this field change effect to avoid inifinite loop.');
          return null;
        } else {
          var changes = {
            name: name,
            path: path,
            value: value(newValue, state),
            editable: editable(newValue, state),
            readable: readable(newValue, state),
            required: required(newValue, state),
            otherProps: otherProps ? otherProps(newValue, state) : {}
          };
          if (FIELD_CHANGE_EFFECT_RULES[name]) {
            /**
             * This means, due to this field change, some other fields
             * need to change. Hence add it into the queue.
            */
            queue.push({ name: name, newValue: changes.value });
          }
          return changes;
        }
      }).filter(function (fieldConfig) {
        return fieldConfig;
      });
    }
    return [];
  };
};

/**
 * 
 * COMPLEX FUNCTION. CONSIDER CAUTION WHILE MODIFYING.
 * 
 * This function calculates all field change effects if @param {string} name is changed to @param {any} value.
 * It calculates all field changes even if they are n-level deep using a queue iteratively.
 * Rules are provided as a parameter. @param {Array<FieldChangeEffectRuleType>} FIELD_CHANGE_EFFECT_RULES.
 * The function also gets @param state which is the global state at that point of time.
 * @param {Array<string>} path will be used to fetch the field from the global state. 
 * It has logic built into it to avoid the execution of certain field change effects if an infinite loop has been detected.
 * 
 * @author Revanth Kumar
 */
var calculateFieldChanges = function calculateFieldChanges(FIELD_CHANGE_EFFECT_RULES) {
  return function (state) {
    return function (name, fieldPath, value) {
      /**
        queue at all times contains field changes that need to be
        calcualted.
        Type of objects the queue will always contain:
        {
          name: string,
          newValue: any
        }
      */
      var queue = new _Queue2.default();
      /**
       * This is the first change that will be calculated in the queue.
       */
      queue.push({ name: name, newValue: value });
      var fieldChanges = [{
        name: name,
        path: fieldPath,
        value: value,
        editable: (0, _ramda.pathOr)(false, [].concat(_toConsumableArray(fieldPath), ['editable']), state),
        readable: (0, _ramda.pathOr)(false, [].concat(_toConsumableArray(fieldPath), ['readable']), state),
        required: (0, _ramda.pathOr)(false, [].concat(_toConsumableArray(fieldPath), ['required']), state),
        otherProps: (0, _ramda.pathOr)({}, [].concat(_toConsumableArray(fieldPath), ['otherProps']), state)
      }];
      var singleFieldChangesCalculator = calculateSingleFieldChanges(FIELD_CHANGE_EFFECT_RULES, queue, fieldChanges);
      /**
       * Iterate over the queue till all the calculations are done.
       * At first it will only contain the field changes that are inteded for the
       * field that has been changed on the UI. Once the iteration progresses we might
       * change some field that has change effects for other fields. For instance A might
       * have change effect for B and B might have for C. Once we calculate for A using
       * calculateSingleFieldChanges(A) we will know that B depends on A from FIELD_CHANGE_EFFECTS[A]
       * and add it into queue. Same for C.
       */
      while (queue.hasKeys()) {
        var field = queue.pop();
        fieldChanges.push.apply(fieldChanges, _toConsumableArray(singleFieldChangesCalculator(field.name, field.newValue, state)));
      }
      return fieldChanges;
    };
  };
};

exports.default = calculateFieldChanges;
module.exports = exports['default'];