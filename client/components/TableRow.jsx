/**
 * ************************************
 *
 * @module  TableRow
 * @author  shaneallantaylor
 * @date    6/26/19
 * @description A row component designed to be used as a child of the
 * ValuesTable component. This component is home to the data being displayed
 * and provides interfaces for 'Edit' and 'Delete' actions for users
 *
 * ************************************
 */

import React from 'react';

class TableRow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { showDelete: false };

    this.toggleDeleteMenu = this.toggleDeleteMenu.bind(this);
  }

  toggleDeleteMenu() {
    this.setState(prevState => ({
      showDelete: !prevState.showDelete,
    }));
  }

  render() {
    const rowProps = this.props;
    return (
      <React.Fragment>
        <tr>
          <td className="edit-cell">
            <span
              className="edit"
              title="edit"
              onClick={this.props.handleEditClick.bind(this, rowProps)}
            >
              Edit
            </span>
          </td>
          <td>{this.props.label}</td>
          <td>{this.props.slug}</td>
          <td className="field-type">{this.props.fieldType}</td>
          <td className="delete-cell">
            <button onClick={this.toggleDeleteMenu} className={`delete-carrot ${this.state.showDelete ? 'open' : ''}`}>
              <ul className="select-items delete-menu">
                <li onClick={this.props.handleDeleteSelection.bind(this, rowProps)}>Delete</li>
              </ul>
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default TableRow;
