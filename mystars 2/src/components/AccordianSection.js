import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      //The style for the accordian
      <div
        style={{
          background: isOpen ? '#44008B' : '#9F45B0',
          border: '1px solid #000761',
          padding: '5px 10px',
          marginLeft: '25px',
          marginRight: '25px',
          fontWeight: 'bold',
          fontSize: '1em',
        }}>
        {/* Checking if it is opened and how it should look */}
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
          {label}
          <div style={{ float: 'right' }}>
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </div>
        </div>
        {/* when the accordian is open style it this way */}
        {isOpen && (
          <div
            style={{
              background: '#000761',
              border: '2px solid #44008B',
              marginTop: 10,
              padding: '10px 20px',
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;