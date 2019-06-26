import React from 'react';

import TableRow from './TableRow.jsx';

class ValuesTable extends React.Component {

  render() {

    // we will have an array of objects that represent the custom fields currently in the system.
    // each object has all the data for each custom field - label, slug, and field type
    // we need to iterate through the array and build the table according to this prop.
    const tableRows = Object.values(this.props.listOfCustomFields).map(object => {
      return <TableRow
        handleEditClick={this.props.handleEditClick}
        handleDeleteSelection={this.props.handleDeleteSelection}
        label={object.label}
        slug={object.slug}
        fieldType={object.fieldType}
        key={object.slug} />
    })

    return (
      <div className="table-responsive-md --overflow-visible">
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th scope="col">Name</th>
              <th scope="col">Slug</th>
              <th scope="col">Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ValuesTable;