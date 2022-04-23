import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 3.67,
    date: new Date(2022, 4, 21, 0, 0, 0, 0)
  },
  {
    id: 'e2',
    title: 'House Insurance',
    amount: 2.67,
    date: new Date(2022, 4, 3, 0, 0, 0, 0)
  },
  {
    id: 'e3',
    title: 'Health Insurance',
    amount: 1.67,
    date: new Date(2022, 4, 7, 0, 0, 0, 0)
  },
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) =>{
    setExpenses((prevState)=>{
      return [...prevState, expense];
    })
  }

  return (
    <div>
      <Expenses items={expenses}/>
      <NewExpense onAddExpense={addExpenseHandler}/>
    </div>
  );
}

export default App;
