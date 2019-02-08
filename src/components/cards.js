import React from 'react';

class Card extends React.Component {
  render() {
    return (
        <div class="card-box">
          <div class="card">
            <div class="card__photo horizontal">
              <img src="phone.jpg" class="card__photo_img" alt="Товар" />
            </div>
            <div class="card__description horizontal">
              <div class="card__description_short">
                <div class="card__title">
                    3.5" Смартфон AGmobile AG Zoom 4 ГБ черный
                </div>
                <div class="card__offer">
                    Лучшая цена
                </div>
              </div>
              <div class="card__characteristics">
                [4x1.4 ГГц, 2 ГБ, 2 SIM, IPS, 1440x720, камера 13 Мп, 3G, 4G, GPS, 3070 мАч]
              </div>
              <div class="card__rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <div class="code">
                Код:1119284
              </div>
              <div class="card__cost">
                  1999 &#8381;
              </div>
            </div>  
            <div class="buttons">
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
            <div class="card__avails">
              <div class="card__avails_shop">
                В наличии: 
                <a href="index.html"> в 2 магазинах</a>
              </div>
              <div class="card__avails_delivery">
                Доставим на дом: 
                <a href="index.html"> завтра</a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Card;
