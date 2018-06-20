'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEasyState = require('react-easy-state');

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _reactPureLifecycle = require('react-pure-lifecycle');

var _reactPureLifecycle2 = _interopRequireDefault(_reactPureLifecycle);

var _validation = require('../data/validation');

var _validation2 = _interopRequireDefault(_validation);

var _lib = require('../../../lib');

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormMethods = {
  componentDidMount: function componentDidMount(_ref) {
    var name = _ref.name,
        _ref$defaultValues = _ref.defaultValues,
        defaultValues = _ref$defaultValues === undefined ? {} : _ref$defaultValues;

    _lib.store.forms[name] = { data: defaultValues, fields: {}, errors: {}, customError: null };
  }
};

var Form = function Form(props) {
  var onSubmit = props.onSubmit,
      children = props.children,
      name = props.name,
      mutate = props.mutate,
      _props$forms = props.forms,
      forms = _props$forms === undefined ? [] : _props$forms;

  var formId = name;
  var currentForm = _lib.store.forms[name] || {};
  var customError = currentForm.customError,
      _currentForm$errors = currentForm.errors,
      errors = _currentForm$errors === undefined ? {} : _currentForm$errors,
      _currentForm$data = currentForm.data,
      data = _currentForm$data === undefined ? {} : _currentForm$data,
      _currentForm$fields = currentForm.fields,
      fields = _currentForm$fields === undefined ? {} : _currentForm$fields;


  var methods = {
    setValidationRules: function setValidationRules(attr) {
      var validators = Object.keys(_validation2.default);
      var name = attr.name,
          label = attr.label,
          value = attr.value;

      fields[name] = {
        label: label,
        validationRules: Object.keys(attr).filter(function (rule) {
          return validators.some(function (element) {
            return element === rule;
          });
        }).map(function (rule) {
          return { rule: rule, param: attr[rule] };
        })
      };
    },
    onChange: function onChange(event) {
      var _event$target = event.target,
          _event$target$attribu = _event$target.attributes,
          group = _event$target$attribu.group,
          _event$target$attribu2 = _event$target$attribu.dependencies,
          dependencies = _event$target$attribu2 === undefined ? [] : _event$target$attribu2,
          type = _event$target.type,
          name = _event$target.name,
          value = _event$target.value,
          checked = _event$target.checked;

      var isArray = name.substr(-2) === '[]';
      var isCheckbox = type === 'checkbox';
      var groupName = group && group.value;
      var fieldValue = isCheckbox ? checked : value;

      if (groupName) {
        var fieldData = data[groupName] || [];
        var fieldIndex = fieldData.findIndex(function (el) {
          return el === name;
        });
        if (fieldValue) {
          if (fieldIndex >= 0) {
            fieldData[fieldIndex] = name;
          } else {
            fieldData.push(name);
          }
        } else {
          fieldIndex >= 0 && fieldData.splice(fieldIndex, 1);
        }
        currentForm.data = (0, _extends4.default)({}, currentForm.data, (0, _defineProperty3.default)({}, groupName, fieldData));
      } else {
        var formData = data;
        if (fieldValue) {
          formData[name] = fieldValue;
        } else {
          delete formData[name];
        }
        currentForm.data = (0, _extends4.default)({}, formData);
      }

      for (var i = 0; i < dependencies.length; i++) {
        delete data[dependencies[i]];
      }

      if (errors && errors.hasOwnProperty(name)) {
        delete errors[name];
      }
    }
  };

  var childrenWithProps = function childrenWithProps(children) {
    return _react2.default.Children.map(children, function (child) {
      if (!child || !child.props) return child;
      var name = child.props.name;

      var error = name && errors[name] && { errorMessage: errors[name] };

      var childProps = {};
      if (_react2.default.isValidElement(child) && child.props) {
        var value = data[name];
        childProps = (0, _extends4.default)({}, child.props, { methods: methods, error: error, value: value });
      }
      if (child.props) {
        childProps.children = childrenWithProps(child.props.children);
        return _react2.default.cloneElement(child, childProps);
      }
      return child;
    });
  };

  var fieldsWithProps = childrenWithProps(children);

  var handleSubmit = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
      var invalid, fieldName, fieldData, value, label, validationRules, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref4, rule, param, validationResult, _ref5, error, _fieldName, errorMessage;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();

              invalid = false;
              _context.t0 = _regenerator2.default.keys(fields);

            case 3:
              if ((_context.t1 = _context.t0()).done) {
                _context.next = 30;
                break;
              }

              fieldName = _context.t1.value;
              fieldData = fields[fieldName];
              value = data[fieldName];

              if (!fieldData.hasOwnProperty('validationRules')) {
                _context.next = 28;
                break;
              }

              label = fieldData.label, validationRules = fieldData.validationRules;
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 12;

              for (_iterator = validationRules[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                _ref4 = _step.value;
                rule = _ref4.rule, param = _ref4.param;
                validationResult = _validation2.default[rule](label, value, param);

                if (validationResult) {
                  invalid = true;
                  errors[fieldName] = validationResult;
                }
              }
              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t2 = _context['catch'](12);
              _didIteratorError = true;
              _iteratorError = _context.t2;

            case 20:
              _context.prev = 20;
              _context.prev = 21;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 23:
              _context.prev = 23;

              if (!_didIteratorError) {
                _context.next = 26;
                break;
              }

              throw _iteratorError;

            case 26:
              return _context.finish(23);

            case 27:
              return _context.finish(20);

            case 28:
              _context.next = 3;
              break;

            case 30:
              if (invalid) {
                _context.next = 43;
                break;
              }

              _context.t4 = onSubmit;

              if (!_context.t4) {
                _context.next = 36;
                break;
              }

              _context.next = 35;
              return onSubmit(data);

            case 35:
              _context.t4 = _context.sent;

            case 36:
              _context.t3 = _context.t4;

              if (_context.t3) {
                _context.next = 39;
                break;
              }

              _context.t3 = {};

            case 39:
              _ref5 = _context.t3;
              error = _ref5.error;

              console.log('submitForm', data);

              if (error) {
                _fieldName = null;
                errorMessage = error.replace(/".*?"/g, function (el) {
                  _fieldName = el.replace(/"/g, '');
                  return (fields[_fieldName] || {}).label;
                });


                currentForm.customError = errorMessage;
              } else {
                //TODO: reset form data
                // data = {};
              }

            case 43:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[12, 16, 20, 28], [21,, 23, 27]]);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return _react2.default.createElement(_Form2.default, { id: formId, children: fieldsWithProps, handleSubmit: handleSubmit, name: name, customError: customError });
};

Form.propTypes = {
  name: _propTypes2.default.string.isRequired
};

exports.default = (0, _lib.withLifecycle)(FormMethods)((0, _reactEasyState.view)(Form));