import React from 'react'
import { Element } from 'react-scroll'
import './Project.css'
import employee from '../asset/employee.png';
import todolist from '../asset/todolist.png';
import userform from '../asset/userform.png';

const Project = () => {

  const projects = {
    project: [
      {
        projectname: "employee details",
        img: employee,
        para: "Created a simple employee management app using HTML, CSS, and ReactJS. Designed user-friendly forms to add employee details and display them in a table. Added options to edit or delete entries, with React handling updates efficiently."
      },
      {
        projectname: "user form",
        img: userform,
        para: "Created a React-based form application with real-time input validation and reusable components. Used custom hooks to manage form data and validation efficiently. Designed a responsive layout with CSS.",
      },
      {
        projectname: "todolist",
        img: todolist,
        para: "Created a basic To-Do List app using HTML, CSS, and JavaScript. Users can add, delete, and mark tasks as complete with real-time updates. Designed a simple and user-friendly interface, making it easy to manage daily tasks."
      },
    ]
  }
  return (
    <Element id='project'>
      <section className='project-container mt-2'>
        <div className='projectheading-container '>
          <h2>Project</h2>
        </div>
        <div className='projectall-container'>
          {projects.project.map((projectsep,index)=>(
            <div className='project' key={index}>
            <h3>{projectsep.projectname}</h3>
            <img src={projectsep.img} alt={`${projectsep.projectname}`} className='mx-5'/>
            <p >{projectsep.para}</p>
            <a href='https://github.com/Musharaf-VD' target='_blank'rel='noopener noreferrer' ><button className='btn col-12'>view to github</button></a>
          </div>
          ))}


        </div>
      </section>

    </Element>
  )
}

export default Project