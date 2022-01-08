import React from 'react'
import PropTypes from 'prop-types';
// Styles
import {Article, Content, Image} from "./Thumb.styles"
const Thumbs = ({image, alt}) => {
  return (
    <Article>
      <Content>
        <Image src={image} alt={alt}/>
      </Content>
    </Article>
  )
}
Thumbs.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
export default Thumbs