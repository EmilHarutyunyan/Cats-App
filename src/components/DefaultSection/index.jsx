import React from 'react'
import PropTypes from 'prop-types';
// Styles
import {Section} from "./DefaultSection.styles";

const DefaultSection = ({children}) => {
  return (
    <Section>
      {children}
    </Section>
  )
}
DefaultSection.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultSection