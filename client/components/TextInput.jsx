import React from 'react';

class TextInput extends React.Component {

  render() {
    return (
      <div className="input-field-wrapper mt-5">
        <input
          type="text"
          id={this.props.id}
          name={this.props.id}
          className="form-control ds-input col-xs-12 col-s-8 col-md-6"
          value={this.props.label}
          onChange={(e) => this.props.handleChange(e)} />
        <label htmlFor={this.props.id} className={this.props.id === 'label' ? 'optional' : 'required'} >{this.props.id}</label>
        {this.props.id === 'slug' ? <aside>Choose carefully, for data integrity reasons, this cannot be changed later.</aside> : ''}
      </div>
    )
  }
}

export default TextInput