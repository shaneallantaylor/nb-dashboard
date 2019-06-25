import React from 'react';

class ConfirmButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleCreateClick} className="create-field">{this.props.editMode ? 'Edit field' : 'Create field'}</button>
    )
  }
}

export default ConfirmButton