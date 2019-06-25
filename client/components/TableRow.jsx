import React from 'react';

import DropDownIcon from './DropDownIcon.jsx';

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
          <td className="edit-cell"><a href="#"><span className="edit" title="edit" onClick={this.props.handleEditClick.bind(this, rowProps)}>Edit</span></a></td>
          <td>{this.props.label}</td>
          <td>{this.props.slug}</td>
          <td>{this.props.fieldType}</td>
          <td className="delete-cell">
            <button onClick={this.toggleDeleteMenu} className="delete-carrot">
              <DropDownIcon />
              <ul className={`select-items delete-menu ${this.state.showDelete ? 'on' : ''}`} >
                <li data-option="text" onClick={this.props.handleDelectSelection}>Delete</li>
              </ul>
            </button>
          </td>
        </tr>
      </React.Fragment>
    )
  }
}

export default TableRow;