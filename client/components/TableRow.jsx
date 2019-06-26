import React from 'react';

class TableRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showDelete: false }

    this.toggleDeleteMenu = this.toggleDeleteMenu.bind(this);
  }
  toggleDeleteMenu() {
    this.setState((prevState) => {
      return {
        showDelete: !prevState.showDelete
      }
    })
  }
  render() {
    let rowProps = this.props;
    return (
      <React.Fragment>
        <tr>
          <td className="edit-cell"><span className="edit" title="edit" onClick={this.props.handleEditClick.bind(this, rowProps)}>Edit</span></td>
          <td>{this.props.label}</td>
          <td>{this.props.slug}</td>
          <td className="field-type">{this.props.fieldType}</td>
          <td className="delete-cell">
            <button onClick={this.toggleDeleteMenu} className={`delete-carrot ${this.state.showDelete ? 'open' : ''}`}>
              <ul className={'select-items delete-menu'} >
                <li onClick={this.props.handleDeleteSelection.bind(this, rowProps)}>Delete</li>
              </ul>
            </button>
          </td>
        </tr>
      </React.Fragment>
    )
  }
}

export default TableRow;