import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    const [isEditing, setIsEditing] = useState(false);
    
    const saveExpenseHandler = (expense) =>{
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        };
        setIsEditing(false);
        props.onAddExpense(expenseData);
    }

    const startEditingHandler = () =>{
        setIsEditing(true);
    }

    const stopEditingHandler = () =>{
        setIsEditing(false);
    }
    
    let expenseFormContent = <button onClick={startEditingHandler}>Add new expense</button>;
    if(isEditing){
        expenseFormContent = <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={stopEditingHandler}/>;
    }

    return(
        <div className='new-expense'>
            {expenseFormContent}
        </div>
    )
};

export default NewExpense;