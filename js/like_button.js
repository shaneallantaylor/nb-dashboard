'use strict';

class Hello extends React.Component {
  render() {
    return React.createElement('button', null, `Like has been clicked ${this.props.likes}`);
  }
}

ReactDOM.render(
  React.createElement(Hello, { likes: 'Shane' }, null),
  document.getElementById('like_button_container')
);