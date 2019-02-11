import React from 'react';
import './cards.css'

let getRating = (data) => {
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

const Rating = (props) => {
    return <div class="card__rating">
    {getRating(props.value)}
  </div>
}

export default Rating;