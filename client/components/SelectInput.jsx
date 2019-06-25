import React from 'react';

class SelectInput extends React.Component {
  render() {
    return (
      <div className="input-field-wrapper mt-5">
        <div className="field-type-select-container">
          <button className="select-option" onClick={this.props.toggleMenuOpen}>{this.props.fieldType.length ? this.props.fieldType : 'Select option'}</button>
          <ul className={`select-items ${this.props.showMenu ? 'on' : ''}`} >
            <li data-option="text" onClick={(e) => this.props.handleFieldTypeSelection(e)}>Text</li>
            <li data-option="checkbox" onClick={(e) => this.props.handleFieldTypeSelection(e)}>Checkbox</li>
            <li data-option="multiple choice" onClick={(e) => this.props.handleFieldTypeSelection(e)}>Multiple Choice</li>
          </ul>
        </div>
        <label htmlFor="field-type" className="required">Field type</label>
      </div>
    )
  }
}

export default SelectInput