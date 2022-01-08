import React from 'react'
import PropTypes from "prop-types"
// Styles
import {Content, Btn} from "./Button.styles"
const Button = ({handleMore, text}) => {

  return (
    <Content>
      <Btn onClick={handleMore}>{text}</Btn>
    </Content>
  )
}
Button.propTypes = {
    handleMore: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}
export default Button