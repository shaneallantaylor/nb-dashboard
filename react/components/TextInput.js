var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ************************************
 *
 * @module  TextInput
 * @author Shane Taylor
 * @date 6/24/19
 * @description component to capture and display text input fields for our app
 *
 * ************************************
 */

var TextInput = function (_React$Component) {
  _inherits(TextInput, _React$Component);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "input-field-wrapper mt-5" },
        React.createElement("input", {
          htmlType: "text",
          id: this.props.id,
          name: this.props.id,
          className: "form-control ds-input col-xs-12 col-s-8 col-md-5",
          value: this.props.label,
          onChange: this.props.handleChange }),
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

export default TextInput;