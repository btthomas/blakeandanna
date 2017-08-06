import React from 'react';

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    e && e.preventDefault();

    this.setState({
      isOpen: !this.state.isOpen
    });
  } 

  render() {
    const styleButton = this.state.isOpen ? {
      display: 'none',
      color: '#eee',
      verticalAlign: 'text-top',
      textDecoration: 'underline',
    } :
    {
      display: 'inline',
      color: '#eee',
      verticalAlign: 'text-top',
      textDecoration: 'underline',
    };

    const className = `nav ${this.state.isOpen ? 'open' : 'closed'}`;

    return (
      <div style={{display: 'inline-block', width: '15%', top: 0, verticalAlign: 'top', textDecoration: 'underline'}}>
        <a onClick={this.toggleMenu} style={styleButton}>
          menu
        </a>
        <nav className={className}>
          <a onClick={this.toggleMenu} style={{textDecoration: 'underline'}}>menu</a>
          {this.props.children}
        </nav>
      </div>
    )
  }
}

export default Burger;
