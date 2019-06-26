import React from 'react';

import ValuesTable from './components/ValuesTable.jsx';
import TextInput from './components/TextInput.jsx';
import SelectInput from './components/SelectInput.jsx';
import ConfirmButton from './components/ConfirmButton.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
      slug: '',
      fieldType: '',
      showMenu: false,
      editMode: false,
      listOfCustomFields: {
        nationslug: {
          label: 'Nation slugsss',
          slug: 'nationslug',
          fieldType: 'Text',
        },
        dns_provider: {
          label: 'DNS Providerreee',
          slug: 'dns_provider',
          fieldType: 'Text',
        },
        web_designer: {
          label: 'Web designertrer',
          slug: 'web_designer',
          fieldType: 'Checkbox',
        }
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.toggleMenuOpen = this.toggleMenuOpen.bind(this);
    this.handleFieldTypeSelection = this.handleFieldTypeSelection.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteSelection = this.handleDeleteSelection.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  toggleMenuOpen() {
    this.setState((prevState) => {
      return {
        showMenu: !prevState.showMenu
      }
    })
  }

  handleFieldTypeSelection(e) {
    this.setState(
      {
        fieldType: e.target.dataset.option,
        showMenu: false,
      }
    )
  }

  handleCreateClick() {
    const currentList = { ...this.state.listOfCustomFields };
    const currentSlug = this.state.slug;
    if (currentList[currentSlug]) {
      delete currentList[currentSlug];
    }
    const newListOfCustomFields = {
      [currentSlug]: {
        label: this.state.label,
        slug: this.state.slug,
        fieldType: this.state.fieldType,
      },
      ...currentList,
    }
    this.setState(
      {
        listOfCustomFields: newListOfCustomFields,
        label: '',
        slug: '',
        fieldType: '',
        editMode: false,
      }
    )
  }

  handleEditClick(rowProps) {
    this.setState({
      label: rowProps.label,
      slug: rowProps.slug,
      fieldType: rowProps.fieldType,
      editMode: true,
    })
  }

  handleDeleteSelection(rowProps) {
    const newListOfCustomFields = { ...this.state.listOfCustomFields };
    delete newListOfCustomFields[rowProps.slug];
    this.setState({
      listOfCustomFields: newListOfCustomFields
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="custom-field-inputs --px-30 mb-5">
          <TextInput
            id="label"
            label={this.state.label}
            handleChange={this.handleChange} />
          <TextInput
            id="slug"
            label={this.state.slug}
            handleChange={this.handleChange} />
          <SelectInput
            fieldType={this.state.fieldType}
            showMenu={this.state.showMenu}
            toggleMenuOpen={this.toggleMenuOpen}
            handleFieldTypeSelection={this.handleFieldTypeSelection} />
          <ConfirmButton
            editMode={this.state.editMode}
            handleCreateClick={this.handleCreateClick} />
        </div>
        <ValuesTable handleDeleteSelection={this.handleDeleteSelection} handleEditClick={this.handleEditClick} listOfCustomFields={this.state.listOfCustomFields} />
      </React.Fragment>
    )
  }
}

export default App;