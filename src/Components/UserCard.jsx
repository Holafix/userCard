import React from 'react'
import './CSS/UserCard.css'
import holafix from './Assets/holafix.jpg'

const UserCard = () => {
  return (
        <div className="card">
            <div className="gradient"></div>
            <div className="profile-down">
                <img src={holafix} alt="" />
                <div className="header">Holafix</div>
                <div className="about">I am Holafix, a frontend web developer, proficient in HTML, CSS, Javascript and react. Hire me for freelance project or long term. I am available</div>
                <div className="contact"> <a href="mailto:olatundeolawale111@gmail.com">Contact Me</a> </div>
            </div>
        </div>
  )
}

export default UserCard
