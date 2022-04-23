import {useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props){
    const [filteredYear,setFilteredYear] = useState('2020');

    const filterChangedHandler = (year) =>{
        setFilteredYear(year);
    }

    const filteredExpenses = props.items && props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return(
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangedFilter={filterChangedHandler}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;