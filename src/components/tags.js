import React from 'react';
import './cards.css';

let getTags = (data) => {
    let tags = [];

    for (let i = 0; i < data.length; i++) {
      tags.push(
        <span class="card__offer_tag">
            {data[i]}
        </span>
      );
    }
    return tags;
  }

  const Tags = (props) => {
    return <div class="card__offer">
    {getTags(props.value)}
  </div>
  }

  export default Tags;