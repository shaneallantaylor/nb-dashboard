/**
 * ************************************
 *
 * @module  TextInput
 * @author  shaneallantaylor
 * @date    6/26/19
 * @description A simple form-free input element to capture
 * user-written text. Will be readOnly if the user is in Edit Mode
 * and the TextInput element has the property id of 'slug'
 * (the slug data is not editable after creation)
 *
 * ************************************
 */

import React from 'react';

class TextInput extends React.PureComponent {
  render() {
    return (
      <div className="input-field-wrapper mt-5">
        <input
          readOnly={this.props.editMode && this.props.id === 'slug'}
          type="text"
          id={this.props.id}
          name={this.props.id}
          className="form-control ds-input col-xs-12 col-s-8 col-md-6"
          value={this.props.label}
          onChange={e => this.props.handleChange(e)}
        />
        <label htmlFor={this.props.id} className={this.props.id === 'label' ? 'optional' : 'required'}>{this.props.id}</label>
        {this.props.id === 'slug' ? <aside>Choose carefully, for data integrity reasons, this cannot be changed later.</aside> : ''}
      </div>
    );
  }
}

export default TextInput;
