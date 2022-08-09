import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props){
    // const month = props.date.toLocaleString('en-US', {month: 'long'});
    // const year = props.date.getFullYear();
    // const day = props.date.toLocaleString('en-US', {day :'2-digit'});
    //Cambios en los valores de esta variable se deben de reflejar en la UI, a diferencia de una variable comun

    return(
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                <h2>{props.title}</h2>
                <div className="expense_item__description">
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;