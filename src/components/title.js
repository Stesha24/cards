import React from 'react';
import './cards.css'

const CardTitle = (props) => {
    return <div class="card__title">
        {props.value}
    </div>
}

export default CardTitle;