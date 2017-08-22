import React from 'react';
import ClickOutside from 'react-click-outside';

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleClickOutside() {
    this.setState({
      isOpen: false
    });
  }

  toggleMenu(e) {
    e && e.preventDefault();

    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      }
    });
  }

  render() {
    const styleButton = this.state.isOpen ? {
      display: 'none',
    } :
    {
      display: 'block',
    };

    const wrapperStyle = {
      display: 'inline-block',
      width: '15%',
      top: 0,
      verticalAlign: 'top',
    };

    const className = `nav ${this.state.isOpen ? 'open' : 'closed'}`;

    return (
      <div style={wrapperStyle}>
        <span id="nav-button" onClick={this.toggleMenu} style={styleButton}>
          ☰
        </span>
        <nav className={className} onClick={this.toggleMenu}>
          {this.props.children}
        </nav>
      </div>
    )
  }
}

export default ClickOutside(Burger);
