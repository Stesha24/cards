import React from 'react';
import './cards.css'

const Availability = (props) => {
    return <div class="card__avails">
    <div class="card__avails_shop">
      В наличии:
      <a href="index.html"> {props.available}</a>
    </div>
    <div class="card__avails_delivery">
      Доставим на дом:
      <a href="index.html"> {props.delivery}</a>
    </div>
  </div>
}

export default Availability;