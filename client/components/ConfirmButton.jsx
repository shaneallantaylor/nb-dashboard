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

class ConfirmButton extends React.Component {
  render() {
    return (
      <button
        type="button"
        disabled={!(this.props.slug.length > 0 && this.props.fieldType.length > 0)}
        onClick={this.props.handleCreateClick}
        className={`create-field ${(this.props.slug.length > 0 && this.props.fieldType.length > 0) ? '' : 'disabled'}`}
      >
        {this.props.editMode ? 'Edit field' : 'Create field'}
      </button>
    );
  }
}

export default ConfirmButton;
