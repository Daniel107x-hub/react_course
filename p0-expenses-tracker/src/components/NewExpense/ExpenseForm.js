import './ExpenseForm.css'
import {useState} from 'react';

const ExpenseForm = (props) =>{
    //Can have multiple state objects or single state with one object inside
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //     title:'',
    //     amount:'',
    //     date:''
    // });

    const titleChangedHandler = (e) =>{
        e.preventDefault();
        setTitle(e.target.value);

        /*
        This is a wrong way to show a dependency on a previous state
        setUserInput({
            ...userInput, //Use of spread operator to get the previous values and just replace one explicitly
            title: e.target.value
        });
        */

        //React schedules state updates, in this case react guarantees that the prev state is the latest state
        //State updates that depend on previous state shopuld be done in this way
        // setUserInput((prevState)=>{ 
        //     return {
        //         ...prevState,
        //         title: e.target.value
        //     };
        // })
    }

    const amountChangedHandler = (e) =>{
        e.preventDefault();
        setAmount(e.target.value);

        // setUserInput((prevState)=>{
        //     return {
        //     ...userInput,
        //     amount: e.target.value
        //     };
        // })
    }

    const dateChangedHandler = (e) =>{
        e.preventDefault();
        setDate(e.target.value);

        // setUserInput((prevState)=>{
        //     return{
        //     ...userInput,
        //     date: e.target.value
        //     }
        // });
    }

    const submitHandler = (e) =>{
        e.preventDefault(); //Avoid default behavior, page will not reload
        const expenseData = {
            title,
            amount,
            date: new Date(`${date}T05:00:00Z`)
        };
        props.onSaveExpense(expenseData);
    }

    return(
        <form action="" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="Title">Title</label>
                    <input type="text" onChange={titleChangedHandler} value={title}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="Amount">Amount</label>
                    <input type="number" min={0.01} step={0.01} onChange={amountChangedHandler} value={amount}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="Date">Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangedHandler} value={date}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;