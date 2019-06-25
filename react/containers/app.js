var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextInput = function (_React$Component) {
  _inherits(TextInput, _React$Component);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "input-field-wrapper mt-5" },
        React.createElement("input", {
          type: "text",
          id: this.props.id,
          name: this.props.id,
          className: "form-control ds-input col-xs-12 col-s-8 col-md-5",
          value: this.props.label,
          onChange: function onChange(e) {
            return _this2.props.handleChange(e);
          } }),
        React.createElement(
          "label",
          { htmlFor: this.props.id, className: "required" },
          this.props.id
        )
      );
    }
  }]);

  return TextInput;
}(React.Component);

var SelectInput = function (_React$Component2) {
  _inherits(SelectInput, _React$Component2);

  function SelectInput() {
    _classCallCheck(this, SelectInput);

    return _possibleConstructorReturn(this, (SelectInput.__proto__ || Object.getPrototypeOf(SelectInput)).apply(this, arguments));
  }

  _createClass(SelectInput, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "input-field-wrapper mt-5" },
        React.createElement(
          "div",
          { className: "field-type-select-container" },
          React.createElement(
            "button",
            { className: "select-option" },
            "Select option"
          ),
          React.createElement(
            "ul",
            { className: "select-items" },
            React.createElement(
              "li",
              null,
              "Text"
            ),
            React.createElement(
              "li",
              null,
              "Checkbox"
            ),
            React.createElement(
              "li",
              null,
              "Multiple choice"
            )
          )
        ),
        React.createElement(
          "label",
          { htmlFor: "field-type", className: "required" },
          "Field type"
        )
      );
    }
  }]);

  return SelectInput;
}(React.Component);

var ConfirmButton = function (_React$Component3) {
  _inherits(ConfirmButton, _React$Component3);

  function ConfirmButton() {
    _classCallCheck(this, ConfirmButton);

    return _possibleConstructorReturn(this, (ConfirmButton.__proto__ || Object.getPrototypeOf(ConfirmButton)).apply(this, arguments));
  }

  _createClass(ConfirmButton, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { className: "create-field" },
        "Create field"
      );
    }
  }]);

  return ConfirmButton;
}(React.Component);

var InputContainer = function (_React$Component4) {
  _inherits(InputContainer, _React$Component4);

  function InputContainer(props) {
    _classCallCheck(this, InputContainer);

    var _this5 = _possibleConstructorReturn(this, (InputContainer.__proto__ || Object.getPrototypeOf(InputContainer)).call(this, props));

    _this5.state = {
      label: '',
      slug: '',
      fieldType: ''
    };
    _this5.handleChange = _this5.handleChange.bind(_this5);
    return _this5;
  }

  _createClass(InputContainer, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.id, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "custom-field-inputs mb-5" },
        React.createElement(TextInput, {
          id: "label",
          label: this.state.label,
          handleChange: this.handleChange }),
        React.createElement(TextInput, {
          id: "slug",
          label: this.state.slug,
          handleChange: this.handleChange }),
        React.createElement(SelectInput, null),
        React.createElement(ConfirmButton, null)
      );
    }
  }]);

  return InputContainer;
}(React.Component);

ReactDOM.render(React.createElement(InputContainer, null), document.getElementById('input-container'));