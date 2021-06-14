import * as userService from "../../utilities/users-service";
import { Link } from "react-router-dom";

export default function App({ user, setUser }) {
  function handleLogOut() {
    console.log('logout')
    userService.logOut();
    setUser(null);
  }
  return (
    <> 
        <h1> Hello World</h1>
        <h4> kek </h4>
        <h5> yer name is: {user.name}</h5>
        <Link to="" onClick={handleLogOut}>Click to log out</Link>
    </>
  )
}