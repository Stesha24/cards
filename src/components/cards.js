import React from 'react';
import Data from '../data/cards_descriptions.json';
import Styles from './cards.css'

class Card extends React.Component {

  getRating = (data) => {
    let rating = [];
    for (let i = 0; i < data.rating; i++) {
      rating.push(<i class="fas fa-star"></i>);
    }

    for (let i = 0; i < 5 - data.rating; i++) {
      rating.push(
        <i class="far fa-star"></i>
      );
    }
    return rating;
  }

  getTags = (data) => {
    let tags = [];

    for (let i = 0; i < data.tags.length; i++) {
      tags.push(
        <span class="card__offer_tag">
            {data.tags[i]}
        </span>
      );
    }
    return tags;
  }

  getCards = () => {
    let cardArray = [];

    for (let i = 0; i < Data.length; i++) {
      cardArray.push(
        <div class="card-box">
          <div class="card">
            <div class="card__photo horizontal">
              <img src={Data[i].photo} class="card__photo_img" alt="Товар" />
            </div>
            <div class="card__description horizontal">
              <div class="card__description_short">
                <div class="card__title">
                    {Data[i].title}
                </div>
                <div class="card__offer">
                  {this.getTags(Data[i])}
                </div>
              </div>
              <div class="card__characteristics">
                [{Data[i].characteristic}]
              </div>
              <div class="card__rating">
                {this.getRating(Data[i])}
              </div>
              <div class="code">
                Код:{Data[i].code}
              </div>
              <div class="card__cost">
                  {Data[i].cost} {Data[i].valute}
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
                <a href="index.html"> {Data[i].available}</a>
              </div>
              <div class="card__avails_delivery">
                Доставим на дом:
                <a href="index.html"> {Data[i].delivery}</a>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return cardArray;
  }

  render() {
    return (
      this.getCards()
    );
  }
}

export default Card;
