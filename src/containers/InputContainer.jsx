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


import TextInput from '././../components/TextInput.js';
// import SelectInput from './../components/SelectInput.jsx';
// import ConfirmButton from './../components/ConfirmButton.jsx';

class InputContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
      slug: '',
      fieldType: '',
    }
  }

  handleChange(e) {
    this.setState((prevState) => {label: prevState.label + e.target.value})
  }

  render() {
    return (
      <div className="custom-field-inputs mb-5">
        <TextInput 
        id="label" 
        label={this.state.label} 
        handleChange={this.handleChange}/>
        <TextInput />
        {/* <SelectInput /> */}
        {/* <ConfirmButton /> */}
      </div>
    )
  }
}

ReactDOM.render(
  <InputContainer />,
  document.getElementById('input-container')
);