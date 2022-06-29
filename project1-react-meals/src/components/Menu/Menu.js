import React from 'react';
import Item from './Item';
import classes from './menu.module.css';

const items = [
    {
        id: 1,
        name: "Sushi",
        description: "Finest fish and veeggies",
        price: 22.99
    },
    {
        id: 2,
        name: "Sushi 2",
        description: "Finest fish and veeggies 2",
        price: 23.99
    },
    {
        id: 3,
        name: "Sushi 3",
        description: "Finest fish and veeggies 3",
        price: 24.99
    },
    {
        id: 4,
        name: "Sushi 4",
        description: "Finest fish and veeggies 4",
        price: 25.99
    },
    {
        id: 5,
        name: "Sushi 5",
        description: "Finest fish and veeggies 5",
        price: 26.99
    },
    {
        id: 6,
        name: "Sushi 6",
        description: "Finest fish and veeggies 6",
        price: 27.99
    }
]

function Menu() {
  return (
    <section className={classes.menu_container}>
        <div className={classes.list_container}>
            {
                items.map(item => {
                    return(
                        <Item id={item.id} name={item.name} description={item.description} price={item.price} />
                    )
                })
            }
        </div>
    </section>
  )
}

export default Menu;