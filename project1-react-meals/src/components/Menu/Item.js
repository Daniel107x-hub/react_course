import React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import classes from './item.module.css';

const Item = (props) => {
  return (
    <span className={classes.item_container}>
        <section className={classes.details}>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.description}><i>{props.description}</i></div>
            <div className={classes.price}>${props.price}</div>
        </section>
        <section className={classes.controls}>
            <div className={classes.amount_control}>
              <Input type="number" name="Amount"/>
            </div>
            <Button text="+ Add"/>
        </section>
    </span>
  )
}

export default Item