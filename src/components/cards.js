import React from 'react';
import Data from '../data/cards_descriptions.json';
import './cards.css'
import ProductPhoto from './productPhoto.js';
import CardInfo from './cardInfo.js';
import Buttons from './buttons.js';
import Availability from './availability.js';

class Card extends React.Component {

  

  getCards = () => {
    let cardArray = [];

    for (let i = 0; i < Data.length; i++) {
      cardArray.push(
        
          <div class="card-box">
            <div class="card">
              <ProductPhoto value={Data[i].photo} />
              <CardInfo value={Data[i]} />
              <Buttons />
              <Availability available={Data[i].available} delivery={Data[i].delivery}/>
            </div>
          </div>
      );
    }
    return cardArray;
  }

  render() {
    return (
      <div class="container">
        {this.getCards()}
      </div> 
    );
  }
}

export default Card;
