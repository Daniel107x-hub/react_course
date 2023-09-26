import React, { useReducer } from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_VALUE = "add-value-to-add";

const reducer = (state, action) => {
    switch(action.type){
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case ADD_VALUE:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        default:
            return state
    }
}

function CounterPage({initialCount}) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        });
    }

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        })
    }

    const handleChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_VALUE
        })
    }

    return (
        <Panel className="m-3">
            <h1 className='text-lg'>Count is {state.count}</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="add">Add a lot</label>
                <input type="number" name="add" id="add"  className='p-1 m-3 bg-gray-50 border border-gray-300' onChange={handleChange} value={state.valueToAdd || ''} placeholder='Type a number'/>
                <Button>Add it</Button>
            </form>
        </Panel>
    )
}

export default CounterPage