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

const SelectInput = (props) => {
  const isMenuOpen = props.showMenu;
  const isFieldTypeSelected = props.fieldType.length !== 0;
  return (
    <div className="input-field-wrapper mt-5">
      <div className="field-type-select-container">
        <button
          type="button"
          className={`select-option ${isMenuOpen ? 'open' : ''} ${isFieldTypeSelected ? 'selected' : ''}`}
          onClick={props.toggleMenuOpen}
        >
          {isFieldTypeSelected ? props.fieldType : 'Select option'}
        </button>
        <ul className={`select-items ${isMenuOpen ? 'on' : ''}`}>
          <li data-option="text" onClick={e => props.handleFieldTypeSelection(e)}>Text</li>
          <li data-option="checkbox" onClick={e => props.handleFieldTypeSelection(e)}>Checkbox</li>
          <li data-option="multiple choice" onClick={e => props.handleFieldTypeSelection(e)}>Multiple Choice</li>
        </ul>
      </div>
      <label htmlFor="field-type" className="required">Field type</label>
    </div>
  );
};

export default SelectInput;
