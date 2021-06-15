import * as userService from "../../utilities/users-service";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideBarNav from '../SideBar/SideBar';

export default function IndexPage({ user, setUser }) {
  const [student, setStudent] = useState({
    first_name: "",
    last_name: "",
    parent: user.id,
    teacher: [],
  });
  function handleLogOut() {
    console.log("logout");
    userService.logOut();
    setUser(null);
  }
  function handleChange(e) {
    setStudent({ ...student, [e.target.name]: e.target.value });
  }
  return (
    <>
      <Link to="" onClick={handleLogOut}>
        Click to log out
      </Link>
      <SideBarNav />
      <h1> Hello World</h1>
      <h4> kek </h4>
      <h5> yer name is: {user.first_name}, {user.last_name} </h5>
      <h5> you {user.isTeacher === true ? "ARE" : "ARE NOT"} a teacher!</h5>
      {user.isTeacher === false ? (
        <>
          {/* TODO: 
          Partially stubbed up student signup. State places user.id of parent as the parent id for child in init.
          Create button and <form> tags when students model is finalized */}
          <h2>Create Student</h2>
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={student.first_name}
            onChange={handleChange}
            required
          />
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={student.last_name}
            onChange={handleChange}
            required
          />
        </>
      ) : (
        ""
      )}
    </>
  );
}
