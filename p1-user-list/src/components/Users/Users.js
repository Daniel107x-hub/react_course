import Card from "../UI/Card";
import User from "./User";
import './Users.css';

const Users = (props) =>{
    return(
        <Card className="users">
            {
                props.usersList.map(user => <User name={user.name} age={user.age} key={user.id}/>)
            }
        </Card>
    )
}

export default Users;