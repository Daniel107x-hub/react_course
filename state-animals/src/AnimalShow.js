import './AnimalShow.css';
import React, {useState} from "react";
import bird from './images/bird.svg';
import cat from './images/cat.svg';
import cow from './images/cow.svg';
import dog from './images/dog.svg';
import gator from './images/gator.svg';
import horse from './images/horse.svg';
import heart from './images/heart.svg';

const svgMap = {
  bird, cat, cow, dog, gator, horse
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks => clicks+1);
  }

  return <div className='animal-show' onClick={handleClick}>
    <img src={svgMap[type]} alt={type} className='animal'/>
    <img src={heart} alt="Heart" style={{ width: 10 + 10 * clicks + 'px'}} className='heart'/>
  </div>
}

export default AnimalShow;
