import React from 'react';
import './cards.css'

const Characteristic = (props) => {
    return <div class="card__characteristics">
    [{props.value}]
  </div>
}

export default Characteristic;