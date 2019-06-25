var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ************************************
 *
 * @module  InputContainer
 * @author Shane Taylor
 * @date 6/24/19
 * @description stateful component that renders TextInput, SelectInput, and ConfirmButton components
 *
 * ************************************
 */

import TextInput from '././../components/TextInput.js'
// import SelectInput from './../components/SelectInput.jsx';
// import ConfirmButton from './../components/ConfirmButton.jsx';

var InputContainer = function (_React$Component) {
  _inherits(InputContainer, _React$Component);

  function InputContainer(props) {
    _classCallCheck(this, InputContainer);

    var _this = _possibleConstructorReturn(this, (InputContainer.__proto__ || Object.getPrototypeOf(InputContainer)).call(this, props));

    _this.state = {
      label: '',
      slug: '',
      fieldType: ''
    };
    return _this;
  }

  _createClass(InputContainer, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState(function (prevState) {
        label: prevState.label + e.target.value;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'custom-field-inputs mb-5' },
        React.createElement(TextInput, {
          id: 'label',
          label: this.state.label,
          handleChange: this.handleChange }),
        React.createElement(TextInput, null)
      );
    }
  }]);

  return InputContainer;
}(React.Component);

ReactDOM.render(React.createElement(InputContainer, null), document.getElementById('input-container'));