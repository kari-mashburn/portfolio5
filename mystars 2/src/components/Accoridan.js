import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Import the component to be reused below
import AccordionSection from './AccordianSection';

class Accordion extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);
    const openSections = {};
    this.state = { openSections };
  }
  //what the accordian does with its clicked
  onClick = label => {
    const {
      state: { openSections },
    } = this;
    const isOpen = !!openSections[label];
    this.setState({
      openSections: {
        [label]: !isOpen
      }
    });
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections },
    } = this;
    //Sets the FAQ page up with how it should look and how it functions
    return (
      <div style={{  }}>
        {children.map(child => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export default Accordion;
