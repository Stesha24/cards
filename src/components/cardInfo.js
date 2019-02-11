import React from 'react';
import './cards.css';
import Rating from './rating.js';
import Tags from './tags';
import CardTitle from './title';
import Characteristic from './characteristic';
import Code from './code';
import Cost from './cost';


const CardInfo = (props) => {
    return <div class="card__description horizontal">
    <div class="card__description_short">
      <CardTitle value={props.value.title} />
      <Tags value={props.value.tags} />
    </div>
    <Characteristic value={props.value.characteristic} />
    <Rating value={props.value}/>
    <Code value={props.value.code} />
    <Cost cost={props.value.cost} valute={props.value.valute}/>
  </div>
}

export default CardInfo;