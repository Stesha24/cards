import React from 'react';
import './cards.css'

const Cost = (props) => {
    return <div class="card__cost">
    {props.cost} {props.valute}
</div>
}

export default Cost;