class TextInput extends React.Component {
  render() {
    return (
      <div className="input-field-wrapper mt-5">
        <input 
        type="text" 
        id={this.props.id} 
        name={this.props.id} 
        className="form-control ds-input col-xs-12 col-s-8 col-md-5" 
        value={this.props.label} 
        onChange={(e) => this.props.handleChange(e)}/>
        <label htmlFor={this.props.id} className="required">{this.props.id}</label>
      </div>
    )
  }
}

class SelectInput extends React.Component {
  render() {
    return (
      <div className="input-field-wrapper mt-5">
        <div className="field-type-select-container">
          <button className="select-option">Select option</button>
          <ul className="select-items">
            <li>Text</li>
            <li>Checkbox</li>
            <li>Multiple choice</li>
          </ul>
        </div>
        <label htmlFor="field-type" className="required">Field type</label>
      </div>
    )
  }
}

class ConfirmButton extends React.Component {
  render() {
    return (
      <button className="create-field">Create field</button>
    )
  }
}



class InputContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
      slug: '',
      fieldType: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  render() {
    return (
      <div className="custom-field-inputs mb-5">
        <TextInput 
        id="label" 
        label={this.state.label} 
        handleChange={this.handleChange}/>
        <TextInput 
        id="slug" 
        label={this.state.slug} 
        handleChange={this.handleChange}/>
        <SelectInput />
        <ConfirmButton />
      </div>
    )
  }
}

ReactDOM.render(
  <InputContainer />,
  document.getElementById('input-container')
);