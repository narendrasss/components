'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = require('prop-types');
var PropTypes__default = _interopDefault(PropTypes);
var React = require('react');
var React__default = _interopDefault(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ":root {\n  --white: #ffffff;\n  --black: #333333;\n  --vlight-gray: #f2f2f2;\n  --light-gray: #f7f7f7;\n  --med-gray: #e8e8e8;\n  --dark-gray: #888888;\n  --blue: #6152f6;\n  --light-blue: #f4f0ff;\n}\n";
styleInject(css);

var refPropType = PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.shape({ current: PropTypes__default.element })]);

function toVal(mix) {
	var k, y, str='';
	if (mix) {
		if (typeof mix === 'object') {
			if (!!mix.push) {
				for (k=0; k < mix.length; k++) {
					if (mix[k] && (y = toVal(mix[k]))) {
						str && (str += ' ');
						str += y;
					}
				}
			} else {
				for (k in mix) {
					if (mix[k] && (y = toVal(k))) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else if (typeof mix !== 'boolean' && !mix.call) {
			str && (str += ' ');
			str += mix;
		}
	}
	return str;
}

function clsx () {
	var i=0, x, str='';
	while (i < arguments.length) {
		if (x = toVal(arguments[i++])) {
			str && (str += ' ');
			str += x;
		}
	}
	return str;
}

var css$1 = ".input {\n  display: block;\n  width: 100%;\n  border: 0; }\n  .input:focus {\n    outline: none; }\n  .input ::placeholder {\n    color: var(--med-gray); }\n  .input :first-child {\n    margin-right: 1em; }\n  .input :last-child {\n    margin-left: 1em; }\n  .input :only-child {\n    margin: 0; }\n\n.input__container {\n  display: flex;\n  align-items: center;\n  padding: 0.8em 1.2em;\n  border: 1px solid var(--med-gray);\n  transition: 0.2s border ease-out;\n  cursor: text;\n  flex: 3; }\n  .input__container:hover, .input__container:focus-within {\n    border: 1px solid var(--blue);\n    border-radius: inherit;\n    outline: none; }\n  .input__container:first-child {\n    border-radius: 0.5rem 0 0 0.5rem; }\n  .input__container:last-child {\n    border-radius: 0 0.5rem 0.5rem 0; }\n  .input__container:only-child {\n    border-radius: 0.5rem;\n    width: 100%; }\n\n.input__icon {\n  color: var(--med-gray); }\n\n.input__prefix {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 0.8em;\n  padding-right: 0.8em;\n  background: var(--light-gray);\n  border: 1px solid var(--med-gray); }\n  .input__prefix:first-child {\n    border-radius: 0.5rem 0 0 0.5rem;\n    border-right: none; }\n  .input__prefix:last-child {\n    border-radius: 0 0.5rem 0.5rem 0;\n    border-left: none; }\n  .input__prefix:hover {\n    border: 1px solid var(--med-gray); }\n    .input__prefix:hover:first-child {\n      border-radius: 0.5rem 0 0 0.5rem;\n      border-right: none; }\n    .input__prefix:hover:last-child {\n      border-radius: 0 0.5rem 0.5rem 0;\n      border-left: none; }\n\n.input__wrapper {\n  display: flex; }\n";
styleInject(css$1);

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/* eslint-disable jsx-a11y/no-static-element-interactions */

function Input(props) {
  var inputEl = React.useRef(null);
  var className = props.className,
      before = props.before,
      after = props.after,
      prefix = props.prefix,
      suffix = props.suffix,
      inputRef = props.inputRef,
      inputProps = objectWithoutProperties(props, ['className', 'before', 'after', 'prefix', 'suffix', 'inputRef']);


  var attachRef = function attachRef(el) {
    inputEl.current = el;
    if (inputRef) {
      if (typeof inputRef === 'function') {
        inputRef(el);
      } else {
        inputRef.current = el;
      }
    }
  };

  return React__default.createElement(
    'div',
    { className: clsx('input__wrapper', className) },
    before && React__default.createElement(
      'div',
      { className: 'input__container input__prefix' },
      before
    ),
    React__default.createElement(
      'div',
      { className: 'input__container', onClick: function onClick() {
          return inputEl.current.focus();
        } },
      prefix && React__default.createElement(
        'span',
        { className: 'input__icon' },
        prefix
      ),
      React__default.createElement('input', _extends({ className: 'input' }, inputProps, { ref: attachRef })),
      suffix && React__default.createElement(
        'span',
        { className: 'input__icon' },
        suffix
      )
    ),
    after && React__default.createElement(
      'div',
      { className: 'input__container input__prefix' },
      after
    )
  );
}

Input.propTypes = {
  className: PropTypes.string,
  before: PropTypes.node,
  after: PropTypes.node,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  inputRef: refPropType
};

// TODO: Add suppport for uncontrolled component

function InputNumber(props) {
  var _useState = React.useState(false),
      _useState2 = slicedToArray(_useState, 2),
      hasFocus = _useState2[0],
      setHasFocus = _useState2[1];

  var formatter = props.formatter,
      rest = objectWithoutProperties(props, ['formatter']);
  var value = rest.value;

  if (!hasFocus) {
    return React__default.createElement(Input, _extends({}, rest, {
      onFocus: function onFocus() {
        return setHasFocus(true);
      },
      value: formatter(value),
      type: 'text'
    }));
  }
  return React__default.createElement(Input, _extends({}, rest, { onBlur: function onBlur() {
      return setHasFocus(false);
    }, type: 'number' }));
}

InputNumber.propTypes = {
  formatter: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.string
};

InputNumber.defaultProps = {
  formatter: function formatter(f) {
    return f;
  }
};

var index = React__default.forwardRef(function (props, ref) {
  return React__default.createElement(InputNumber, _extends({}, props, { ref: ref }));
});

/**
 * Currently the "uncontrolled" version of the component
 * is implemented by explicitly using useState (instead of
 * the browser managing the state) and passing the "checked"
 * prop onto the radio inputs.
 *
 * This is done so that I am able to style the wrapper depending
 * on if the box is checked or not (which is not possible purely
 * using CSS).
 *
 * TODO:
 * - Change implementation so useState is not needed.
 *  - This should improve accessibility.
 */

function Children(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);

  var _useState = React.useState(null),
      _useState2 = slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];
  // create controlled context


  if (props.value != null && props.onChange) {
    return React__default.Children.map(children, function (child) {
      return React__default.cloneElement(child, {
        checked: child.props.value === props.value,
        onChange: props.onChange,
        name: props.name
      });
    });
  }
  // uncontrolled component
  return React__default.Children.map(children, function (child) {
    return React__default.cloneElement(child, {
      checked: typeof value === 'string' && String(child.props.value) === value,
      onChange: function onChange(e) {
        setValue(e.target.value);
        if (props.onChange) props.onChange(e);
      },

      name: props.name
    });
  });
}

function Group(props) {
  return React__default.createElement(
    'div',
    { className: 'radio__group' },
    React__default.createElement(Children, props)
  );
}

/* eslint-disable jsx-a11y/label-has-for */

function Button(_ref) {
  var className = _ref.className,
      children = _ref.children,
      checked = _ref.checked,
      props = objectWithoutProperties(_ref, ['className', 'children', 'checked']);

  return React__default.createElement(
    'label',
    {
      className: clsx('radio__label', 'radio__button', className, {
        'radio__button--checked': checked
      })
    },
    React__default.createElement('input', _extends({ className: 'radio__input', type: 'radio' }, props)),
    children
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  checked: PropTypes.bool
};

Button.defaultProps = {
  className: '',
  checked: false
};

var css$2 = ".radio__label {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  cursor: pointer; }\n  .radio__label:hover {\n    color: var(--blue); }\n\n.radio__checkbox {\n  width: 1em;\n  height: 1em;\n  border: 1px solid var(--med-gray);\n  border-radius: 50%;\n  margin-right: 0.5em; }\n\n.radio__input {\n  visibility: hidden;\n  width: 0;\n  height: 0; }\n  .radio__input:checked ~ .radio__checkbox {\n    border: 1px solid var(--blue);\n    position: relative; }\n    .radio__input:checked ~ .radio__checkbox:after {\n      content: '';\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      width: 50%;\n      height: 50%;\n      background: var(--blue);\n      border-radius: 50%; }\n\n.radio__group {\n  display: flex; }\n\n.radio__button {\n  justify-content: center;\n  padding: 0.5em 1em;\n  border: 1px solid var(--med-gray);\n  border-right: none;\n  cursor: pointer;\n  position: relative; }\n  .radio__button:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    right: -1px;\n    top: -1px;\n    border: 1px solid var(--blue);\n    border-radius: inherit;\n    z-index: 10;\n    transition: 0.2s all ease-out;\n    opacity: 0; }\n  .radio__button:hover {\n    color: var(--blue); }\n  .radio__button:first-child {\n    border-radius: 0.5rem 0 0 0.5rem; }\n  .radio__button:last-child {\n    border-radius: 0 0.5rem 0.5rem 0;\n    border-left: 1px solid var(--med-gray);\n    border-right: 1px solid var(--med-gray); }\n\n.radio__button--checked {\n  position: relative;\n  color: var(--blue); }\n  .radio__button--checked:after {\n    opacity: 1; }\n";
styleInject(css$2);

/* eslint-disable jsx-a11y/label-has-for */

function BaseRadio(_ref) {
  var className = _ref.className,
      children = _ref.children,
      rest = objectWithoutProperties(_ref, ['className', 'children']);

  return React__default.createElement(
    'label',
    { className: clsx('radio__label', className) },
    React__default.createElement('input', _extends({ className: 'radio__input', type: 'radio' }, rest)),
    React__default.createElement('div', { className: 'radio__checkbox' }),
    children
  );
}

BaseRadio.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

BaseRadio.defaultProps = {
  className: ''
};

var Radio = React__default.forwardRef(function (props, ref) {
  return React__default.createElement(BaseRadio, _extends({}, props, { ref: ref }));
});

Radio.Group = Group;
Radio.Button = Button;

var FormContext = React.createContext();

function useFormContext() {
  var context = React.useContext(FormContext);
  if (!context) throw new Error('Form elements must be used within a form component');
  return context;
}

var css$3 = ".form > * {\n  margin-bottom: 1em; }\n\n.form__field {\n  display: flex;\n  flex: 1; }\n\n.form__field--vertical {\n  flex-direction: column; }\n  .form__field--vertical > *:first-child {\n    margin-bottom: 1em; }\n\n.form__field--horizontal {\n  flex-direction: row;\n  align-items: center;\n  justify-content: stretch; }\n  .form__field--horizontal > *:first-child {\n    margin-right: 1em;\n    flex: 1; }\n  .form__field--horizontal > *:nth-child(2) {\n    flex: 3; }\n\n.form__field__label {\n  text-transform: capitalize; }\n";
styleInject(css$3);

function Field(props) {
  var label = props.label,
      children = props.children;

  var layout = useFormContext();
  var labelName = label.replace(' ', '-');
  return React__default.createElement(
    'div',
    { className: clsx('form__field', 'form__field--' + layout) },
    React__default.createElement(
      'label',
      { className: 'form__field__label', htmlFor: labelName },
      label
    ),
    React__default.Children.map(React__default.Children.only(children), function (child) {
      return React__default.cloneElement(child, { id: labelName, name: labelName });
    })
  );
}

Field.propTypes = {
  children: PropTypes__default.node.isRequired,
  label: PropTypes__default.string.isRequired
};

function Form(_ref) {
  var children = _ref.children,
      layout = _ref.layout,
      onSubmit = _ref.onSubmit;

  return React__default.createElement(
    'form',
    { className: 'form', onSubmit: onSubmit },
    React__default.createElement(
      FormContext.Provider,
      { value: layout === 'inline' ? 'horizontal' : layout },
      children
    )
  );
}

Form.Field = Field;

Form.propTypes = {
  children: PropTypes__default.node.isRequired,
  layout: PropTypes__default.oneOf(['vertical', 'horizontal', 'inline']),
  onSubmit: PropTypes__default.func
};

Form.defaultProps = {
  layout: 'vertical',
  onSubmit: function onSubmit(f) {
    return f;
  }
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && React.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return React.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var computedSize = props.size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;

    var attr = props.attr,
        title = props.title,
        svgProps = __rest(props, ["attr", "title"]);

    return React.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign({
        color: props.color || conf.color
      }, conf.style, props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
var MdKeyboardArrowDown = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}}]})(props);
};
MdKeyboardArrowDown.displayName = "MdKeyboardArrowDown";
var MdKeyboardArrowUp = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}}]})(props);
};
MdKeyboardArrowUp.displayName = "MdKeyboardArrowUp";

var SelectContext = React.createContext();

function useSelectContext() {
  var context = React.useContext(SelectContext);
  if (!context) throw new Error('Option elements must be used within a select component');
  return context;
}

/*
State shape:
{
  selectedValue: string,
  searchValue: string,
  showDropdown: bool
}
*/

var types = {
  UPDATE_SEARCH: 'UPDATE_SEARCH',
  OPEN_DROPDOWN: 'OPEN_DROPDOWN',
  CLOSE_DROPDOWN: 'CLOSE_DROPDOWN',
  TOGGLE_DROPDOWN: 'TOGGLE_DROPDOWN',
  SELECT: 'SELECT'
};

var actions = {
  updateSearch: function updateSearch(value) {
    return { type: types.UPDATE_SEARCH, payload: value };
  },
  openDropdown: function openDropdown() {
    return { type: types.OPEN_DROPDOWN };
  },
  closeDropdown: function closeDropdown() {
    return { type: types.CLOSE_DROPDOWN };
  },
  toggleDropdown: function toggleDropdown() {
    return { type: types.TOGGLE_DROPDOWN };
  },
  select: function select(value) {
    return { type: types.SELECT, payload: value };
  }
};

function reducer(state, action) {
  switch (action.type) {
    case types.UPDATE_SEARCH:
      return _extends({}, state, {
        searchValue: action.payload
      });
    case types.OPEN_DROPDOWN:
      return _extends({}, state, {
        searchValue: '',
        showDropdown: true
      });
    case types.CLOSE_DROPDOWN:
      return _extends({}, state, {
        showDropdown: false
      });
    case types.TOGGLE_DROPDOWN:
      return _extends({}, state, {
        showDropdown: !state.showDropdown
      });
    case types.SELECT:
      return _extends({}, state, {
        searchValue: action.payload,
        selectedValue: action.payload,
        showDropdown: false
      });
    default:
      return state;
  }
}

var css$4 = ".select__input {\n  cursor: pointer;\n  text-transform: capitalize; }\n  .select__input ::placeholder {\n    text-transform: capitalize; }\n\n.select__button {\n  width: 100%;\n  padding: 0.8em 1.2em;\n  border: 1px solid var(--med-gray);\n  border-radius: 0.5rem;\n  transition: 0.2s border ease-out;\n  cursor: pointer;\n  color: var(--black);\n  text-align: left;\n  text-transform: capitalize; }\n  .select__button:hover, .select__button:focus {\n    border: 1px solid var(--blue);\n    border-radius: 0.5rem; }\n  .select__button:focus {\n    outline: none; }\n\n.select__dropdown {\n  margin-top: 0.5em;\n  border-radius: 0.5rem;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16); }\n\n.select__option {\n  width: 100%;\n  padding: 0.8em 1.2em;\n  border: none;\n  background: white;\n  cursor: pointer;\n  color: var(--black);\n  font-weight: 400;\n  text-align: left; }\n  .select__option:first-child {\n    border-radius: 0.5rem 0.5rem 0 0; }\n  .select__option:last-child {\n    border-radius: 0 0 0.5rem 0.5rem; }\n  .select__option:focus {\n    outline: none; }\n  .select__option:hover {\n    background: var(--light-blue); }\n\n.select__option--selected {\n  font-weight: 500; }\n";
styleInject(css$4);

function Option(_ref) {
  var value = _ref.value,
      children = _ref.children;

  var _useSelectContext = useSelectContext(),
      dispatch = _useSelectContext.dispatch,
      selectedValue = _useSelectContext.selectedValue,
      onChange = _useSelectContext.onChange;

  var changeHandler = function changeHandler(evt) {
    evt.preventDefault();
    evt.persist();
    dispatch(actions.select(evt.target.value));
    onChange(evt);
  };

  var selected = value === selectedValue;
  return React__default.createElement(
    'button',
    {
      className: clsx('select__option', {
        'select__option--selected': selected
      }),
      type: 'button',
      onClick: changeHandler,
      value: value
    },
    children
  );
}

Option.propTypes = {
  value: PropTypes__default.string.isRequired,
  children: PropTypes__default.node.isRequired
};

function Select(props) {
  var blurTimeout = React.useRef(null);

  var value = props.value,
      defaultValue = props.defaultValue;

  var initialState = {
    selectedValue: value || defaultValue || undefined,
    searchValue: value || defaultValue || '',
    showDropdown: false
  };

  var _useReducer = React.useReducer(reducer, initialState),
      _useReducer2 = slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var hasSearch = props.hasSearch,
      placeholder = props.placeholder,
      searchFn = props.searchFn,
      onChange = props.onChange,
      children = props.children;
  var selectedValue = state.selectedValue,
      searchValue = state.searchValue,
      showDropdown = state.showDropdown;

  var displayPlaceholder = selectedValue || placeholder;

  var values = React__default.Children.toArray(children).map(function (child) {
    return child.props.value;
  });
  var suggestions = React__default.Children.toArray(children).filter(function (child) {
    return hasSearch ? searchFn(searchValue, child.props.value) : true;
  });

  var blurHandler = function blurHandler() {
    if (blurTimeout.current) clearTimeout(blurTimeout.current);
    blurTimeout.current = setTimeout(function () {
      if (searchValue.length && !values.includes(searchValue)) {
        var selected = suggestions.length ? suggestions[0].props.value : value;
        return dispatch(actions.select(selected));
      }
      return dispatch(actions.closeDropdown());
    }, 10);
  };

  return React__default.createElement(
    SelectContext.Provider,
    { value: { selectedValue: selectedValue, onChange: onChange, dispatch: dispatch } },
    hasSearch ? React__default.createElement(Input, {
      className: 'select__input',
      onFocus: function onFocus() {
        return dispatch(actions.openDropdown());
      },
      onBlur: blurHandler,
      onChange: function onChange(e) {
        return dispatch(actions.updateSearch(e.target.value));
      },
      value: searchValue,
      placeholder: displayPlaceholder,
      suffix: showDropdown ? React__default.createElement(MdKeyboardArrowUp, { size: '1.5em' }) : React__default.createElement(MdKeyboardArrowDown, { size: '1.5em' }),
      'data-testid': 'input'
    }) : React__default.createElement(
      'button',
      {
        className: 'select__button',
        type: 'button',
        onClick: function onClick() {
          return dispatch(actions.toggleDropdown());
        },
        'data-testid': 'button'
      },
      displayPlaceholder
    ),
    showDropdown ? React__default.createElement(
      'div',
      { className: 'select__dropdown', 'data-testid': 'dropdown' },
      suggestions
    ) : null
  );
}

Select.Option = Option;

Select.propTypes = {
  children: PropTypes__default.node,
  onChange: PropTypes__default.func,
  value: PropTypes__default.string,
  hasSearch: PropTypes__default.bool,
  searchFn: PropTypes__default.func,
  placeholder: PropTypes__default.string,
  defaultValue: PropTypes__default.string
};

Select.defaultProps = {
  onChange: function onChange(f) {
    return f;
  },
  hasSearch: false,
  searchFn: function searchFn(value, option) {
    return RegExp('' + value, 'i').test(option);
  },
  placeholder: 'Select an option'
};

exports.Input = Input;
exports.InputNumber = index;
exports.Radio = Radio;
exports.Form = Form;
exports.Select = Select;
//# sourceMappingURL=index.js.map
