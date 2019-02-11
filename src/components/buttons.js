import React from 'react';
import './cards.css'

const Buttons = () => {
    return <div class="buttons">
    <div class="card__buttons">
      <div class="buttons__buy-buttons">
        <button type="button" class="button__buy1click">Купить в 1 клик</button>
        <button type="button" class="button__buy"><i class="fas fa-shopping-cart"></i>
          Купить</button>
      </div>
      <div class="burger">
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>
    <div class="buttons__special">
      <div class="card__compare">
        <i class="fas fa-chart-bar"></i>
        <a href="index.html" class="hidden">Сравнить</a>
      </div>
      <div class="card__favour">
        <i class="far fa-heart"></i>
        <a href="index.html" class="hidden">Избранное</a>
      </div>
    </div>
  </div>
}

export default Buttons;

