/**
 * ************************************
 *
 * @module  SelectInput
 * @author  shaneallantaylor
 * @date    6/26/19
 * @description A custom list element that replaces the semantic
 * Select and Option HTML elements.
 *
 * ************************************
 */

import React from 'react';

class SelectInput extends React.Component {
  render() {
    const isMenuOpen = this.props.showMenu;
    const isFieldTypeSelected = this.props.fieldType.length !== 0;
    return (
      <div className="input-field-wrapper mt-5">
        <div className="field-type-select-container">
          <button
            type="button"
            className={`select-option ${isMenuOpen ? 'open' : ''} ${isFieldTypeSelected ? 'selected' : ''}`}
            onClick={this.props.toggleMenuOpen}
          >
            {isFieldTypeSelected ? this.props.fieldType : 'Select option'}
          </button>
          <ul className={`select-items ${isMenuOpen ? 'on' : ''}`}>
            <li data-option="text" onClick={e => this.props.handleFieldTypeSelection(e)}>Text</li>
            <li data-option="checkbox" onClick={e => this.props.handleFieldTypeSelection(e)}>Checkbox</li>
            <li data-option="multiple choice" onClick={e => this.props.handleFieldTypeSelection(e)}>Multiple Choice</li>
          </ul>
        </div>
        <label htmlFor="field-type" className="required">Field type</label>
      </div>
    );
  }
}

export default SelectInput;
