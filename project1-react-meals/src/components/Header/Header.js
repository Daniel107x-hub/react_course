import React from 'react';
import classes from './header.module.css';

function Header() {
  return (
    <section className={classes.header_container}>
        <div className={classes.title}>ReactMeals</div>
        <section className={classes.cart_container}>Cart</section>
    </section>
  )
}

export default Header