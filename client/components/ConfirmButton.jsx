/**
 * ************************************
 *
 * @module  ConfirmButton
 * @author  shaneallantaylor
 * @date    6/26/19
 * @description A button for confirming both the 'Create Field'
 * action and the 'Edit Field' action. The button will be disabled
 * when the required fields are not filled out.
 *
 * ************************************
 */

import React from 'react';

const ConfirmButton = props => (
  <button
    type="button"
    disabled={!(props.slug.length > 0 && props.fieldType.length > 0)}
    onClick={props.handleCreateClick}
    className={`create-field ${(props.slug.length > 0 && props.fieldType.length > 0) ? '' : 'disabled'}`}
  >
    {props.editMode ? 'Edit field' : 'Create field'}
  </button>
);

export default ConfirmButton;
