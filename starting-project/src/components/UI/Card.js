import './Card.css';

function Card(props){
    const className = 'card ' + props.className;
    return(
        <div className={className}>
            {props.children}
        </div>
    )
}

/*
Todos los componentes de react reciben un atributo
aunque no se declare, este es el atributo props.children

children es una palabra reservada y el va;or de este prop sera el contenido entre los tags de apertura y cierre de donde se este usando este wrapper

<Wrapper>
    <div> ...children...</div>
</Wrapper>
*/


export default Card;