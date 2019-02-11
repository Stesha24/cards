import React from 'react';
import './cards.css'

const ProductPhoto = (props) => {
    return <div class="card__photo horizontal">
    <img src={props.value} class="card__photo_img" alt="Товар" />
  </div>;
}

export default ProductPhoto;