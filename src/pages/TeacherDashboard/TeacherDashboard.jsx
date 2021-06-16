import React, { useState, useEffect } from "react";
import SideBarNav from "../../components/SideBar/SideBarNav";
import * as classApi from "../../utilities/classes-api";
import * as userApi from "../../utilities/users-api";
import ClassFeed from "../../components/ClassFeed/ClassFeed";
import MaterialModal from "../../components/MaterialModal/MaterialModal";
import axios from "axios";

import Body from "./sections/Body";
import Header from "./sections/Header";

import "./TeacherDashboard.scss";

export default function TeacherDashboard({ user }) {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  let data = {};
  const headers = {
    "Content-Type": "application/json",
  };

  const mockClasses = [
    {
      subject: "Math",
      period: 2,
      students: [1, 2, 3, 4, 5],
      _id: 495847594,
    },
    {
      subject: "English",
      period: 3,
      students: [1, 2, 3, 4, 5, 6, 7, 8],
      _id: 495847563,
    },
  ];

  // If teacher is logged in, show their classes
  async function getClasses() {
    try {
      const allClasses = await classApi.getAll();
      const teachersClasses = allClasses.classes.filter(
        (thisClass) => user._id === thisClass.teacher
      );
      setClasses([...teachersClasses, ...mockClasses]);
    } catch (error) {
      console.log(error);
    }
  }

  // Add a class if teacher
  async function addClass(data) {
    try {
      await classApi.create(data);
    } catch (error) {
      console.log(error);
    }
  }

  // If parent is logged in, show their students
  function getStudents() {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}api/students/index`,
        data,
        headers
      )
      .then((response) => {
        console.log("Axios calling");
        console.log(response.data.students);
        response.data.students.forEach((student) => {
          if (student.parent == user.id) {
            console.log("1", student);
            setStudents((prevstudent) => [...prevstudent, student]);
          }
        });
        console.log("State", students);
      })
      .catch((err) => {
        console.log("Failed");
        console.log(err);
      });
    /*
            try{
                const allStudents = await studentApi.getAll();
                console.log('hi', allStudents);
            } catch (error) {
                console.log(error)
            }
            */
    // nothing yet
  }

  function handleAnnouncementClick() {
    // Get form for new announcement
  }

  useEffect(() => {
    console.log(process.env.REACT_APP_SERVER_URL);
    if (user.isTeacher) {
      getClasses();
    } else {
      getStudents();
    }
  }, []);

  return (
    <div className="container">
      <SideBarNav user={user} />

      <div className="dash-container">
        <Header user={user} />

        <div className="dash-body">
          <Body user={user} classes={classes} />
        </div>
      </div>
    </div>
  );
}