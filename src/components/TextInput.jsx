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

class TextInput extends React.Component {
render() {
  return (
    <div className="input-field-wrapper mt-5">
      <input 
      htmlType="text" 
      id={this.props.id} 
      name={this.props.id} 
      className="form-control ds-input col-xs-12 col-s-8 col-md-5" 
      value={this.props.label} 
      onChange={this.props.handleChange}/>
      <label htmlFor={this.props.id} className="required">{this.props.id}</label>
    </div>
  )
}
}

export default TextInput