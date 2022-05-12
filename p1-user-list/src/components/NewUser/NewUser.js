import {useState} from 'react';
import './NewUser.css';
import Button from '../UI/Button';
import Card from "../UI/Card";

const NewUser = (props) =>{
    const [age, setAge] = useState(10);
    const [name, setName] = useState("");

    const onChangeAgeHandler = (e) =>{
        setAge(e.target.value);
    }

    const onChangeNameHandler = (e) =>{
        setName(e.target.value);
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        const user={
            name,
            age
        };
        props.onNewUserAddedHandler(user);
        setName("");
        setAge(10);
    }

    return(
        <Card className="new-user">
            <form action="" onSubmit={onSubmitHandler}>
                <div className="new-user_controls">
                    <div className="new-user_control">
                        <label htmlFor="Username">Username</label>
                        <input type="text" value={name} onChange={onChangeNameHandler}/>
                    </div>
                    <div className="new-user_control">
                        <label htmlFor="Age">Age (Years)</label>
                        <input type="number" name="age" id="age" min="10" max="99" step="1" value={age} onChange={onChangeAgeHandler}/>
                    </div>
                </div>
                <div className="new-user_actions">
                    <Button type='submit'>Add user</Button>
                </div>
            </form>
        </Card>
    )
}

export default NewUser;