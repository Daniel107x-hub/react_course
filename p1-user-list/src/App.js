import { useState } from "react";
import NewUser from "./components/NewUser/NewUser";
import ErrorModal from "./components/UI/ErrorModal";
import Users from "./components/Users/Users";

const users_list = [
  {
      id: 1,
      name: 'Daniel',
      age: 26
  },
  {
      id: 2,
      name: 'Miranda',
      age: 27
  }
];

function App() {
  const [usersList, setUsersList] = useState(users_list);
  const [error, setError] = useState(false);

  const isValidUser = (user)=>{
    const {name, age} = user;
    return name.trim().length > 0 && age >= 18;
  }

  const onNewUserAddedHandler = (user) =>{
    const validUser = isValidUser(user);
    if(validUser){
      const userData = {
        ...user,
        id: Math.random().toString()
      }
      setUsersList((prev)=>{
        return [...prev, userData];
      });
    }else{
      setError(true);
    }
  }

  const onCloseModalHandler = ()=>{
    setError(false);
  }

  return (
    <div>
      {
        error && <ErrorModal type='Invalid input' onCloseModal={onCloseModalHandler}>Please enter a valid age</ErrorModal>
      }
      <NewUser onNewUserAddedHandler={onNewUserAddedHandler}/>
      <Users usersList={usersList}/>
    </div>
  );
}

export default App;
